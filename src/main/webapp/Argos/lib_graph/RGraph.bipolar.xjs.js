//XJS=RGraph.bipolar.xjs
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
         * |                          http://www.RG.net                                 |
         * |                                                                                |
         * | RGraph is licensed under the Open Source MIT license. That means that it's     |
         * | totally free to use!                                                           |
         * o--------------------------------------------------------------------------------o
         */

        if (!nexacro.RGraph.Bipolar)
        {
        	/**
        	 * The bi-polar/age frequency constructor.
        	 *
        	 * @param string id The id of the canvas
        	 * @param array  left  The left set of data points
        	 * @param array  right The right set of data points
        	 *
        	 * REMEMBER If ymin is implemented you need to update the .getValue() method
        	 */
        	nexacro.RGraph.Bipolar = function (conf)
        	{
        		// argument 0 : option
        		// 1 : rg common
        		// 2 : canvas id
        		var RG = arguments[1];
        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];
        		var id = this.id;
        		var canvas = this.canvas;
        		var left = conf.left,right = conf.right,parseConfObjectForOptions = true;
        		RG.convertDataset(conf.left);
        		RG.convertDataset(conf.right);

        		this.canvas.__object__ = this;
        		this.type = 'bipolar';
        		this.coords = [];
        		this.coordsLeft = [];
        		this.coordsRight = [];
        		this.max = 0;
        		this.isRGraph = true;
        		this.uid = RG.CreateUID();
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		/**
        		 * Compatibility with older browsers
        		 */
        		// RG.OldBrowserCompat(this.context);


        		// The left and right data respectively. Ensure that the data is an array
        		// of numbers
        		for (var i = 0; i < left.length; ++i)
        		{
        			left[i] = parseFloat(left[i]);
        		}
        		for (var i = 0; i < right.length; ++i)
        		{
        			right[i] = parseFloat(right[i]);
        		}

        		this.left = left;
        		this.right = right;
        		this.data = [left, right];

        		this.properties =
        			{
        			'chart.style.background' : null,
        			'chart.style.gradation' : null,
        			'chart.style.border' : null,
        			'chart.style.bordertype' : null,

        			'chart.background.grid' : true,
        			'chart.background.grid.color' : '#dddddd',
        			'chart.background.grid.vlines' : true,
        			'chart.background.grid.hlines' : true,
        			'chart.background.grid.linewidth' : 1,
        			'chart.background.grid.autofit.numvlines' : null,
        			'chart.background.grid.autofit.numhlines' : null,
        			'chart.margin' : 2,
        			'chart.xtickinterval' : null,
        			'chart.labels' : [],
        			'chart.labels.color' : null,
        			'chart.labels.above' : false,
        			'chart.text.size' : 12,
        			'chart.text.color' : 'black', // (Simple) gradients are not supported
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.title.left' : '',
        			'chart.title.right' : '',
        			'chart.gutter.center' : 60,
        			'chart.gutter.left' : 25,
        			'chart.gutter.right' : 25,
        			'chart.gutter.top' : 25,
        			'chart.gutter.bottom' : 30,
        			'chart.title' : '',
        			'chart.title.background' : null,
        			'chart.title.hpos' : null,
        			'chart.title.vpos' : null,
        			'chart.title.bold' : true,
        			'chart.title.font' : null,
        			'chart.title.x' : null,
        			'chart.title.y' : null,
        			'chart.title.halign' : null,
        			'chart.title.valign' : null,
        			'chart.colors' : ['#00ff00'],
        			'chart.colors.sequential' : false,
        			'chart.contextmenu' : null,
        			'chart.tooltips' : null,
        			'chart.tooltips.effect' : 'fade',
        			'chart.tooltips.highlight' : true,
        			'chart.tooltips.event' : 'onclick',
        			'chart.highlight.stroke' : [0, 0, 0, 0],
        			'chart.highlight.fill' : '#ffffff77',
        			'chart.units.pre' : '',
        			'chart.units.post' : '',
        			'chart.shadow' : false,
        			'chart.shadow.color' : '#666666',
        			'chart.shadow.offsetx' : 3,
        			'chart.shadow.offsety' : 3,
        			'chart.shadow.blur' : 3,
        			'chart.annotatable' : false,
        			'chart.annotate.color' : 'black',
        			'chart.xmax' : null,
        			'chart.xmin' : 0,
        			'chart.scale.zerostart' : true,
        			'chart.scale.decimals' : null,
        			'chart.scale.point' : '.',
        			'chart.scale.thousand' : ',',
        			'chart.axis.color' : 'black',
        			'chart.zoom.factor' : 1.5,
        			'chart.zoom.fade.in' : true,
        			'chart.zoom.fade.out' : true,
        			'chart.zoom.hdir' : 'right',
        			'chart.zoom.vdir' : 'down',
        			'chart.zoom.frames' : 25,
        			'chart.zoom.delay' : 16.666,
        			'chart.zoom.shadow' : true,
        			'chart.zoom.background' : true,
        			'chart.zoom.action' : 'zoom',
        			'chart.resizable' : false,
        			'chart.resize.handle.background' : null,
        			'chart.strokestyle' : [0, 0, 0, 0],
        			'chart.events.mousemove' : null,
        			'chart.events.click' : null,
        			'chart.linewidth' : 1,
        			'chart.noaxes' : false,
        			'chart.xlabels' : true,
        			'chart.numyticks' : null,
        			'chart.numxticks' : 5,
        			'chart.axis.linewidth' : 1,
        			'chart.labels.count' : 5,
        			'chart.variant.threed.offsetx' : 10,
        			'chart.variant.threed.offsety' : 5,
        			'chart.variant.threed.angle' : 0.1,
        			'chart.clearto' : [0, 0, 0, 0]
        		};

        		// Pad the arrays so they're the same size
        		while (this.left.length < this.right.length)
        		{
        			this.left.push(null);
        		}
        		while (this.left.length > this.right.length)
        		{
        			this.right.push(null);
        		}

        		/**
        		 * Set the default for the number of Y tickmarks
        		 */
        		this.properties["chart.numyticks"] = this.left.length;

        		/**
        		 * Create the dollar objects so that functions can be added to them
        		 */
        		var linear_data = RG.arrayLinearize(this.left, this.right);

        		for (var i = 0; i < linear_data.length; ++i)
        		{
        			this['$' + i] = {
        			};
        		}

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
        		 * The setter
        		 *
        		 * @param name  string The name of the parameter to set
        		 * @param value mixed  The value of the paraneter
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
        			 * This should be done first - prepend the propertyy name with "chart." if necessary
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
        		 * The getter
        		 *
        		 * @param name string The name of the parameter to get
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

        			return this.properties[name.toLowerCase()];
        		};

        		/**
        		 * Draws the graph
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
        			if (RG.ISIE8)
        			{
        				this.set("chart.shadow", false);
        			}
        			if (prop["chart.style.background"])
        			{
        				this.canvas.style.set_background(prop["chart.style.background"]);
        			}
        			if (prop["chart.style.gradation"])
        			{
        				this.canvas.style.set_gradation(prop["chart.style.gradation"]);
        			}
        			if (prop["chart.style.border"])
        			{
        				this.canvas.style.set_border(prop["chart.style.border"]);
        			}
        			if (prop["chart.style.bordertype"])
        			{
        				this.canvas.style.set_bordertype(prop["chart.style.bordertype"]);
        			}
        			/**
        			 * Fire the onbeforedraw event
        			 */
        			RG.FireCustomEvent(this, 'onbeforedraw');
        			/**
        			 * Parse the colors. This allows for simple gradient syntax
        			 */
        			if (!this.colorsParsed)
        			{
        				this.parseColors();

        				// Don't want to do this again
        				this.colorsParsed = true;
        			}
        			/**
        			 * This is new in May 2011 and facilitates indiviual gutter settings,
        			 * eg chart.gutter.left
        			 */
        			this.gutterLeft = prop["chart.gutter.left"];
        			this.gutterRight = prop["chart.gutter.right"];
        			this.gutterTop = prop["chart.gutter.top"];
        			this.gutterBottom = prop["chart.gutter.bottom"];
        			this.gutterCenter = prop["chart.gutter.center"];



        			// Reset the data to what was initially supplied
        			this.left = this.data[0];
        			this.right = this.data[1];


        			/**
        			 * Reset the coords array
        			 */
        			this.coords = [];



        			/**
        			 * Stop this growing uncontrollably
        			 */
        			this.coordsText = [];


        			if (prop["chart.variant"] === '3d')
        			{
        				if (prop["chart.text.accessible"])
        				{
        					// Nada
        				}
        				else
        				{
        					co.setTransform(1, prop["chart.variant.threed.angle"], 0, 1, 0.5, 0.5);
        				}
        			}



        			// Some necessary variables
        			this.axisWidth = (ca.width - prop["chart.gutter.center"] - this.gutterLeft - this.gutterRight) / 2;
        			this.axisHeight = ca.height - this.gutterTop - this.gutterBottom;


        			// Reset the sequential index
        			this.sequentialFullIndex = 0;



        			this.getMax();
        			this.drawBackgroundGrid();
        			this.draw3DAxes();
        			this.drawAxes();
        			this.drawTicks();
        			co.save();
        			co.beginPath();
        			co.rect(this.gutterLeft, this.gutterTop - (prop["chart.variant.threed.offsety"] || 0), ca.width - this.gutterLeft - this.gutterRight, ca.height - this.gutterTop - this.gutterBottom + (2 * (prop["chart.variant.threed.offsety"] || 0)));
        			co.clip();

        			this.drawLeftBars();
        			this.drawRightBars();

        			// Redraw the bars so that shadows on not on top
        			this.drawLeftBars({
        				shadow : false
        			});
        			this.drawRightBars({
        				shadow : false
        			});
        			co.restore();
        			this.drawAxes();
        			this.drawLabels();
        			this.drawTitles();
        			/**
        			 * Setup the context menu if required
        			 */
        			if (prop["chart.contextmenu"])
        			{
        				RG.ShowContext(this);
        			}


        			/**
        			 * This function enables resizing
        			 */
        			if (prop["chart.resizable"])
        			{
        				RG.AllowResizing(this);
        			}


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
        			 * Fire the RGraph ondraw event
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
        		 * Draws the axes
        		 */
        		this.draw3DAxes = function ()
        		{
        			if (prop["chart.variant"] === '3d')
        			{
        				var offsetx = prop["chart.variant.threed.offsetx"],offsety = prop["chart.variant.threed.offsety"];

        				// Set the linewidth
        				co.lineWidth = prop["chart.axis.linewidth"] + 0.001;
        				co.setElementLineWidth(co.lineWidth);

        				// Draw the left set of axes
        				co.beginPath();
        				co.strokeStyle = prop["chart.axis.color"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);

        				// Draw the horizontal 3d axis
        				// The left horizontal axis
        				RG.pa2(co,
        					'b m % % l % % l % % l % % s #aaaaaa f #dddddd',
        					this.gutterLeft, ma.round(ca.height - this.gutterBottom),
        					this.gutterLeft + offsetx, ma.round(ca.height - this.gutterBottom - offsety),
        					this.gutterLeft + offsetx + this.axisWidth, ma.round(ca.height - this.gutterBottom - offsety),
        					this.gutterLeft + this.axisWidth, ma.round(ca.height - this.gutterBottom)
        				);

        				// The left vertical axis
        				this.draw3DLeftVerticalAxis();

        				// Draw the right horizontal axes
        				RG.pa2(co,
        					'b m % % l % % l % % l % % s #aaaaaa f #dddddd',
        					this.gutterLeft + this.gutterCenter + this.axisWidth, ma.round(ca.height - this.gutterBottom),
        					this.gutterLeft + this.gutterCenter + this.axisWidth + offsetx, ma.round(ca.height - this.gutterBottom - offsety),
        					this.gutterLeft + this.gutterCenter + this.axisWidth + this.axisWidth + offsetx, ma.round(ca.height - this.gutterBottom - offsety),
        					this.gutterLeft + this.gutterCenter + this.axisWidth + this.axisWidth, ma.round(ca.height - this.gutterBottom)
        				);




        				// Draw the right vertical axes
        				RG.pa2(co,
        					'b m % % l % % l % % l % % s #aaaaaa f #dddddd',
        					this.gutterLeft + this.gutterCenter + this.axisWidth, ca.height - this.gutterBottom,
        					this.gutterLeft + this.gutterCenter + this.axisWidth, ca.height - this.gutterBottom - this.axisHeight,
        					this.gutterLeft + this.gutterCenter + this.axisWidth + offsetx, ca.height - this.gutterBottom - this.axisHeight - offsety,
        					this.gutterLeft + this.gutterCenter + this.axisWidth + offsetx, ca.height - this.gutterBottom - offsety
        				);
        			}
        		};

        		this.draw3DLeftVerticalAxis = function ()
        		{
        			if (prop["chart.variant"] === '3d')
        			{
        				var offsetx = prop["chart.variant.threed.offsetx"],offsety = prop["chart.variant.threed.offsety"];

        				// The left vertical axis
        				RG.pa2(co,
        					'b m % % l % % l % % l % % s #aaaaaa f #dddddd',
        					this.gutterLeft + this.axisWidth, this.gutterTop,
        					this.gutterLeft + this.axisWidth + offsetx, this.gutterTop - offsety,
        					this.gutterLeft + this.axisWidth + offsetx, ca.height - this.gutterBottom - offsety,
        					this.gutterLeft + this.axisWidth, ca.height - this.gutterBottom
        				);
        			}
        		};

        		/**
        		 * Draws the axes
        		 */
        		this.drawAxes =
        			this.DrawAxes = function ()
        		{
        			// Set the linewidth
        			co.lineWidth = prop["chart.axis.linewidth"] + 0.001;
        			co.setElementLineWidth(co.lineWidth);

        			// Draw the left set of axes
        			co.beginPath();
        			co.strokeStyle = prop["chart.axis.color"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			this.axisWidth = (ca.width - prop["chart.gutter.center"] - this.gutterLeft - this.gutterRight) / 2;
        			this.axisHeight = ca.height - this.gutterTop - this.gutterBottom;


        			// This must be here so that the two above variables are calculated
        			if (prop["chart.noaxes"])
        			{
        				return;
        			}

        			co.moveTo(this.gutterLeft, Math.round(ca.height - this.gutterBottom));
        			co.lineTo(this.gutterLeft + this.axisWidth, Math.round(ca.height - this.gutterBottom));

        			co.moveTo(ma.round(this.gutterLeft + this.axisWidth), ca.height - this.gutterBottom);
        			co.lineTo(ma.round(this.gutterLeft + this.axisWidth), this.gutterTop);

        			co.stroke();


        			// Draw the right set of axes
        			co.beginPath();

        			var x = this.gutterLeft + this.axisWidth + prop["chart.gutter.center"];

        			co.moveTo(Math.round(x), this.gutterTop);
        			co.lineTo(Math.round(x), ca.height - this.gutterBottom);

        			co.moveTo(Math.round(x), Math.round(ca.height - this.gutterBottom));
        			co.lineTo(ca.width - this.gutterRight, Math.round(ca.height - this.gutterBottom));

        			co.stroke();
        		};




        		/**
        		 * Draws the tick marks on the axes
        		 */
        		this.drawTicks =
        			this.DrawTicks = function ()
        		{
        			// Set the linewidth
        			co.lineWidth = prop["chart.axis.linewidth"] + 0.001;
        			co.setElementLineWidth(co.lineWidth);

        			var numDataPoints = this.left.length;
        			var barHeight = ((ca.height - this.gutterTop - this.gutterBottom) - (this.left.length * (prop["chart.margin"] * 2))) / numDataPoints;

        			// Store this for later
        			this.barHeight = barHeight;

        			// If no axes - no tickmarks
        			if (prop["chart.noaxes"])
        			{
        				return;
        			}

        			// Draw the left Y tick marks
        			if (prop["chart.numyticks"] > 0)
        			{
        				co.beginPath();
        				for (var i = 0; i < prop["chart.numyticks"]; ++i)
        				{
        					var y = prop["chart.gutter.top"] + (((ca.height - this.gutterTop - this.gutterBottom) / prop["chart.numyticks"]) * i);
        					co.moveTo(this.gutterLeft + this.axisWidth, y);
        					co.lineTo(this.gutterLeft + this.axisWidth + 3, y);
        				}
        				co.stroke();

        				// Draw the right axis Y tick marks
        				co.beginPath();
        				for (var i = 0; i < prop["chart.numyticks"]; ++i)
        				{
        					var y = prop["chart.gutter.top"] + (((ca.height - this.gutterTop - this.gutterBottom) / prop["chart.numyticks"]) * i);
        					co.moveTo(this.gutterLeft + this.axisWidth + prop["chart.gutter.center"], y);
        					co.lineTo(this.gutterLeft + this.axisWidth + prop["chart.gutter.center"] - 3, y);
        				}
        				co.stroke();
        			}



        			/**
        			 * X tickmarks
        			 */
        			if (prop["chart.numxticks"] > 0)
        			{
        				var xInterval = this.axisWidth / prop["chart.numxticks"];

        				// Is chart.xtickinterval specified ? If so, use that.
        				if (typeof (prop["chart.xtickinterval"]) == 'number')
        				{
        					xInterval = prop["chart.xtickinterval"];
        				}


        				// Draw the left sides X tick marks
        				for (i = this.gutterLeft; i < (this.gutterLeft + this.axisWidth); i += xInterval)
        				{
        					co.beginPath();
        					co.moveTo(Math.round(i), ca.height - this.gutterBottom);
        					co.lineTo(Math.round(i), (ca.height - this.gutterBottom) + 4);
        					co.closePath();

        					co.stroke();
        				}

        				// Draw the right sides X tick marks
        				var stoppingPoint = ca.width - this.gutterRight;

        				for (i = (this.gutterLeft + this.axisWidth + prop["chart.gutter.center"] + xInterval); i <= stoppingPoint; i += xInterval)
        				{
        					co.beginPath();
        					co.moveTo(Math.round(i), ca.height - this.gutterBottom);
        					co.lineTo(Math.round(i), (ca.height - this.gutterBottom) + 4);
        					co.closePath();

        					co.stroke();
        				}
        			}
        		};




        		/**
        		 * Figures out the maximum value, or if defined, uses xmax
        		 */
        		this.getMax =
        			this.GetMax = function ()
        		{
        			var dec = prop["chart.scale.decimals"];

        			// chart.xmax defined
        			if (prop["chart.xmax"])
        			{
        				var max = prop["chart.xmax"];
        				var min = prop["chart.xmin"];

        				this.scale2 = RG.getScale2(this, {
        					'max' : max,
        					'min' : min,
        					'strict' : true,
        					'scale.thousand' : prop["chart.scale.thousand"],
        					'scale.point' : prop["chart.scale.point"],
        					'scale.decimals' : prop["chart.scale.decimals"],
        					'ylabels.count' : prop["chart.labels.count"],
        					'scale.round' : prop["chart.scale.round"],
        					'units.pre' : prop["chart.units.pre"],
        					'units.post' : prop["chart.units.post"]
        				});
        				this.max = this.scale2.max;
        				this.min = this.scale2.min;


        				/**
        				 * Generate the scale ourselves
        				 */
        			}
        			else
        			{
        				var max = Math.max(RG.array_max(this.left), RG.array_max(this.right));

        				this.scale2 = RG.getScale2(this, {
        					'max' : max,
        					// 'strict': true,
        					'min' : prop["chart.xmin"],
        					'scale.thousand' : prop["chart.scale.thousand"],
        					'scale.point' : prop["chart.scale.point"],
        					'scale.decimals' : prop["chart.scale.decimals"],
        					'ylabels.count' : prop["chart.labels.count"],
        					'scale.round' : prop["chart.scale.round"],
        					'units.pre' : prop["chart.units.pre"],
        					'units.post' : prop["chart.units.post"]
        				});


        				this.max = this.scale2.max;
        				this.min = this.scale2.min;
        			}

        			// Don't need to return it as it is stored in this.max
        		};




        		/**
        		 * Function to draw the left hand bars
        		 */
        		this.drawLeftBars =
        			this.DrawLeftBars = function ()
        		{
        			var opt = {
        			};

        			if (typeof arguments[0] === 'object')
        			{
        				opt.shadow = arguments[0].shadow;
        			}
        			else
        			{
        				opt.shadow = true;
        			}
        			var cc;

        			var offsetx = prop["chart.variant.threed.offsetx"],offsety = prop["chart.variant.threed.offsety"];

        			// Set the stroke colour
        			co.strokeStyle = prop["chart.strokestyle"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			// Set the linewidth
        			co.lineWidth = prop["chart.linewidth"];
        			co.setElementLineWidth(co.lineWidth);

        			for (var i = (this.left.length - 1); i >= 0; i -= 1)
        			{
        				/**
        				 * Turn on a shadow if requested
        				 */
        				if (prop["chart.shadow"] && prop["chart.variant"] !== '3d' && opt.shadow)
        				{
        					co.shadowColor = prop["chart.shadow.color"];
        					RG.setElementCommonStyle(co, co.shadowColor, 3);
        					co.shadowBlur = prop["chart.shadow.blur"];
        					co.setElementShadowBlur(co.shadowBlur);
        					co.shadowOffsetX = prop["chart.shadow.offsetx"];
        					co.shadowOffsetY = prop["chart.shadow.offsety"];
        					co.setElementShadowOffsetX(co.shadowOffsetX);
        					co.setElementShadowOffsetY(co.shadowOffsetY);
        				}

        				// If chart.colors.sequential is specified - handle that
        				// ** There's another instance of this further down **
        				if (prop["chart.colors.sequential"])
        				{
        					co.fillStyle = cc = prop["chart.colors"][i];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);
        				}
        				else
        				{
        					co.fillStyle = cc = prop["chart.colors"][0];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);
        				}

        				/**
        				 * Work out the coordinates
        				 */

        				var width = (((this.left[i] - this.min) / (this.max - this.min)) * this.axisWidth);

        				var coords = [
        					ma.round(this.gutterLeft + this.axisWidth - width),
        					ma.round(this.gutterTop + (i * (this.axisHeight / this.left.length)) + prop["chart.margin"]),
        					width,
        					this.barHeight
        				];

        				// Draw the IE shadow if necessary
        				if (RG.ISOLD && prop["chart.shadow"])
        				{
        					this.drawIEShadow(coords);
        				}


        				if (this.left[i] !== null)
        				{
        					co.strokeRect(coords[0], coords[1], coords[2], coords[3]);
        					co.fillRect(coords[0], coords[1], coords[2], coords[3]);
        				}

        				// Draw the 3D sides if required
        				if (prop["chart.variant"] === '3d' && this.left[i] !== null)
        				{
        					// If the shadow is enabled draw the backface for
        					// (that we don't actually see
        					if (prop["chart.shadow"] && opt.shadow)
        					{
        						co.shadowColor = prop["chart.shadow.color"];
        						RG.setElementCommonStyle(co, co.shadowColor, 3);
        						co.shadowBlur = prop["chart.shadow.blur"];
        						co.setElementShadowBlur(co.shadowBlur);
        						co.shadowOffsetX = prop["chart.shadow.offsetx"];
        						co.setElementShadowOffsetX(co.shadowOffsetX);
        						co.shadowOffsetY = prop["chart.shadow.offsety"];
        						co.setElementShadowOffsetY(co.shadowOffsetY);

        						RG.pa2(co,
        							'b m % % l % % l % % l % % f black sc #00000000 sx 0 sy 0 sb 0',
        							coords[0] + offsetx, coords[1] - offsety,
        							coords[0] + offsetx + coords[2], coords[1] - offsety,
        							coords[0] + offsetx + coords[2], coords[1] - offsety + coords[3],
        							coords[0] + offsetx, coords[1] - offsety + coords[3]
        						);
        					}

        					// If chart.colors.sequential is specified - handle that (again)
        					//
        					// ** There's another instance of this further up **
        					if (prop["chart.colors.sequential"])
        					{
        						co.fillStyle = cc = prop["chart.colors"][i];
        						RG.setElementCommonStyle(co, co.fillStyle, 1);
        					}
        					else
        					{
        						co.fillStyle = cc = prop["chart.colors"][0];
        						RG.setElementCommonStyle(co, co.fillStyle, 1);
        					}

        					RG.pa2(co,
        						'b m % % l % % l % % l % % f %',
        						coords[0], coords[1],
        						coords[0] + offsetx, coords[1] - offsety,
        						coords[0] + offsetx + coords[2], coords[1] - offsety,
        						coords[0] + coords[2], coords[1], cc
        					);

        					RG.pa2(co,
        						'b m % % l % % l % % l % % f #ffffff44',
        						coords[0], coords[1],
        						coords[0] + offsetx, coords[1] - offsety,
        						coords[0] + offsetx + coords[2], coords[1] - offsety,
        						coords[0] + coords[2], coords[1]
        					);
        				}

        				this.draw3DLeftVerticalAxis();
        				// Add the coordinates to the coords array
        				this.coords.push([coords[0], coords[1], coords[2], coords[3]]);
        				this.coordsLeft.push([coords[0], coords[1], coords[2], coords[3]]);
        			}

        			/**
        			 * Turn off any shadow
        			 */
        			RG.noShadow(this);

        			// Reset the linewidth
        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);
        		};

        		/**
        		 * Function to draw the right hand bars
        		 */
        		this.drawRightBars =
        			this.DrawRightBars = function ()
        		{
        			var opt = {
        			};

        			if (typeof arguments[0] === 'object')
        			{
        				opt.shadow = arguments[0].shadow;
        			}
        			else
        			{
        				opt.shadow = true;
        			}

        			var offsetx = prop["chart.variant.threed.offsetx"],offsety = prop["chart.variant.threed.offsety"];

        			var cc;
        			// Set the stroke colour
        			co.strokeStyle = prop["chart.strokestyle"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			// Set the linewidth
        			co.lineWidth = prop["chart.linewidth"];
        			co.setElementLineWidth(co.lineWidth);

        			/**
        			 * Turn on a shadow if requested
        			 */
        			if (prop["chart.shadow"] && prop["chart.variant"] !== '3d' && opt.shadow)
        			{
        				co.shadowColor = prop["chart.shadow.color"];
        				RG.setElementCommonStyle(co, co.shadowColor, 3);
        				co.shadowBlur = prop["chart.shadow.blur"];
        				co.setElementShadowBlur(co.shadowBlur);
        				co.shadowOffsetX = prop["chart.shadow.offsetx"];
        				co.setElementShadowOffsetX(co.shadowOffsetX);
        				co.shadowOffsetY = prop["chart.shadow.offsety"];
        				co.setElementShadowOffsetY(co.shadowOffsetY);
        			}

        			for (var i = (this.right.length - 1); i >= 0; i -= 1)
        			{
        				// If chart.colors.sequential is specified - handle that
        				if (prop["chart.colors.sequential"])
        				{
        					co.fillStyle = cc = prop["chart.colors"][i];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);
        				}
        				else
        				{
        					co.fillStyle = cc = prop["chart.colors"][0];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);
        				}


        				var width = (((this.right[i] - this.min) / (this.max - this.min)) * this.axisWidth);

        				var coords = [
        					ma.round(this.gutterLeft + this.axisWidth + prop["chart.gutter.center"]),
        					ma.round(prop["chart.margin"] + (i * (this.axisHeight / this.right.length)) + this.gutterTop),
        					width,
        					this.barHeight
        				];

        				// Draw the IE shadow if necessary
        				if (RG.ISOLD && prop["chart.shadow"])
        				{
        					this.DrawIEShadow(coords);
        				}

        				if (this.right[i] !== null)
        				{
        					co.strokeRect(ma.round(coords[0]), Math.round(coords[1]), coords[2], coords[3]);
        					co.fillRect(ma.round(coords[0]), Math.round(coords[1]), coords[2], coords[3]);
        				}

        				// Draw the 3D sides if required
        				if (prop["chart.variant"] === '3d' && this.right[i] !== null)
        				{
        					var color = cc;

        					// If the shadow is enabled draw the backface for
        					// (that we don't actually see
        					if (prop["chart.shadow"] && opt.shadow)
        					{
        						co.shadowColor = prop["chart.shadow.color"];
        						RG.setElementCommonStyle(co, co.shadowColor, 3);
        						co.shadowBlur = prop["chart.shadow.blur"];
        						co.setElementShadowBlur(co.shadowBlur);
        						co.shadowOffsetX = prop["chart.shadow.offsetx"];
        						co.setElementShadowOffsetX(co.shadowOffsetX);
        						co.shadowOffsetY = prop["chart.shadow.offsety"];
        						co.setElementShadowOffsetY(co.shadowOffsetY);

        						RG.pa2(co,
        							'b m % % l % % l % % l % % f black sc #00000000 sx 0 sy 0 sb 0',
        							coords[0] + offsetx, coords[1] - offsety,
        							coords[0] + offsetx + coords[2], coords[1] - offsety,
        							coords[0] + offsetx + coords[2], coords[1] - offsety + coords[3],
        							coords[0] + offsetx, coords[1] - offsety + coords[3]
        						);
        					}

        					// Draw the top
        					RG.pa2(co,
        						'b m % % l % % l % % l % % f %',
        						coords[0], coords[1],
        						coords[0] + offsetx, coords[1] - offsety,
        						coords[0] + offsetx + coords[2], coords[1] - offsety,
        						coords[0] + coords[2], coords[1],
        						color
        					);


        					// Draw the right hand side
        					RG.pa2(co,
        						'b m % % l % % l % % l % % f %',
        						coords[0] + coords[2], coords[1],
        						coords[0] + coords[2] + offsetx, coords[1] - offsety,
        						coords[0] + coords[2] + offsetx, coords[1] - offsety + coords[3],
        						coords[0] + coords[2], coords[1] + coords[3],
        						color
        					);

        					// Draw the LIGHTER top
        					RG.pa2(co,
        						'b m % % l % % l % % l % % f #FFFFFF66',
        						coords[0], coords[1],
        						coords[0] + offsetx, coords[1] - offsety,
        						coords[0] + offsetx + coords[2], coords[1] - offsety,
        						coords[0] + coords[2], coords[1]
        					);


        					// Draw the DARKER right hand side
        					RG.pa2(co,
        						'b m % % l % % l % % l % % f #00000033',
        						coords[0] + coords[2], coords[1],
        						coords[0] + coords[2] + offsetx, coords[1] - offsety,
        						coords[0] + coords[2] + offsetx, coords[1] - offsety + coords[3],
        						coords[0] + coords[2], coords[1] + coords[3]
        					);
        				}

        				/**
        				 * Add the coordinates to the coords array
        				 */
        				this.coords.push([coords[0], coords[1], coords[2], coords[3]]);
        				this.coordsRight.push([coords[0], coords[1], coords[2], coords[3]]);
        			}

        			/**
        			 * Turn off any shadow
        			 */
        			RG.NoShadow(this);

        			// Reset the linewidth
        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);
        		};

        		/**
        		 * Draws the titles
        		 */
        		this.drawLabels =
        			this.DrawLabels = function ()
        		{
        			var font = prop["chart.text.font"],color = prop["chart.labels.color"] || prop["chart.text.color"],size = prop["chart.text.size"],labels = prop["chart.labels"],barAreaHeight = ca.height - this.gutterTop - this.gutterBottom;

        			co.fillStyle = color;
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			for (var i = 0,len = labels.length; i < len; i += 1)
        			{
        				RG.Text2(this, {
        					'color' : color,
        					'font' : font,
        					'size' : size,
        					'x' : this.gutterLeft + this.axisWidth + (prop["chart.gutter.center"] / 2),
        					'y' : this.gutterTop + ((barAreaHeight / labels.length) * (i)) + ((barAreaHeight / labels.length) / 2),
        					'text' : String(labels[i] ? String(labels[i]) : ''),
        					'halign' : 'center',
        					'valign' : 'center',
        					'marker' : false,
        					'tag' : 'labels'
        				});
        			}



        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);



        			if (prop["chart.xlabels"])
        			{
        				var grapharea = (ca.width - prop["chart.gutter.center"] - this.gutterLeft - this.gutterRight) / 2;

        				// Now draw the X labels for the left hand side
        				for (var i = 0; i < this.scale2.labels.length; ++i)
        				{
        					RG.text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : this.gutterLeft + ((grapharea / this.scale2.labels.length) * i),
        						'y' : ca.height - this.gutterBottom + 3,
        						'text' : this.scale2.labels[this.scale2.labels.length - i - 1],
        						'valign' : 'top',
        						'halign' : 'center',
        						'tag' : 'scale'
        					});




        					// Draw the scale for the right hand side
        					RG.text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : this.gutterLeft + grapharea + prop["chart.gutter.center"] + ((grapharea / this.scale2.labels.length) * (i + 1)),
        						'y' : ca.height - this.gutterBottom + 3,
        						'text' : this.scale2.labels[i],
        						'valign' : 'top',
        						'halign' : 'center',
        						'tag' : 'scale'
        					});
        				}




        				// Draw zero?
        				if (prop["chart.scale.zerostart"])
        				{
        					RG.text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : this.gutterLeft + this.axisWidth,
        						'y' : ca.height - this.gutterBottom + 3,
        						'text' : '0',
        						'valign' : 'top',
        						'halign' : 'center',
        						'tag' : 'scale'
        					});


        					RG.text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : this.gutterLeft + this.axisWidth + this.gutterCenter,
        						'y' : ca.height - this.gutterBottom + 3,
        						'text' : '0',
        						'valign' : 'top',
        						'halign' : 'center',
        						'tag' : 'scale'
        					});
        				}
        			}

        			/**
        			 * Draw above labels
        			 */
        			if (prop["chart.labels.above"])
        			{
        				// Draw the left sides above labels

        				var coordsLeft = RG.arrayReverse(this.coordsLeft);

        				for (var i = 0; i < coordsLeft.length; ++i)
        				{
        					if (typeof this.left[i] !== 'number')
        					{
        						continue;
        					}

        					var coords = coordsLeft[i];

        					RG.text2(this, {
        						font : font,
        						size : size,
        						x : coords[0] - 5,
        						y : coords[1] + (coords[3] / 2),
        						text : RG.numberFormat(
        							this,
        							this.left[i],
        							prop["chart.units.pre"],
        							prop["chart.units.post"]
        						),
        						valign : 'center',
        						halign : 'right',
        						tag : 'labels.above'
        					});
        				}








        				// Draw the right sides above labels

        				var coordsRight = RG.arrayReverse(this.coordsRight);

        				for (i = 0; i < coordsRight.length; ++i)
        				{
        					if (typeof this.right[i] != 'number')
        					{
        						continue;
        					}

        					var coords = coordsRight[i];

        					RG.Text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : coords[0] + coords[2] + 5,
        						'y' : coords[1] + (coords[3] / 2),
        						'text' : RG.number_format(this, this.right[i], prop["chart.units.pre"], prop["chart.units.post"]),
        						'valign' : 'center',
        						'halign' : 'left',
        						'tag' : 'labels.above'
        					});
        				}
        			}
        		};




        		/**
        		 * Draws the titles
        		 */
        		this.drawTitles =
        			this.DrawTitles = function ()
        		{
        			RG.Text2(this, {
        				'font' : prop["chart.text.font"],
        				'size' : prop["chart.text.size"],
        				'x' : this.gutterLeft + 5,
        				'y' : this.gutterTop - 5,
        				'text' : String(prop["chart.title.left"]),
        				'halign' : 'left',
        				'valign' : 'bottom',
        				'tag' : 'title.left'
        			});

        			RG.Text2(this, {
        				'font' : prop["chart.text.font"],
        				'size' : prop["chart.text.size"],
        				'x' : ca.width - this.gutterRight - 5,
        				'y' : this.gutterTop - 5,
        				'text' : String(prop["chart.title.right"]),
        				'halign' : 'right',
        				'valign' : 'bottom',
        				'tag' : 'title.right'
        			});



        			// Draw the main title for the whole chart
        			RG.drawTitle(
        				this,
        				prop["chart.title"],
        				this.gutterTop,
        				null,
        				prop["chart.title.size"] ? prop["chart.title.size"] : null
        			);
        		};
        		/**
        		 * This function is used by MSIE only to manually draw the shadow
        		 *
        		 * @param array coords The coords for the bar
        		 */
        		this.drawIEShadow =
        			this.DrawIEShadow = function (coords)
        		{
        			var prevFillStyle = co.fillStyle;
        			var offsetx = prop["chart.shadow.offsetx"];
        			var offsety = prop["chart.shadow.offsety"];

        			co.lineWidth = prop["chart.linewidth"];
        			co.setElementLineWidth(co.lineWidth);
        			co.fillStyle = prop["chart.shadow.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.beginPath();

        			// Draw shadow here
        			co.fillRect(coords[0] + offsetx, coords[1] + offsety, coords[2], coords[3]);

        			co.fill();

        			// Change the fillstyle back to what it was
        			co.fillStyle = prevFillStyle;
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        		};




        		/**
        		 * Returns the appropriate focussed bar coordinates
        		 *
        		 * @param e object The event object
        		 */
        		this.getShape =
        			this.getBar = function (e)
        		{
        			var canvas = this.canvas,context = this.context,mouseCoords = RG.getMouseXY(e);

        			/**
        			 * Loop through the bars determining if the mouse is over a bar
        			 */
        			for (var i = 0; i < this.coords.length; i++)
        			{
        				var mouseX = mouseCoords[0],mouseY = mouseCoords[1],left = this.coords[i][0],top = this.coords[i][1],width = this.coords[i][2],height = this.coords[i][3];

        				// if (mouseX >= left && mouseX <= (left + width) && mouseY >= top && mouseY <= (top + height) ) {
        				RG.pa2(co,
        					'b r % % % %',
        					left,
        					top,
        					width,
        					height
        				);
        				if (mouseX >= left && mouseX <= (left + width) && mouseY >= top && mouseY <= (top + height))
        				{
        					// if (co.isPointInPath(mouseX, mouseY)) {

        					var tooltip = RG.parseTooltipText(prop["chart.tooltips"], i);

        					return {
        						0 : this,
        						1 : left,
        						2 : top,
        						3 : width,
        						4 : height,
        						5 : i,
        						'object' : this,
        						'x' : left,
        						'y' : top,
        						'width' : width,
        						'height' : height,
        						'index' : i,
        						'tooltip' : tooltip,
        						'x1' : mouseX,
        						'y1' : mouseY
        					};
        				}
        			}

        			return null;
        		};

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
        			else
        			{
        				RG.Highlight_Rect(this, shape);
        			}
        		};

        		/**
        		 * When you click on the canvas, this will return the relevant value (if any)
        		 *
        		 * REMEMBER This function will need updating if the Bipolar ever gets chart.ymin
        		 *
        		 * @param object e The event object
        		 */
        		this.getValue = function (e)
        		{
        			var obj = e.target.__object__;
        			var mouseXY = RG.getMouseXY(e);
        			var mouseX = mouseXY[0];

        			/**
        			 * Left hand side
        			 */
        			if (mouseX > this.gutterLeft && mouseX < ((ca.width / 2) - (prop["chart.gutter.center"] / 2)))
        			{
        				var value = (mouseX - prop["chart.gutter.left"]) / this.axisWidth;
        				value = this.max - (value * this.max);
        			}

        			/**
        			 * Right hand side
        			 */
        			if (mouseX < (ca.width - this.gutterRight) && mouseX > ((ca.width / 2) + (prop["chart.gutter.center"] / 2)))
        			{
        				var value = (mouseX - prop["chart.gutter.left"] - this.axisWidth - prop["chart.gutter.center"]) / this.axisWidth;
        				value = (value * this.max);
        			}

        			return value;
        		};




        		/**
        		 * The getObjectByXY() worker method. Don't call this call:
        		 *
        		 * RG.ObjectRegistry.getObjectByXY(e)
        		 *
        		 * @param object e The event object
        		 */
        		this.getObjectByXY = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e);

        			// Adjust the mouse Y coordinate for when the bar chart is
        			// a 3D variant

        			if (prop["chart.variant"] === '3d')
        			{
        				var adjustment = prop["chart.variant.threed.angle"] * mouseXY[0];
        				mouseXY[1] -= adjustment;
        			}



        			if (mouseXY[0] > prop["chart.gutter.left"]
        				 && mouseXY[0] < (ca.width - prop["chart.gutter.right"])
        				 && mouseXY[1] > prop["chart.gutter.top"]
        				 && mouseXY[1] < (ca.height - prop["chart.gutter.bottom"]))
        			{
        				return this;
        			}
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
        		 var coordX     = obj.coords[tooltip.__index__][0],
        		 coordY     = obj.coords[tooltip.__index__][1],
        		 coordW     = obj.coords[tooltip.__index__][2],
        		 coordH     = obj.coords[tooltip.__index__][3],
        		 canvasXY   = RG.getCanvasXY(obj.canvas),
        		 mouseXY    = RG.getMouseXY(window.event),
        		 gutterLeft = obj.Get('chart.gutter.left'),
        		 gutterTop  = obj.Get('chart.gutter.top'),
        		 width      = tooltip.offsetWidth,
        		 height     = tooltip.offsetHeight

        		 // If the chart is a 3D version the tooltip Y position needs this
        		 // adjustment
        		 if (prop['chart.variant'] === '3d' && mouseXY) {
        		 var adjustment = (prop['chart.variant.threed.angle'] * mouseXY[0]);
        		 }

        		 // Set the top position
        		 tooltip.style.left = 0;
        		 tooltip.style.top  = window.event.pageY - height - 5 + 'px';


        		 // By default any overflow is hidden
        		 tooltip.style.overflow = '';

        		 // LEFT edge
        		 if (canvasXY[0] + mouseXY[0]  - (width / 2) < 0) {
        		 tooltip.style.left = canvasXY[0] + mouseXY[0] - (width * 0.1) + 'px';

        		 // RIGHT edge
        		 } else if (canvasXY[0] + mouseXY[0]  + (width / 2) > doc.body.offsetWidth) {
        		 tooltip.style.left = canvasXY[0] + mouseXY[0] - (width * 0.9) + 'px';

        		 // Default positioning - CENTERED
        		 } else {
        		 tooltip.style.left = canvasXY[0] + mouseXY[0]  - (width / 2) + 'px';
        		 }
        		 };*/




        		/**
        		 * Returns the X coords for a value. Returns two coords because there are... two scales.
        		 *
        		 * @param number value The value to get the coord for
        		 */
        		this.getXCoord = function (value)
        		{
        			if (value > this.max || value < 0)
        			{
        				return null;
        			}

        			var ret = [];

        			// The offset into the graph area
        			var offset = ((value / this.max) * this.axisWidth);

        			// Get the coords (one fo each side)
        			ret[0] = (this.gutterLeft + this.axisWidth) - offset;
        			ret[1] = (ca.width - this.gutterRight - this.axisWidth) + offset;

        			return ret;
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
        				this.original_colors["chart.highlight.stroke"] = RG.array_clone(prop["chart.highlight.fill"]);
        				this.original_colors["chart.highlight.fill"] = RG.array_clone(prop["chart.highlight.fill"]);
        				this.original_colors["chart.axis.color"] = RG.array_clone(prop["chart.axis.color"]);
        				this.original_colors["chart.strokestyle"] = RG.array_clone(prop["chart.strokestyle"]);
        			}

        			var props = this.properties;
        			var colors = props["chart.colors"];

        			for (var i = 0; i < colors.length; ++i)
        			{
        				colors[i] = this.parseSingleColorForGradient(colors[i]);
        			}

        			props["chart.highlight.stroke"] = this.parseSingleColorForGradient(props["chart.highlight.stroke"]);
        			props["chart.highlight.fill"] = this.parseSingleColorForGradient(props["chart.highlight.fill"]);
        			props["chart.axis.color"] = this.parseSingleColorForGradient(props["chart.axis.color"]);
        			props["chart.strokestyle"] = this.parseSingleColorForGradient(props["chart.strokestyle"]);
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
        			if (!color || typeof (color) != 'string')
        			{
        				return color;
        			}
        			var grad;
        			if (color.match(/^gradient\((.*)\)$/i))
        			{
        				grad = RG.createLinearGradient(co, prop["chart.gutter.left"], 0, ca.width - prop["chart.gutter.right"], 0,
        					color);
        			}

        			return grad ? grad : color;
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




        		//
        		// Draw the background grid
        		//
        		this.drawBackgroundGrid = function ()
        		{
        			if (prop["chart.background.grid"])
        			{
        				var variant = prop["chart.variant"],color = prop["chart.background.grid.color"],numvlines = prop["chart.labels.count"],numhlines = this.left.length,vlines = prop["chart.background.grid.vlines"],hlines = prop["chart.background.grid.hlines"],linewidth = prop["chart.background.grid.linewidth"];

        				// Autofit
        				if (typeof prop["chart.background.grid.autofit.numhlines"] === 'number')
        				{
        					numhlines = prop["chart.background.grid.autofit.numhlines"];
        				}

        				if (typeof prop["chart.background.grid.autofit.numvlines"] === 'number')
        				{
        					numvlines = prop["chart.background.grid.autofit.numvlines"];
        				}

        				co.lineWidth = linewidth;
        				co.setElementLineWidth(co.lineWidth);

        				// If it's a bar and 3D variant, translate
        				if (variant == '3d')
        				{
        					co.save();
        					co.translate(
        						prop["chart.variant.threed.offsetx"],
        						-1 * prop["chart.variant.threed.offsety"]
        					);
        				}

        				// Draw vertical grid lines for the left side
        				if (vlines)
        				{
        					for (var i = 0; i <= numvlines; i += 1)
        					{
        						RG.pa2(co,
        							'b m % % l % % s %',
        							this.gutterLeft + (this.axisWidth / numvlines) * i, this.gutterTop,
        							this.gutterLeft + (this.axisWidth / numvlines) * i, this.gutterTop + this.axisHeight,
        							color
        						);
        					}
        				}

        				// Draw horizontal grid lines for the left side
        				if (hlines)
        				{
        					for (var i = 0; i <= numhlines; i += 1)
        					{
        						RG.pa2(co,
        							'b m % % l % % s %',
        							this.gutterLeft, this.gutterTop + (this.axisHeight / numhlines) * i,
        							this.gutterLeft + this.axisWidth, this.gutterTop + (this.axisHeight / numhlines) * i,
        							color
        						);
        					}
        				}


        				// Draw vertical grid lines for the right side
        				if (vlines)
        				{
        					for (var i = 0; i <= numvlines; i += 1)
        					{
        						RG.pa2(co,
        							'b m % % l % % s %',
        							this.gutterLeft + this.gutterCenter + this.axisWidth + (this.axisWidth / numvlines) * i, this.gutterTop,
        							this.gutterLeft + this.gutterCenter + this.axisWidth + (this.axisWidth / numvlines) * i, this.gutterTop + this.axisHeight,
        							color
        						);
        					}
        				}

        				// Draw horizontal grid lines for the right side
        				if (hlines)
        				{
        					for (var i = 0; i <= numhlines; i += 1)
        					{
        						RG.pa2(co,
        							'b m % % l % % s %',
        							this.gutterLeft + this.axisWidth + this.gutterCenter, this.gutterTop + (this.axisHeight / numhlines) * i,
        							this.gutterLeft + this.axisWidth + this.gutterCenter + this.axisWidth, this.gutterTop + (this.axisHeight / numhlines) * i,
        							color
        						);
        					}
        				}


        				// If it's a bar and 3D variant, translate
        				if (variant == '3d')
        				{
        					co.restore();
        				}
        			}
        		};




        		/**
        		 * This function runs once only
        		 * (put at the end of the file (before any effects))
        		 */
        		this.firstDrawFunc = function ()
        		{
        			// Tooltips need reversing now because the bars
        			// are drawn from the bottom up
        			if (prop["chart.tooltips"])
        			{
        				prop["chart.tooltips"] = RG.arrayReverse(prop["chart.tooltips"]);
        			}
        		};








        		/**
        		 * Objects are now always registered so that when RG.Redraw()
        		 * is called this chart will be redrawn.
        		 */
        		RG.Register(this);




        		/**
        		 * This is the 'end' of the constructor so if the first argument
        		 * contains configuration dsta - handle that.
        		 */
        		if (parseConfObjectForOptions)
        		{
        			RG.parseObjectStyleConfig(this, conf.options);
        		}




        		/**
        		 * Grow
        		 *
        		 * The Bipolar chart Grow effect gradually increases the values of the bars
        		 *
        		 * @param object       An object of options - eg: {frames: 30}
        		 * @param function     A function to call when the effect is complete
        		 */
        		this.grow = function ()
        		{
        			// Callback
        			var opt = arguments[0] || {
        			};
        			var frames = opt.frames || 30;
        			var frame = 0;
        			var callback = arguments[1] || function ()
        			{
        			};
        			var obj = this;

        			if (RG.ISIE8)
        			{
        				this.draw();
        				callback(obj);
        				return;
        			}

        			// Save the data
        			var originalLeft = RG.arrayClone(this.left);
        			var originalRight = RG.arrayClone(this.right);


        			// Stop the scale from changing by setting xmax (if it's not already set)
        			if (RG.isNull(prop["chart.xmax"]))
        			{
        				var xmax = 0;

        				// Go through the left and right data
        				for (var i = 0; i < this.left.length; i += 1)
        				{
        					xmax = ma.max(xmax, ma.abs(this.left[i]));
        				}
        				for (var i = 0; i < this.right.length; i += 1)
        				{
        					xmax = ma.max(xmax, ma.abs(this.right[i]));
        				}

        				var scale = RG.getScale2(obj, {
        					'max' : xmax
        				});
        				this.Set('chart.xmax', scale.max);
        			}

        			var iterator = function ()
        			{
        				var easingMultiplier = RG.Effects_getEasingMultiplier(frames, frame);

        				for (var i = 0; i < obj.left.length; i += 1)
        				{
        					obj.left[i] = easingMultiplier * originalLeft[i];
        				}
        				for (var i = 0; i < obj.right.length; i += 1)
        				{
        					obj.right[i] = easingMultiplier * originalRight[i];
        				}

        				RG.effectCanvasShow(obj.canvas, true);
        				RG.redrawCanvas(obj.canvas);
        				RG.effectCanvasShow(obj.canvas, false, 10);

        				// Repeat or call the end function if one is defined
        				if (frame < frames)
        				{
        					frame += 1;
        					RG.Effects_updateCanvas(iterator);
        				}
        				else
        				{
        					callback(obj);
        				}
        			};

        			iterator();

        			return this;
        		};




        		/**
        		 * Bipolar chart Wave effect.
        		 *
        		 * @param object   OPTIONAL An object map of options. You specify 'frames' here to give the number of frames in the effect
        		 * @param function OPTIONAL A function that will be called when the effect is complete
        		 */
        		this.wave = function ()
        		{
        			var obj = this,opt = arguments[0] || {
        			};
        			opt.frames = opt.frames || 60;
        			opt.startFrames_left = [];
        			opt.startFrames_right = [];
        			opt.counters_left = [];
        			opt.counters_right = [];

        			if (RG.ISIE8)
        			{
        				this.draw();
        				callback(obj);
        				return;
        			}

        			var framesperbar = opt.frames / 3,frame_left = -1,frame_right = -1,callback = arguments[1] || function ()
        			{
        			},original_left = RG.arrayClone(obj.left),original_right = RG.arrayClone(obj.right);

        			for (var i = 0,len = obj.left.length; i < len; i += 1)
        			{
        				opt.startFrames_left[i] = ((opt.frames / 2) / (obj.left.length - 1)) * i;
        				opt.startFrames_right[i] = ((opt.frames / 2) / (obj.right.length - 1)) * i;
        				opt.counters_left[i] = 0;
        				opt.counters_right[i] = 0;
        			}

        			// This stops the chart from jumping
        			obj.draw();
        			obj.set('xmax', obj.scale2.max);
        			RG.clear(obj.canvas);


        			// Zero all of the data
        			for (var i = 0,len = obj.left.length; i < len; i += 1)
        			{
        				if (typeof obj.left[i] === 'number')
        				{
        					obj.left[i] = 0;
        				}
        				if (typeof obj.right[i] === 'number')
        				{
        					obj.right[i] = 0;
        				}
        			}

        			//
        			// Iterate over the left side
        			//
        			function iteratorLeft ()
        			{
        				++frame_left;

        				for (var i = 0,len = obj.left.length; i < len; i += 1)
        				{
        					if (frame_left > opt.startFrames_left[i])
        					{
        						var isNull = RG.isNull(obj.left[i]);

        						obj.left[i] = ma.min(
        							ma.abs(original_left[i]),
        							ma.abs(original_left[i] * ((opt.counters_left[i]++) / framesperbar))
        						);

        						// Make the number negative if the original was
        						if (original_left[i] < 0)
        						{
        							obj.left[i] *= -1;
        						}

        						if (isNull)
        						{
        							obj.left[i] = null;
        						}
        					}
        					else
        					{
        						obj.left[i] = typeof obj.left[i] === 'object' && obj.left[i] ? RG.arrayPad([], obj.left[i].length, 0) : (RG.isNull(obj.left[i]) ? null : 0);
        					}
        				}


        				// No callback here - only called by the right function
        				if (frame_left < opt.frames)
        				{
        					RG.redrawCanvas(obj.canvas);
        					RG.Effects.updateCanvas(iteratorLeft);
        				}
        			}




        			//
        			// Iterate over the right side
        			//
        			function iteratorRight ()
        			{
        				++frame_right;

        				for (var i = 0,len = obj.right.length; i < len; i += 1)
        				{
        					if (frame_right > opt.startFrames_right[i])
        					{
        						var isNull = RG.isNull(obj.right[i]);

        						obj.right[i] = ma.min(
        							ma.abs(original_right[i]),
        							ma.abs(original_right[i] * ((opt.counters_right[i]++) / framesperbar))
        						);

        						// Make the number negative if the original was
        						if (original_right[i] < 0)
        						{
        							obj.right[i] *= -1;
        						}

        						if (isNull)
        						{
        							obj.right[i] = null;
        						}
        					}
        					else
        					{
        						obj.right[i] = typeof obj.right[i] === 'object' && obj.right[i] ? RG.arrayPad([], obj.right[i].length, 0) : (RG.isNull(obj.right[i]) ? null : 0);
        					}
        				}


        				// No callback here - only called by the right function
        				if (frame_right < opt.frames)
        				{
        					RG.redrawCanvas(obj.canvas);
        					RG.Effects.updateCanvas(iteratorRight);
        				}
        				else
        				{
        					callback(this);
        				}
        			}

        			iteratorLeft();
        			iteratorRight();

        			return this;
        		};
        	};
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
