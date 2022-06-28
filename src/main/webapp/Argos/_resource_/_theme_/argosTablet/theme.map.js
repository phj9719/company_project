(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
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
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            						"padding" : nexacro.PaddingObject("0px 3px 3px 5px"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #6abce4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #6abce4")
            					},
            					"readonly" :
            					{
            						"color" : nexacro.ColorObject("#cecece"),
            						"border" : nexacro.BorderObject("1px solid #bbbbbb")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#cecece")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#555555")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 3px 3px 5px"),
            						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            						"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #6abce4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #6abce4")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#cecece")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
            					}
            				},
            				"class" :
            				[
            					{
            						"medt_clock" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#555555"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            						"padding" : nexacro.PaddingObject("5px 3px 3px 3px"),
            						"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #6abce4")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dbdbdb"),
            						"color" : nexacro.ColorObject("#cecece")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            						"color" : nexacro.ColorObject("#cecece")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #6abce4")
            					}
            				}
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            						"padding" : nexacro.PaddingObject("5px 3px 3px 3px"),
            						"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\""),
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #6abce4")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dbdbdb"),
            						"color" : nexacro.ColorObject("#cecece")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            						"color" : nexacro.ColorObject("#cecece")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#555555")
            					}
            				}
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#555555")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bbbbbb")
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bbbbbb")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
            					},
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
            			"SpinControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#9a9a9a")
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
            								"border" : nexacro.BorderObject("1px solid #efefef")
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
            								"color" : nexacro.ColorObject("#ffffff"),
            								"border" : nexacro.BorderObject("1px solid #2497ce,1px solid #2497ce,1px solid #47afe1"),
            								"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            								"padding" : nexacro.PaddingObject("5px 14px")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#4594cd"),
            								"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            								"border" : nexacro.BorderObject("1px solid #efefef,1px solid #efefef,1px solid #ffffff,1px solid #efefef"),
            								"padding" : nexacro.PaddingObject("6px 14px")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("6px 14px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#ededed"),
            								"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            								"border" : nexacro.BorderObject("1px solid #d9d9d9,1px solid #f4f9fc,1px solid #d9d9d9,1px solid #d9d9d9"),
            								"padding" : nexacro.PaddingObject("6px 14px")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#4594cd"),
            								"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            								"border" : nexacro.BorderObject("1px solid #efefef,1px solid #efefef,1px solid #ffffff,1px solid #efefef"),
            								"padding" : nexacro.PaddingObject("6px 14px")
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
            						"color" : nexacro.ColorObject("#555555"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
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
            						"color" : nexacro.ColorObject("#555555"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
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
            								"color" : nexacro.ColorObject("#555555"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_NN.png\")"),
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
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
            						},
            						"class" :
            						[
            							{
            								"sqRadio" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#555555"),
            											"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            											"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")"),
            											"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            											"letterSpacing" : nexacro.CSSValueObject("-1px")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#9c9c9c"),
            											"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
            										},
            										"disabled_selected" :
            										{
            											"color" : nexacro.ColorObject("#9c9c9c"),
            											"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
            										},
            										"selected" :
            										{
            											"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            										}
            									}
            								}
            							}
            						]
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
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("0px 0px 1px 5px"),
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#cecece")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("0px 0px 1px 5px"),
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#cecece")
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
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")"),
            								"padding" : nexacro.PaddingObject("10px"),
            								"iconPosition" : "right"
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")"),
            								"padding" : nexacro.PaddingObject("10px"),
            								"iconPosition" : "right"
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_combodrop.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_combodrop_disabled.png\")")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_combodrop.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_combodrop_disabled.png\")")
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
            						"color" : nexacro.ColorObject("#555555")
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
            						"class" :
            						[
            							{
            								"grd_DataList" :
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
            								"grd_Monitor" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#3f3f3f")
            										}
            									}
            								}
            							},
            							{
            								"grd_DataList_h2" :
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
            			"nextbutton" :
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
            										"border" : nexacro.BorderObject("1px solid #bbbbbb")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdbdb")
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
            										"border" : nexacro.BorderObject("1px solid #bbbbbb")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdbdb")
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
            								"font" : nexacro.FontObject("normal 500 12pt/normal \"Noto Sans KR\""),
            								"color" : nexacro.ColorObject("#878787")
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
            										"font" : nexacro.FontObject("normal 500 9pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#313131"),
            										"border" : nexacro.BorderObject("0px solid #4594cd")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0b7ed7")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #4594cd"),
            										"font" : nexacro.FontObject("normal 500 8pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#cccccc")
            									},
            									"today" :
            									{
            										"border" : nexacro.BorderObject("1px solid #4594cd")
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
            						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            						"color" : nexacro.ColorObject("#555555"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
            					},
            					"readonly" :
            					{
            						"color" : nexacro.ColorObject("#cecece")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#cecece")
            					}
            				}
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #bbbbbb"),
            						"color" : nexacro.ColorObject("#555555"),
            						"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
            					},
            					"readonly" :
            					{
            						"color" : nexacro.ColorObject("#cecece")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#cecece")
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
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("0px 3px 5px 5px"),
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("0px 3px 5px 5px"),
            								"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\"")
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
            						"color" : nexacro.ColorObject("#d8d8d8")
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
            						"color" : nexacro.ColorObject("#d8d8d8")
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
            								"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
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
            								"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
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
            										"color" : nexacro.ColorObject("#555555"),
            										"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\""),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
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
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#cecece")
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
            										"border" : nexacro.BorderObject("1px solid #dbdbdb"),
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
            										"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"textPadding" : nexacro.PaddingObject("0px 15px 0px 15px")
            									},
            									"mouseover" :
            									{
            										"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
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
            						"color" : nexacro.ColorObject("#d8d8d8")
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
            			"cell" :
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
            					},
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
            										"class" :
            										[
            											{
            												"grd_DataList" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent"),
            															"color" : nexacro.ColorObject("#666666"),
            															"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            															"padding" : nexacro.PaddingObject("7px 0px")
            														},
            														"disabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"readonly" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"blinked" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"invalidtext" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														}
            													}
            												}
            											},
            											{
            												"grd_Monitor" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent"),
            															"color" : nexacro.ColorObject("#777777"),
            															"font" : nexacro.FontObject("normal 500 13pt/normal \"Noto Sans KR\"")
            														}
            													}
            												}
            											},
            											{
            												"grd_DataList_h2" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent"),
            															"color" : nexacro.ColorObject("#666666"),
            															"font" : nexacro.FontObject("normal 500 16pt/normal \"Noto Sans KR\""),
            															"padding" : nexacro.PaddingObject("7px 0px")
            														},
            														"disabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"focused" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"readonly" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"blinked" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"invalidtext" :
            														{
            															"border" : nexacro.BorderObject("1px solid transparent")
            														},
            														"selected" :
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
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"class" :
            										[
            											{
            												"grd_DataList" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#333333"),
            															"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            															"border" : nexacro.BorderObject("1px solid transparent")
            														}
            													}
            												}
            											},
            											{
            												"grd_Monitor" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#555555"),
            															"font" : nexacro.FontObject("normal 700 13pt/normal \"Noto Sans KR\""),
            															"border" : nexacro.BorderObject("1px solid transparent")
            														}
            													}
            												}
            											},
            											{
            												"grd_DataList_h2" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#333333"),
            															"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            															"border" : nexacro.BorderObject("1px solid #f8f8f8")
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
            				},
            				"class" :
            				[
            					{
            						"battery0" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery10" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery20" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery30" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery40" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery50" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery60" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery70" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery80" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery90" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"battery100" :
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
            													"class" :
            													[
            														{
            															"grd_Monitor" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"font" : nexacro.FontObject("normal 500 11pt/normal \"Noto Sans KR\""),
            																		"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
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
            						}
            					},
            					{
            						"blueFont" :
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
            													"class" :
            													[
            														{
            															"grd_DataList_h2" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("blue")
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
            						}
            					},
            					{
            						"orangeFont" :
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
            													"class" :
            													[
            														{
            															"grd_DataList_h2" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("orange")
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
            						}
            					}
            				]
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
            			"cellbutton" :
            			{
            				"parent" :
            				{
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
            					},
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
            												"class" :
            												[
            													{
            														"grd_DataList" :
            														{
            															"self" :
            															{
            																"disabled" :
            																{
            																	"color" : nexacro.ColorObject("#cecece")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #9f9f9f")
            																},
            																"focused" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #666666")
            																},
            																"selected" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																}
            															}
            														}
            													},
            													{
            														"grd_DataList_h2" :
            														{
            															"self" :
            															{
            																"disabled" :
            																{
            																	"color" : nexacro.ColorObject("#cecece")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #9f9f9f")
            																},
            																"focused" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #666666")
            																},
            																"selected" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																}
            															}
            														}
            													}
            												]
            											}
            										}
            									},
            									"head" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"class" :
            												[
            													{
            														"grd_DataList" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																},
            																"disabled" :
            																{
            																	"color" : nexacro.ColorObject("#939393")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #9f9f9f")
            																},
            																"focused" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #666666")
            																},
            																"selected" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																}
            															}
            														}
            													},
            													{
            														"grd_DataList_h2" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																},
            																"disabled" :
            																{
            																	"color" : nexacro.ColorObject("#939393")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #9f9f9f")
            																},
            																"focused" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #666666")
            																},
            																"selected" :
            																{
            																	"border" : nexacro.BorderObject("1px solid #c0c0c0")
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
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
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
            					},
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
            												"class" :
            												[
            													{
            														"grd_DataList" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none")
            																}
            															}
            														}
            													},
            													{
            														"grd_DataList_h2" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #c0c0c0, 0px none")
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
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
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
            					},
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
            												"class" :
            												[
            													{
            														"grd_DataList" :
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
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #4594cd, 0px none")
            																},
            																"focused" :
            																{
            																	"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #4594cd, 0px none")
            																},
            																"readonly" :
            																{
            																	"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
            																}
            															}
            														}
            													},
            													{
            														"grd_DataList_h2" :
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
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #4594cd, 0px none")
            																},
            																"focused" :
            																{
            																	"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #4594cd, 0px none")
            																},
            																"readonly" :
            																{
            																	"border" : nexacro.BorderObject("0px none, 0px none, 1px dashed #c0c0c0, 0px none")
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
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
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
            			"Button" :
            			{
            				"class" :
            				[
            					{
            						"tMainMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#d3e2f1"),
            									"font" : nexacro.FontObject("normal 700 15pt/normal \"Noto Sans KR\""),
            									"iconPosition" : "top",
            									"textPadding" : nexacro.PaddingObject("5px 4px 4px")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"tSubMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#777777"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\"")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#eeeeee")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_tSave" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#1e88e5"),
            									"font" : nexacro.FontObject("normal 700  16pt/normal \"Noto Sans KR\""),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_save.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_save_disabled.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_tDelete" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#f44336"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_delete_disabled.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_tSearch" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_search.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            									"iconPosition" : "right"
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_search_disabled.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_tMeasure" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_bluetooth.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 7px 0px 0px"),
            									"iconPosition" : "left"
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#b4b4b4"),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_bluetooth_disabled.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_tMeasureLink" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700  12pt/normal \"Noto Sans KR\""),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_bluetooth2.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 4px"),
            									"iconPosition" : "left"
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#b4b4b4"),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_bluetooth2_disabled.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_tRecord" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/ico_record.png')"),
            									"font" : nexacro.FontObject("normal 700  12pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_record_disabled.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_tSelectRoom" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("3px solid #47afe1"),
            									"color" : nexacro.ColorObject("#47afe1"),
            									"font" : nexacro.FontObject("normal 700 20pt/normal \"Noto Sans KR\"")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"border" : nexacro.BorderObject("3px solid #cecece")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_tDefaultGray" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#bbbbbb"),
            									"font" : nexacro.FontObject("normal 700  15pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_tDefaultSkyblue" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"neutest" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 13pt/normal \"Noto Sans KR\"")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#c2c2c2")
            								}
            							}
            						}
            					},
            					{
            						"btn_tReset" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#1e88e5"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_reset.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"icon" : nexacro.UrlObject("url('theme://images/ico_reset_disabled.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_tSelectEtc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("3px solid #385d8a"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 700 20pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_tDefaultSkyblue2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700  16pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_tSelectNumber" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("3px solid #47afe1"),
            									"color" : nexacro.ColorObject("#47afe1"),
            									"font" : nexacro.FontObject("normal 700 20pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_tSelectNumber2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("normal 700 20pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_tDefaultSkyblue3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#777777"),
            									"font" : nexacro.FontObject("normal 700  16pt/normal \"Noto Sans KR\"")
            								},
            								"selected" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_tRecord2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/ico_record2.png')"),
            									"font" : nexacro.FontObject("normal 700  12pt/normal \"Noto Sans KR\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					}
            				]
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
            								"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\""),
            								"border" : nexacro.BorderObject("1px solid #bbbbbb")
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_tDataHForm1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"border" : nexacro.BorderObject("0px none,1px solid #f8f8f8,0px none,0px none")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"sta_tDataBForm1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\""),
            									"border" : nexacro.BorderObject("0px none,1px solid #e4e4e4,0px none,0px none")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"border" : nexacro.BorderObject("0px none,1px solid #e4e4e4,0px none,0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,1px solid #e4e4e4,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_tDataBForm2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\""),
            									"border" : nexacro.BorderObject("0px none,1px solid #e4e4e4,0px none,0px none")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"border" : nexacro.BorderObject("0px none,1px solid #e4e4e4,0px none,0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none,1px solid #e4e4e4,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_tDataBForm3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\""),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#cecece"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_tMenuTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#3f3f3f"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
            									"font" : nexacro.FontObject("normal 700 19pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_tTxt1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_tTxt2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_tDataHForm2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\"")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"sta_tDataHForm3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #f8f8f8")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"sta_tDataHForm4" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 700 16pt/normal \"Noto Sans KR\""),
            									"border" : nexacro.BorderObject("0px none,1px solid #f8f8f8,1px solid #f8f8f8,0px none")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"sta_blue" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#0070c0")
            								}
            							}
            						}
            					},
            					{
            						"sta_green" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#03a564")
            								}
            							}
            						}
            					},
            					{
            						"sta_orange" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ff9651")
            								}
            							}
            						}
            					},
            					{
            						"sta_red" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ff455b")
            								}
            							}
            						}
            					},
            					{
            						"sta_gray" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555")
            								}
            							}
            						}
            					},
            					{
            						"sta_lightgray" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"sta_tPopupTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 700 20pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_tPopupText" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("normal 500 15pt/normal \"Noto Sans KR\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_pink" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#f89aba")
            								}
            							}
            						}
            					},
            					{
            						"sta_lilac" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#b59fff")
            								}
            							}
            						}
            					},
            					{
            						"sta_lightgreen" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#8fd696")
            								}
            							}
            						}
            					},
            					{
            						"sta_lightorange" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffb344")
            								}
            							}
            						}
            					},
            					{
            						"sta_check" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#0ba4e0"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 23px"),
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
            									"disabled" :
            									{
            									},
            									"mouseover" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_danger" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff455b")
            								}
            							}
            						}
            					},
            					{
            						"div_safe" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6bb5ea")
            								}
            							}
            						}
            					},
            					{
            						"div_select" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0061b4")
            								}
            							}
            						}
            					},
            					{
            						"div_orange" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #fe8332")
            								}
            							}
            						}
            					},
            					{
            						"div_green" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #179c67")
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
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_P.png")] = { width:24, height:24 };
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
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_P.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:18, height:18 };
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
        		imgcache[nexacro._getImageLocation("theme://images/btn_combodrop.png")] = { width:12, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_combodrop_disabled.png")] = { width:12, height:6 };
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
        		imgcache[nexacro._getImageLocation("theme://images/img_popmenu_check_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_menuexpand_N.png")] = { width:7, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit_D.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_save.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_save_disabled.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_delete.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_delete_disabled.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_search.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_search_disabled.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/title_bar.png")] = { width:6, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_bluetooth.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_bluetooth_disabled.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_bluetooth2.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_bluetooth2_disabled.png")] = { width:8, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_record.png")] = { width:12, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_record_disabled.png")] = { width:12, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_0.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_10.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_20.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_30.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_40.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_50.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_60.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_70.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_80.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_90.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_100.png")] = { width:50, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_0.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_1.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_2.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_3.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_4.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_5.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_6.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_7.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_8.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_9.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_10.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_clock.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_reset.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_reset_disabled.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_check.png")] = { width:18, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_record2.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D_before.png")] = { width:16, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N_before.png")] = { width:16, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_P_before.png")] = { width:16, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_P.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_emergency_off.png")] = { width:78, height:46 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_falling_alert.gif")] = { width:78, height:58 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_falling_basic.png")] = { width:78, height:58 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_P.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Login_XP.png")] = { width:32, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_D.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_N.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_O.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_D.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_N.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_O.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_P.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_D.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_N.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_O.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_P.png")] = { width:4, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/face_off.png")] = { width:150, height:150 };
        		imgcache[nexacro._getImageLocation("theme://images/face_on.png")] = { width:150, height:150 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_alarm_off.png")] = { width:512, height:512 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_alarm_on.png")] = { width:512, height:512 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_backspace.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery0.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery1.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery10.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery2.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery3.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery4.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery5.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery6.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery7.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery8.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery9.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_100.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_100_test.png")] = { width:24, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_20.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_30.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_40.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_50.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_60.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_70.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_80.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_90.png")] = { width:59, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_battery_nocon.png")] = { width:34, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_calendar.png")] = { width:16, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_chev_diaper.png")] = { width:18, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_delete2.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min0.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min1.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min10.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min2.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min3.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min4.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min5.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min6.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min7.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min8.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper5min9.png")] = { width:44, height:36 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow0.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow1.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow10.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow2.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow3.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow4.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow5.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow6.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow7.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow8.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diapernow9.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_alert.png")] = { width:14, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_nocon.png")] = { width:66, height:52 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_off.png")] = { width:14, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_diaper_on.png")] = { width:14, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_edit.png")] = { width:20, height:20 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_fail.png")] = { width:60, height:60 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_filter.png")] = { width:9, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_measuring.png")] = { width:76, height:60 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_popclose.png")] = { width:24, height:24 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_pulse_alert.png")] = { width:14, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_pulse_gray.png")] = { width:38, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_pulse_nocon.png")] = { width:38, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_pulse_on.png")] = { width:14, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_pulse_red.png")] = { width:38, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_star_pulsenot.png")] = { width:36, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_battery.png")] = { width:23, height:38 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_caution.png")] = { width:20, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_diaper.png")] = { width:36, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_diapernot.png")] = { width:36, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_sta_pulse.png")] = { width:36, height:32 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_up.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_upload.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/imv_profile.png")] = { width:46, height:46 };
        		imgcache[nexacro._getImageLocation("theme://images/imv_profile_e.png")] = { width:46, height:46 };
        		imgcache[nexacro._getImageLocation("theme://images/lie1.png")] = { width:200, height:134 };
        		imgcache[nexacro._getImageLocation("theme://images/lie2.png")] = { width:200, height:134 };
        		imgcache[nexacro._getImageLocation("theme://images/lie3.png")] = { width:200, height:134 };
        		imgcache[nexacro._getImageLocation("theme://images/lie4.png")] = { width:200, height:134 };
        		imgcache[nexacro._getImageLocation("theme://images/lie5.png")] = { width:200, height:134 };
        		imgcache[nexacro._getImageLocation("theme://images/lie6.png")] = { width:200, height:134 };
        		imgcache[nexacro._getImageLocation("theme://images/login_bg.png")] = { width:800, height:800 };
        		imgcache[nexacro._getImageLocation("theme://images/login_ttl.png")] = { width:236, height:83 };
        		imgcache[nexacro._getImageLocation("theme://images/logo.png")] = { width:66, height:59 };
        		imgcache[nexacro._getImageLocation("theme://images/m01.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m01_m.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m02.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m02_m.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m03.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m03_m.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m04.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m04_m.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m05.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m05_m.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m06.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m06_m.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m07.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/m07_m.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu1_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu1_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu2_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu2_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu3_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu3_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu4_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu4_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu5_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu5_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu6_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu6_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu7_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/menu7_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu1_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu2_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu3_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu3_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu4_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu4_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu5_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu5_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu6_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu6_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu7_off.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/nemu7_on.png")] = { width:40, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/pop_menu_icon.png")] = { width:14, height:14 };
	};
}
)();
