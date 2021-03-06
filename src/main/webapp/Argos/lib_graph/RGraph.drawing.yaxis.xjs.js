//XJS=RGraph.drawing.yaxis.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        // version: 2017-02-18
        /**
         * o--------------------------------------------------------------------------------o
         * | This file is part of the RGraph package - you can learn more at:               |
         * |                                                                                |
         * |                          http://www.rgraph.net                                 |
         * |                                                                                |
         * | RGraph is licensed under the Open Source MIT license. That means that it's     |
         * | totally free to use!                                                           |
         * o--------------------------------------------------------------------------------o
         */

        /**
         * Having this here means that the RGraph libraries can be included in any order, instead of you having
         * to include the common core library first.
         */

        // Define the RGraph global variable
        if (!nexacro.RGraph.Drawing_YAxis)
        {
        	/**
        	 * The constructor. This function sets up the object. It takes the ID (the HTML attribute) of the canvas as the
        	 * first argument and the X coordinate of the axis as the second
        	 *
        	 * @param string id The canvas tag ID
        	 * @param number x  The X coordinate of the Y axis
        	 */
        	nexacro.RGraph.Drawing_YAxis = function (RG, conf, x)
        	{
        		x = nexacro.toNumber(x);
        		var id = conf.id;
        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];
        		// this.id                = id;
        		// this.canvas            = conf.canvas;
        		// this.context           = conf.context;
        		var parseConfObjectForOptions = true;
        		this.canvas.__object__ = this;
        		this.x = x;
        		this.coords = [];
        		this.coordsText = [];
        		this.original_colors = [];
        		this.maxLabelLength = 0;
        		this.firstDraw = true; //After the first draw this will be false

        		/**
        		 * This defines the type of this shape
        		 */
        		this.type = 'drawing.yaxis';


        		/**
        		 * This facilitates easy object identification, and should always be true
        		 */
        		this.isRGraph = true;


        		/**
        		 * This adds a uid to the object that you can use for identification purposes
        		 */
        		this.uid = RG.CreateUID();

        		/**
        		 * This adds a UID to the canvas for identification purposes
        		 */
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();

        		/**
        		 * Some example background properties
        		 */
        		this.properties =
        			{
        			'chart.gutter.top' : 25,
        			'chart.gutter.bottom' : 30,
        			'chart.min' : 0,
        			'chart.max' : null,
        			'chart.colors' : ['black'],
        			'chart.title' : '',
        			'chart.title.color' : null,
        			'chart.numticks' : 5,
        			'chart.numlabels' : 5,
        			'chart.labels.specific' : null,
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.size' : 12,
        			'chart.text.color' : null,
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.align' : 'left',
        			'hart.scale.formatter' : null,
        			'chart.scale.point' : '.',
        			'chart.scale.decimals' : 0,
        			'chart.scale.decimals' : 0,
        			'chart.scale.point' : '.',
        			'chart.scale.invert' : false,
        			'chart.scale.zerostart' : true,
        			'chart.scale.visible' : true,
        			'chart.units.pre' : '',
        			'chart.units.post' : '',
        			'chart.linewidth' : 1,
        			'chart.noendtick.top' : false,
        			'chart.noendtick.bottom' : false,
        			'chart.noyaxis' : false,
        			'chart.tooltips' : null,
        			'chart.tooltips.effect' : 'fade',
        			'chart.tooltips.event' : 'onclick',
        			'chart.xaxispos' : 'bottom',
        			'chart.events.click' : null,
        			'chart.events.mousemove' : null,
        			'chart.clearto' : [0, 0, 0, 0]
        		};


        		/**
        		 * A simple check that the browser has canvas support
        		 */
        		if (!this.canvas)
        		{
        			alert('[DRAWING.YAXIS] No canvas support');
        			return;
        		}

        		/**
        		 * Create the dollar object so that functions can be added to them
        		 */
        		this.$0 = {
        		};


        		/**
        		 * Translate half a pixel for antialiasing purposes - but only if it hasn't beeen
        		 * done already
        		 *
        		 * ** Could use setTransform() here instead ?
        		 */
        		if (!this.canvas.__rgraph_aa_translated__)
        		{
        			this.context.translate(0.5, 0.5);

        			this.canvas.__rgraph_aa_translated__ = true;
        		}


        		var ca = this.canvas,co = this.context,prop = this.properties,pa2 = RG.path2,ma = Math;

        		/**
        		 * A setter method for setting graph properties. It can be used like this: obj.Set('chart.strokestyle', '#666');
        		 *
        		 * @param name  string The name of the property to set
        		 * @param value mixed  The value of the property
        		 */
        		this.set =
        			this.Set = function (name)
        		{
        			var value = typeof arguments[1] === 'undefined' ? null : arguments[1];

        			/**
        			 * the number of arguments is only one and it's an
        			 * object - parse it for configuration data and return.
        			 */
        			if (arguments.length === 1 && typeof name === 'object')
        			{
        				RG.parseObjectStyleConfig(this, name);
        				return this;
        			}

        			/**
        			 * This should be done first - prepend the property name with "chart." if necessary
        			 */
        			if (name.substr(0, 6) != 'chart.')
        			{
        				name = 'chart.' + name;
        			}
        			// Convert uppercase letters to dot+lower case letter
        			while (name.match(/([A-Z])/))
        			{
        				name = name.replace(/([A-Z])/, '.' + RegExp.$1.toLowerCase());
        			}
        			prop[name] = value;
        			return this;
        		};
        		/**
        		 * A getter method for retrieving graph properties. It can be used like this: obj.Get('chart.strokestyle');
        		 *
        		 * @param name  string The name of the property to get
        		 */
        		this.get =
        			this.Get = function (name)
        		{
        			/**
        			 * This should be done first - prepend the property name with "chart." if necessary
        			 */
        			if (name.substr(0, 6) != 'chart.')
        			{
        				name = 'chart.' + name;
        			}

        			// Convert uppercase letters to dot+lower case letter
        			while (name.match(/([A-Z])/))
        			{
        				name = name.replace(/([A-Z])/, '.' + RegExp.$1.toLowerCase());
        			}

        			return prop[name.toLowerCase()];
        		};

        		/**
        		 * Draws the axes
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
        			/**
        			 * Fire the onbeforedraw event
        			 */
        			RG.fireCustomEvent(this, 'onbeforedraw');
        			/**
        			 * Some defaults
        			 */
        			this.gutterTop = prop["chart.gutter.top"];
        			this.gutterBottom = prop["chart.gutter.bottom"];
        			/**
        			 * Stop this growing uncntrollably
        			 */
        			this.coordsText = [];

        			if (!prop["chart.text.color"])
        			{
        				prop["chart.text.color"] = prop["chart.colors"][0];
        			}
        			if (!prop["chart.title.color"])
        			{
        				prop["chart.title.color"] = prop["chart.colors"][0];
        			}
        			/**
        			 * Parse the colors. This allows for simple gradient syntax
        			 */
        			if (!this.colorsParsed)
        			{
        				this.parseColors();

        				// Don't want to do this again
        				this.colorsParsed = true;
        			}
        			// DRAW Y AXIS HERE
        			this.drawYAxis();

        			/**
        			 * This installs the event listeners
        			 */
        			RG.InstallEventListeners(this);

        			/**
        			 * Fire the onfirstdraw event
        			 */
        			if (this.firstDraw)
        			{
        				RG.fireCustomEvent(this, 'onfirstdraw');
        				this.firstDraw = false;
        				this.firstDrawFunc();
        			}
        			/**
        			 * Fire the ondraw event
        			 */
        			RG.FireCustomEvent(this, 'ondraw');

        			return this;
        		};



        		/**
        		 * Used in chaining. Runs a function there and then - not waiting for
        		 * the events to fire (eg the onbeforedraw event)
        		 *
        		 * @param function func The function to execute
        		 */
        		this.exec = function (func)
        		{
        			func(this);

        			return this;
        		};
        		/**
        		 * The getObjectByXY() worker method
        		 */
        		this.getObjectByXY = function (e)
        		{
        			if (this.getShape(e))
        			{
        				return this;
        			}
        		};
        		/**
        		 * Not used by the class during creating the axis, but is used by event handlers
        		 * to get the coordinates (if any) of the selected shape
        		 *
        		 * @param object e The event object
        		 */
        		this.getShape = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e);
        			var mouseX = mouseXY[0];
        			var mouseY = mouseXY[1];

        			if (mouseX >= this.x - (prop["chart.align"] == 'right' ? 0 : this.getWidth())
        				 && mouseX <= this.x + (prop["chart.align"] == 'right' ? this.getWidth() : 0)
        				 && mouseY >= this.gutterTop
        				 && mouseY <= (ca.height - this.gutterBottom))
        			{
        				var x = this.x;
        				var y = this.gutterTop;
        				var w = 15;
        				;
        				var h = ca.height - this.gutterTop - this.gutterBottom;

        				return {
        					0 : this,
        					1 : x,
        					2 : y,
        					3 : w,
        					4 : h,
        					5 : 0,
        					'object' : this,
        					'x' : x,
        					'y' : y,
        					'width' : w,
        					'height' : h,
        					'index' : 0,
        					'tooltip' : prop["chart.tooltips"] ? prop["chart.tooltips"][0] : null
        				};
        			}

        			return null;
        		};

        		/**
        		 * This function positions a tooltip when it is displayed
        		 *
        		 * @param obj object    The chart object
        		 * @param int x         The X coordinate specified for the tooltip
        		 * @param int y         The Y coordinate specified for the tooltip
        		 * @param objec tooltip The tooltips DIV element
        		 *
        		 this.positionTooltip = function (obj, x, y, tooltip, idx)
        		 {
        		 // If there's multiple charts on the canvas they leave unknown font settings
        		 co.font = prop['chart.text.size'] + ' ' + prop['chart.text.font'];
        		 var objFont = new nexacro.Style_font();
        		 objFont.set_face(prop['chart.text.font']);
        		 objFont.set_size(prop['chart.text.size']);

        		 var coordW;
        		 if(RG.ISIE8) {
        		 coordW     = RG._measureText(prop['chart.max'].toFixed(prop['chart.scale.decimals']),objFont)[0];
        		 } else {
        		 coordW     = co.measureText(prop['chart.max'].toFixed(prop['chart.scale.decimals'])).width;
        		 }
        		 var coordX     = obj.x - coordW;
        		 var coordY     = obj.gutterTop;
        		 var coordH     = ca.height - obj.gutterTop - obj.gutterBottom;
        		 var canvasXY   = RG.getCanvasXY(ca);
        		 var mouseXY    = RG.getMouseXY(window.event);

        		 var width      = tooltip.offsetWidth;
        		 var height     = tooltip.offsetHeight;

        		 // Set the top position
        		 tooltip.style.left = 0;
        		 tooltip.style.top  = window.event.pageY - height - 5 + 'px';

        		 // By default any overflow is hidden
        		 tooltip.style.overflow = '';

        		 // Reposition the tooltip if at the edges:

        		 // LEFT edge
        		 if (canvasXY[0] + mouseXY[0] - (width / 2) < 0) {
        		 tooltip.style.left = canvasXY[0] + mouseXY[0]  - (width * 0.1) + 'px';

        		 // RIGHT edge
        		 } else if (canvasXY[0] + mouseXY[0]  + (width / 2) > doc.body.offsetWidth) {
        		 tooltip.style.left = canvasXY[0] + mouseXY[0]  - (width * 0.9) + 'px';

        		 // Default positioning - CENTERED
        		 } else {
        		 tooltip.style.left = canvasXY[0] + mouseXY[0]  - (width / 2) + 'px';
        		 }
        		 };*/

        		/**
        		 * Each object type has its own Highlight() function which highlights the appropriate shape
        		 *
        		 * @param object shape The shape to highlight
        		 */
        		this.highlight =
        			this.Highlight = function (shape)
        		{
        			if (typeof prop["chart.highlight.style"] === 'function')
        			{
        				(prop["chart.highlight.style"])(shape);
        			}
        		};

        		/**
        		 * This allows for easy specification of gradients
        		 */
        		this.parseColors = function ()
        		{
        			// Save the original colors so that they can be restored when the canvas is reset
        			if (this.original_colors.length === 0)
        			{
        				this.original_colors["chart.colors"] = RG.array_clone(prop["chart.colors"]);
        			}

        			/**
        			 * Parse various properties for colors
        			 */
        			// prop['chart.title.color'] = this.parseSingleColorForGradient(prop['chart.title.color']);
        			// prop['chart.text.color']  = this.parseSingleColorForGradient(prop['chart.text.color']);
        			prop["chart.colors"][0] = this.parseSingleColorForGradient(prop["chart.colors"][0]);
        		};
        		/**
        		 * Use this function to reset the object to the post-constructor state. Eg reset colors if
        		 * need be etc
        		 */
        		this.reset = function ()
        		{
        		};
        		/**
        		 * This parses a single color value
        		 */
        		this.parseSingleColorForGradient = function (color)
        		{
        			if (!color)
        			{
        				return color;
        			}
        			var grad;
        			if (typeof color === 'string' && color.match(/^gradient\((.*)\)$/i))
        			{
        				grad = RG.createLinearGradient(co, 0, prop["chart.gutter.top"], 0, ca.height - this.gutterBottom, color);
        			}

        			return grad ? grad : color;
        		};

        		/**
        		 * The function that draws the Y axis
        		 */
        		this.drawYAxis =
        			this.DrawYAxis = function ()
        		{
        			this.maxLabelLength = 0;
        			// Allow both axis.xxx and chart.xxx to prevent any confusion that may arise
        			for (var i in prop)
        			{
        				if (typeof i == 'string')
        				{
        					var key = i.replace(/^chart\./, 'axis.');

        					prop[key] = prop[i];
        				}
        			}

        			var x = this.x,y = nexacro.toNumber(this.gutterTop),height = nexacro.toNumber(ca.height) - nexacro.toNumber(this.gutterBottom) - nexacro.toNumber(this.gutterTop),min = +prop["chart.min"] ? +prop["chart.min"] : 0,max = +prop["chart.max"],title = prop["chart.title"] ? prop["chart.title"] : '',color = prop["chart.colors"] ? prop["chart.colors"][0] : 'black',title_color = prop["chart.title.color"] ? prop["chart.title.color"] : color,label_color = prop["chart.text.color"] ? prop["chart.text.color"] : color,numticks = typeof (prop["chart.numticks"]) == 'number' ? prop["chart.numticks"] : 10,labels_specific = prop["chart.labels.specific"],numlabels = prop["chart.numlabels"] ? prop["chart.numlabels"] : 5,font = prop["chart.text.font"] ? prop["chart.text.font"] : 'Arial',size = prop["chart.text.size"] ? prop["chart.text.size"] : 10,align = typeof (prop["chart.align"]) == 'string' ? prop["chart.align"] : 'left',formatter = prop["chart.scale.formatter"],decimals = prop["chart.scale.decimals"],invert = prop["chart.scale.invert"],scale_visible = prop["chart.scale.visible"],units_pre = prop["chart.units.pre"],units_post = prop["chart.units.post"],linewidth = prop["chart.linewidth"] ? prop["chart.linewidth"] : 1,notopendtick = prop["chart.noendtick.top"],nobottomendtick = prop["chart.noendtick.bottom"],noyaxis = prop["chart.noyaxis"],xaxispos = prop["chart.xaxispos"];

        			// This fixes missing corner pixels in Chrome
        			co.lineWidth = linewidth + 0.001;
        			co.setElementLineWidth(co.lineWidth);

        			/**
        			 * Set the color
        			 */
        			co.strokeStyle = color;
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			if (!noyaxis)
        			{
        				/**
        				 * Draw the main vertical line
        				 */
        				co.beginPath();
        				co.moveTo(Math.round(x), y);
        				co.lineTo(Math.round(x), (y + height));
        				co.closePath();
        				co.strokeStyle = color;
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.stroke();

        				// RG.pa2(co,['b','m',Math.round(x), y,'l',Math.round(x), (y + height),'s',color]);
        				/**
        				 * Draw the axes tickmarks
        				 */
        				if (numticks)
        				{
        					var gap = (xaxispos == 'center' ? height / 2 : height) / numticks;
        					var halfheight = height / 2;

        					co.beginPath();
        					for (var i = (notopendtick ? 1 : 0); i <= (numticks - (nobottomendtick || xaxispos == 'center' ? 1 : 0)); ++i)
        					{
        						RG.pa2(co, ['m', align == 'right' ? x + 3 : x - 3, Math.round(y + (gap * i)), 'l', x, Math.round(y + (gap * i))]);
        					}

        					// Draw the bottom halves ticks if the X axis is in the center
        					if (xaxispos == 'center')
        					{
        						for (var i = 1; i <= numticks; ++i)
        						{
        							RG.pa2(co, ['m', align == 'right' ? x + 3 : x - 3, Math.round(y + halfheight + (gap * i)), 'l', x, Math.round(y + halfheight + (gap * i))]);
        						}
        					}
        					co.closePath();
        					co.stroke();
        				}
        			}


        			var objFont = new nexacro.Style_font();
        			objFont.set_face(font);
        			objFont.set_size(size);
        			/**
        			 * Draw the scale for the axes
        			 */
        			co.fillStyle = label_color;
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			// co.beginPath();
        			var text_len = 0;
        			if (scale_visible)
        			{
        				if (labels_specific && labels_specific.length)
        				{
        					// First - gp through the labels to find the longest
        					for (var i = 0,len = labels_specific.length; i < len; i += 1)
        					{
        						if (RG.ISIE8)
        						{
        							text_len = ma.max(text_len, RG._measureText(labels_specific[i], objFont)[0]);
        						}
        						else
        						{
        							text_len = ma.max(text_len, co.measureText(labels_specific[i]).width);
        						}
        					}

        					for (var i = 0,len = labels_specific.length; i < len; ++i)
        					{
        						var gap = (len - 1) > 0 ? (height / (len - 1)) : 0;

        						if (xaxispos == 'center')
        						{
        							gap /= 2;
        						}

        						RG.text2(this, {
        							'font' : font,
        							'size' : size,
        							'x' : x - (align == 'right' ? -5 : 5),
        							'y' : (i * gap) + this.gutterTop,
        							'text' : labels_specific[i],
        							'valign' : 'center',
        							'halign' : align == 'right' ? 'left' : 'right',
        							'tag' : 'scale'
        						});

        						/**
        						 * Store the max length so that it can be used if necessary to determine
        						 * whether the mouse is over the axis.
        						 */
        						if (RG.ISIE8)
        						{
        							this.maxLabelLength = ma.max(this.maxLabelLength, RG._measureText(labels_specific[i], objFont)[0]);
        						}
        						else
        						{
        							this.maxLabelLength = ma.max(this.maxLabelLength, co.measureText(labels_specific[i]).width);
        						}
        					}

        					if (xaxispos == 'center')
        					{
        						// It's "-2" so that the center label isn't added twice
        						for (var i = (labels_specific.length - 2); i >= 0; --i)
        						{
        							RG.text2(this, {
        								'font' : font,
        								'size' : size,
        								'x' : x - (align == 'right' ? -5 : 5),
        								'y' : ca.height - this.gutterBottom - (i * gap),
        								'text' : labels_specific[i],
        								'valign' : 'center',
        								'halign' : align == 'right' ? 'left' : 'right',
        								'tag' : 'scale'
        							});
        						}
        					}
        				}
        				else
        				{
        					for (var i = 0; i <= numlabels; ++i)
        					{
        						var original = ((max - min) * ((numlabels - i) / numlabels)) + min;

        						if (original == 0 && prop["chart.scale.zerostart"] == false)
        						{
        							continue;
        						}

        						var text = RG.numberFormat(this, original.toFixed(original === 0 ? 0 : decimals), units_pre, units_post);
        						var text = String(typeof (formatter) == 'function' ? formatter(this, original) : text);

        						// text_len is used below for positioning the title
        						var text_len;
        						if (RG.ISIE8)
        						{
        							text_len = ma.max(text_len, RG._measureText(text, objFont)[0]);
        						}
        						else
        						{
        							text_len = ma.max(text_len, co.measureText(text).width);
        						}
        						this.maxLabelLength = text_len;
        						var y;
        						if (invert)
        						{
        							y = height - ((height / numlabels) * i);
        						}
        						else
        						{
        							y = (height / numlabels) * i;
        						}

        						if (prop["chart.xaxispos"] == 'center')
        						{
        							y = y / 2;
        						}

        						// This fixes a bug, Replace this: -,400 with this: -400
        						text = text.replace(/^-,([0-9])/, '-$1');


        						/**
        						 * Now - draw the labels
        						 */
        						RG.text2(this, {
        							'font' : font,
        							'size' : size,
        							'x' : x - (align == 'right' ? -5 : 5),
        							'y' : y + this.gutterTop,
        							'text' : text,
        							'valign' : 'center',
        							'halign' : align == 'right' ? 'left' : 'right',
        							'tag' : 'scale'
        						});
        						/**
        						 * Draw the bottom half of the labels if the X axis is in the center
        						 */
        						if (prop["chart.xaxispos"] == 'center' && i < numlabels)
        						{
        							RG.Text2(this, {
        								'font' : font,
        								'size' : size,
        								'x' : x - (align == 'right' ? -5 : 5),
        								'y' : ca.height - this.gutterBottom - y,
        								'text' : '-' + text,
        								'valign' : 'center',
        								'halign' : align == 'right' ? 'left' : 'right',
        								'tag' : 'scale'
        							});
        						}
        					}
        				}
        			}
        			// co.stroke();

        			/**
        			 * Draw the title for the axes
        			 */
        			if (title)
        			{
        				co.beginPath();

        				co.fillStyle = title_color;
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				var width = 0;
        				if (labels_specific)
        				{
        					width = 0;
        					for (var i = 0,len = labels_specific.length; i < len; i += 1)
        					{
        						if (RG.ISIE8)
        						{
        							width = Math.max(width, RG._measureText(labels_specific[i], objFont)[0]);
        						}
        						else
        						{
        							width = Math.max(width, co.measureText(labels_specific[i]).width);
        						}
        					}
        				}
        				else
        				{
        					if (RG.ISIE8)
        					{
        						width = RG._measureText(prop["chart.units.pre"] + prop["chart.max"].toFixed(prop["chart.scale.decimals"]) + prop["chart.units.post"], objFont)[0];
        					}
        					else
        					{
        						width = co.measureText(prop["chart.units.pre"] + prop["chart.max"].toFixed(prop["chart.scale.decimals"]) + prop["chart.units.post"]).width;
        					}
        				}
        				RG.text2(this, {
        					font : font,
        					size : size + 2,
        					x : align == 'right' ? x + width + 8 : x - width - 8,
        					y : height / 2 + this.gutterTop,
        					text : title,
        					valign : 'bottom',
        					halign : 'center',
        					angle : align == 'right' ? 90 : -90,
        					accessible : false
        				});
        				co.closePath();
        				co.stroke();
        			}
        		};

        		/**
        		 * This detemines the maximum text width of either the scale or text
        		 * labels - whichever is given
        		 *
        		 * @return number The maximum text width
        		 */
        		this.getWidth = function ()
        		{
        			var width = this.maxLabelLength;

        			// Add the title width if it's specified
        			if (prop["chart.title"] && prop["chart.title"].length)
        			{
        				width += (prop["chart.text.size"] * 1.5);
        			}

        			this.width = width;

        			return width;
        		};

        		/**
        		 * Using a function to add events makes it easier to facilitate method chaining
        		 *
        		 * @param string   type The type of even to add
        		 * @param function func
        		 */
        		this.on = function (type, func)
        		{
        			if (type.substr(0, 2) !== 'on')
        			{
        				type = 'on' + type;
        			}

        			if (typeof this[type] !== 'function')
        			{
        				this[type] = func;
        			}
        			else
        			{
        				RG.addCustomEventListener(this, type, func);
        			}

        			return this;
        		};

        		/**
        		 * This function runs once only
        		 * (put at the end of the file (before any effects))
        		 */
        		this.firstDrawFunc = function ()
        		{
        		};
        		RG.att(ca);

        		/**
        		 * Objects are now always registered so that the chart is redrawn if need be.
        		 */
        		RG.Register(this);

        		/**
        		 * This is the 'end' of the constructor so if the first argument
        		 * contains configuration data - handle that.
        		 */
        		if (parseConfObjectForOptions)
        		{
        			RG.parseObjectStyleConfig(this, conf.options);
        		}
        	};
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
