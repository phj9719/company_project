//XJS=RGraph.drawing.xaxis.xjs
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
        if (!nexacro.RGraph.Drawing_XAxis)
        {
        	/**
        	 * The constructor. This function sets up the object. It takes the ID (the HTML attribute) of the canvas as the
        	 * first argument and the Y coordinate of the axes as the second
        	 *
        	 * @param string id The canvas tag ID
        	 * @param number y  The Y coordinate
        	 */
        	nexacro.RGraph.Drawing_XAxis = function (RG, conf, y)
        	{
        		/**
        		 * Allow for object config style
        		 */
        		var parseConfObjectForOptions = true;
        		var id = conf.id;

        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];

        		// this.id                = id;
        		// this.canvas            = conf.canvas;
        		// this.context           = conf.context;

        		this.canvas.__object__ = this;
        		this.y = y;
        		this.coords = [];
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false
        		/**
        		 * This defines the type of this shape
        		 */
        		this.type = 'drawing.xaxis';
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
        			'chart.gutter.left' : 25,
        			'chart.gutter.right' : 25,
        			'chart.labels' : null,
        			'chart.labels.position' : 'section',
        			'chart.colors' : ['black'],
        			'chart.title.color' : null, // Defaults to same as chart.colors
        			'chart.text.color' : null, // Defaults to same as chart.colors
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.size' : 12,
        			'chart.text.accessible' : true,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.align' : 'bottom',
        			'chart.numlabels' : 5,
        			'chart.scale.visible' : true,
        			'chart.scale.formatter' : null,
        			'chart.scale.decimals' : 0,
        			'chart.scale.point' : '.',
        			'chart.scale.thousand' : ',',
        			'chart.scale.invert' : false,
        			'chart.scale.zerostart' : true,
        			'chart.units.pre' : '',
        			'chart.units.post' : '',
        			'chart.title' : '',
        			'chart.numticks' : null,
        			'chart.hmargin' : 0,
        			'chart.linewidth' : 1,
        			'chart.noendtick.left' : false,
        			'chart.noendtick.right' : false,
        			'chart.noxaxis' : false,
        			'chart.max' : null,
        			'chart.min' : 0,
        			'chart.tooltips' : null,
        			'chart.tooltips.effect' : 'fade',
        			'chart.tooltips.css.class' : 'RGraph_tooltip',
        			'chart.tooltips.event' : 'onclick',
        			'chart.events.click' : null,
        			'chart.events.mousemove' : null,
        			'chart.xaxispos' : 'bottom',
        			'chart.yaxispos' : 'left',
        			'chart.clearto' : [0, 0, 0, 0]
        		};

        		/**
        		 * A simple check that the browser has canvas support
        		 */
        		if (!this.canvas)
        		{
        			alert('[DRAWING.XAXIS] No canvas support');
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
        		 */
        		if (!this.canvas.__rgraph_aa_translated__)
        		{
        			this.context.translate(0.5, 0.5);

        			this.canvas.__rgraph_aa_translated__ = true;
        		}

        		// Short variable names
        		var ca = this.canvas,co = this.context,prop = this.properties,pa2 = RG.path2,ma = Math;

        		/**
        		 * "Decorate" the object with the generic effects if the effects library has been included
        		 */
        		if (RG.Effects && typeof RG.Effects.decorate === 'function')
        		{
        			RG.Effects.decorate(this);
        		}
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

        			/**
        			 * Make the tickmarks align if labels are specified
        			 */
        			if (name == 'chart.labels' && !prop["chart.numxticks"])
        			{
        				prop["chart.numxticks"] = value.length;
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
        		 * Draws the rectangle
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
        			/**
        			 * Fire the onbeforedraw event
        			 */
        			RG.FireCustomEvent(this, 'onbeforedraw');

        			/**
        			 * Stop this growing uncntrollably
        			 */
        			this.coordsText = [];
        			/**
        			 * Some defaults
        			 */
        			this.gutterLeft = prop["chart.gutter.left"];
        			this.gutterRight = prop["chart.gutter.right"];
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

        			// DRAW X AXIS HERE
        			this.DrawXAxis();
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
        		 * Not used by the class during creating the graph, but is used by event handlers
        		 * to get the coordinates (if any) of the selected shape
        		 *
        		 * @param object e The event object
        		 */
        		this.getShape = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e);
        			var mouseX = mouseXY[0];
        			var mouseY = mouseXY[1];

        			if (mouseX >= this.gutterLeft
        				 && mouseX <= (ca.width - this.gutterRight)
        				 && mouseY >= this.y - (prop["chart.align"] == 'top' ? (prop["chart.text.size"] * 1.5) + 5 : 0)
        				 && mouseY <= (this.y + (prop["chart.align"] == 'top' ? 0 : (prop["chart.text.size"] * 1.5) + 5)))
        			{
        				var x = this.gutterLeft;
        				var y = this.y;
        				var w = ca.width - this.gutterLeft - this.gutterRight;
        				var h = 15;

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
        		 var coordX     = obj.gutterLeft;
        		 var coordY     = obj.y;
        		 var coordW     = ca.width - obj.gutterLeft - obj.gutterRight;
        		 var coordH     = prop['chart.text.size'] * 1.5;
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
        			// this.properties['chart.title.color'] = this.parseSingleColorForGradient(this.properties['chart.title.color']);
        			// this.properties['chart.text.color']  = this.parseSingleColorForGradient(this.properties['chart.text.color']);
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
        				grad = RG.createLinearGradient(co, prop["chart.gutter.left"], 0, ca.width - prop["chart.gutter.right"], 0, color);
        			}

        			return grad ? grad : color;
        		};

        		/**
        		 * The function that draws the X axis
        		 */
        		this.drawXAxis =
        			this.DrawXAxis = function ()
        		{
        			var gutterLeft = prop["chart.gutter.left"],gutterRight = prop["chart.gutter.right"],x = this.gutterLeft,y = this.y,min = +prop["chart.min"],max = +prop["chart.max"],labels = prop["chart.labels"],labels_position = prop["chart.labels.position"],color = prop["chart.colors"][0],title_color = prop["chart.title.color"],label_color = prop["chart.text.color"],width = ca.width - this.gutterLeft - this.gutterRight,font = prop["chart.text.font"],size = prop["chart.text.size"],align = prop["chart.align"],numlabels = prop["chart.numlabels"],formatter = prop["chart.scale.formatter"],decimals = Number(prop["chart.scale.decimals"]),invert = prop["chart.scale.invert"],scale_visible = prop["chart.scale.visible"],units_pre = prop["chart.units.pre"],units_post = prop["chart.units.post"],title = prop["chart.title"];
        			numticks = prop["chart.numticks"],
        				hmargin = prop["chart.hmargin"],
        				linewidth = prop["chart.linewidth"],
        				noleftendtick = prop["chart.noendtick.left"],
        				norightendtick = prop["chart.noendtick.right"],
        				noxaxis = prop["chart.noxaxis"],
        				xaxispos = prop["chart.xaxispos"],
        				yaxispos = prop["chart.yaxispos"];


        			if (RG.is_null(numticks))
        			{
        				if (labels && labels.length)
        				{
        					numticks = labels.length;
        				}
        				else if (!labels && max != 0)
        				{
        					numticks = 10;
        				}
        				else
        				{
        					numticks = numlabels;
        				}
        			}



        			/**
        			 * Set the linewidth
        			 */
        			co.lineWidth = linewidth + 0.001;
        			co.setElementLineWidth(co.lineWidth);

        			/**
        			 * Set the color
        			 */
        			co.strokeStyle = color;
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			if (!noxaxis)
        			{
        				/**
        				 * Draw the main horizontal line
        				 */
        				RG.pa2(co, ['b', 'm', x, ma.round(y), 'l', x + width, ma.round(y), 's', co.strokeStyle]);

        				/**
        				 * Draw the axis tickmarks
        				 */
        				co.beginPath();
        				for (var i = (noleftendtick ? 1 : 0); i <= (numticks - (norightendtick ? 1 : 0)); ++i)
        				{
        					co.moveTo(ma.round(x + ((width / numticks) * i)), xaxispos == 'center' ? (align == 'bottom' ? y - 3 : y + 3) : y);
        					co.lineTo(ma.round(x + ((width / numticks) * i)), y + (align == 'bottom' ? 3 : -3));
        				}
        				co.stroke();
        			}



        			/**
        			 * Draw the labels
        			 */
        			co.fillStyle = label_color;
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			if (labels)
        			{
        				/**
        				 * Draw the labels
        				 */
        				numlabels = labels.length;
        				var h = 0;
        				var l = 0;
        				var single_line = RG.MeasureText('Mg', false, font, size);

        				// Measure the maximum height
        				for (var i = 0,len = labels.length; i < len; ++i)
        				{
        					var dimensions = RG.MeasureText(labels[i], false, font, size);
        					var h = ma.max(h, dimensions[1]);
        					var l = ma.max(l, labels[i].split('\r\n').length);
        				}


        				for (var i = 0,len = labels.length; i < len; ++i)
        				{
        					RG.text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : labels_position == 'edge' ? ((((width - hmargin - hmargin) / (labels.length - 1)) * i) + gutterLeft + hmargin) : ((((width - hmargin - hmargin) / labels.length) * i) + ((width / labels.length) / 2) + gutterLeft + hmargin),
        						'y' : align == 'bottom' ? y + 3 : y - 3 - h + single_line[1],
        						'text' : String(labels[i]),
        						'valign' : align == 'bottom' ? 'top' : 'bottom',
        						'halign' : 'center',
        						'tag' : 'labels'
        					});
        				}





        				/**
        				 * No specific labels - draw a scale
        				 */
        			}
        			else if (scale_visible)
        			{
        				if (max === null)
        				{
        					alert('[DRAWING.XAXIS] If not specifying axis.labels you must specify axis.max!');
        				}

        				// yaxispos
        				if (yaxispos == 'center')
        				{
        					width /= 2;
        					var additionalX = width;
        				}
        				else
        				{
        					var additionalX = 0;
        				}

        				for (var i = 0; i <= numlabels; ++i)
        				{
        					// Don't show zero if the chart.scale.zerostart option is false
        					if (i == 0 && !prop["chart.scale.zerostart"])
        					{
        						continue;
        					}

        					var original = (((max - min) / numlabels) * i) + min;
        					var hmargin = prop["chart.hmargin"];

        					var text = String(typeof (formatter) == 'function' ? formatter(this, original) : RG.numberFormat(this, original.toFixed(original === 0 ? 0 : decimals), units_pre, units_post));

        					if (invert)
        					{
        						var x = ((width - hmargin - ((width - hmargin - hmargin) / numlabels) * i)) + gutterLeft + additionalX;
        					}
        					else
        					{
        						var x = (((width - hmargin - hmargin) / numlabels) * i) + gutterLeft + hmargin + additionalX;
        					}

        					RG.Text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : x,
        						'y' : align == 'bottom' ? y + 3 : y - 3,
        						'text' : text,
        						'valign' : align == 'bottom' ? 'top' : 'bottom',
        						'halign' : 'center',
        						'tag' : 'scale'
        					});
        				}

        				/**
        				 * If the Y axis is in the center - this draws the left half of the labels
        				 */
        				if (yaxispos == 'center')
        				{
        					for (var i = 0; i < numlabels; ++i)
        					{
        						var original = (((max - min) / numlabels) * (numlabels - i)) + min;
        						var hmargin = prop["chart.hmargin"];

        						var text = String(typeof (formatter) == 'function' ? formatter(this, original) : RG.number_format(this, original.toFixed(decimals), units_pre, units_post));

        						if (invert)
        						{
        							var x = ((width - hmargin - ((width - hmargin - hmargin) / numlabels) * i)) + gutterLeft;
        						}
        						else
        						{
        							var x = (((width - hmargin - hmargin) / numlabels) * i) + gutterLeft + hmargin;
        						}

        						RG.text2(this, {
        							'font' : font,
        							'size' : size,
        							'x' : x,
        							'y' : align == 'bottom' ? y + size + 2 : y - size - 2,
        							'text' : '-' + text,
        							'valign' : 'center',
        							'halign' : 'center',
        							'tag' : 'scale'
        						});
        					}
        				}
        			}



        			/**
        			 * Draw the title for the axes
        			 */
        			if (title)
        			{
        				var dimensions = RG.MeasureText(title, false, font, size + 2);

        				co.fillStyle = title_color;
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				RG.Text2(this, {
        					'font' : font,
        					'size' : size + 2,
        					'x' : (ca.width - this.gutterLeft - this.gutterRight) / 2 + this.gutterLeft,
        					'y' : align == 'bottom' ? y + dimensions[1] + 10 : y - dimensions[1] - 10,
        					'text' : title,
        					'valign' : 'center',
        					'halign' : 'center',
        					'tag' : 'title'
        				});
        			}
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
