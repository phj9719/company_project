//XJS=RGraph.vprogress.xjs
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
        if (!nexacro.RGraph.VProgress)
        {
        	/**
        	 * The progress bar constructor
        	 *
        	 * @param mixed conf This can either be an object that contains all of the configuration data
        	 *                   (the updated way of configuring the object) or it can be a string consisting of the
        	 *                   canvas ID
        	 * @param number     The minimum value (if using the older configuration style)
        	 * @param number     The maximum value (if using the older configuration style)
        	 * @param number     The represented value (if using the older configuration style)
        	 */
        	nexacro.RGraph.VProgress = function (conf)
        	{
        		var RG = arguments[1];
        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];
        		var id = this.id;
        		var canvas = this.canvas;
        		var parseConfObjectForOptions = true;
        		this.canvas.__object__ = this;

        		this.min = RG.stringsToNumbers(conf.min);
        		this.max = RG.stringsToNumbers(conf.max);
        		this.value = RG.stringsToNumbers(conf.value);
        		this.type = 'vprogress';
        		this.coords = [];
        		this.isRGraph = true;
        		this.currentValue = null;
        		this.uid = RG.CreateUID();
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();
        		this.colorsParsed = false;
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		/**
        		 * Compatibility with older browsers
        		 */
        		// RG.OldBrowserCompat(this.context);

        		this.properties =
        			{
        			'chart.style.background' : null,
        			'chart.style.gradation' : null,
        			'chart.style.border' : null,
        			'chart.style.bordertype' : null,
        			'chart.colors' : ['gradient(#00cc00:white:#00cc00)', 'gradient(red:white:red)', 'gradient(green:white:green)', 'yellow', 'pink', 'cyan', 'black', 'white', 'gray'],
        			'chart.strokestyle.inner' : '#999999',
        			'chart.strokestyle.outer' : '#999999',
        			'chart.tickmarks' : true,
        			'chart.tickmarks.zerostart' : true,
        			'chart.tickmarks.color' : '#999999',
        			'chart.tickmarks.inner' : false,
        			'chart.gutter.left' : 25,
        			'chart.gutter.right' : 25,
        			'chart.gutter.top' : 25,
        			'chart.gutter.bottom' : 25,
        			'chart.numticks' : 10,
        			'chart.numticks.inner' : 50,
        			'chart.background.color' : 'gradient(#cccccc:#eeeeee:#efefef)',
        			'chart.shadow' : false,
        			'chart.shadow.color' : [0, 0, 0, 0.5],
        			'chart.shadow.blur' : 3,
        			'chart.shadow.offsetx' : 3,
        			'chart.shadow.offsety' : 3,
        			'chart.title' : '',
        			'chart.title.bold' : true,
        			'chart.title.font' : null,
        			'chart.title.size' : null,
        			'chart.title.color' : 'black',
        			'chart.title.side' : null,
        			'chart.title.side.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.title.side.size' : 10,
        			'chart.title.side.color' : 'black',
        			'chart.title.side.bold' : true,
        			'chart.text.size' : 12,
        			'chart.text.color' : 'black',
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.contextmenu' : null,
        			'chart.units.pre' : '',
        			'chart.units.post' : '',
        			'chart.tooltips' : null,
        			'chart.tooltips.effect' : 'fade',
        			'chart.tooltips.css.class' : 'RGraph_tooltip',
        			'chart.tooltips.highlight' : true,
        			'chart.tooltips.event' : 'onclick',
        			'chart.highlight.stroke' : [0, 0, 0, 0],
        			'chart.highlight.fill' : [255, 255, 255, 0.7],
        			'chart.annotatable' : false,
        			'chart.annotate.color' : 'black',
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
        			'chart.arrows' : false,
        			'chart.margin' : 0,
        			'chart.resizable' : false,
        			'chart.resize.handle.adjust' : [0, 0],
        			'chart.resize.handle.background' : null,
        			'chart.label.inner' : false,
        			'chart.labels.count' : 10,
        			'chart.labels.position' : 'right',
        			'chart.labels.offsetx' : 0,
        			'chart.labels.offsety' : 0,
        			'chart.adjustable' : false,
        			'chart.scale.decimals' : 0,
        			'chart.scale.thousand' : ',',
        			'chart.scale.point' : '.',
        			'chart.key' : null,
        			'chart.key.background' : 'white',
        			'chart.key.position' : 'graph',
        			'chart.key.halign' : 'right',
        			'chart.key.shadow' : false,
        			'chart.key.shadow.color' : '#666666',
        			'chart.key.shadow.blur' : 3,
        			'chart.key.shadow.offsetx' : 2,
        			'chart.key.shadow.offsety' : 2,
        			'chart.key.position.gutter.boxed' : false,
        			'chart.key.position.x' : null,
        			'chart.key.position.y' : null,
        			'chart.key.color.shape' : 'square',
        			'chart.key.rounded' : true,
        			'chart.key.linewidth' : 1,
        			'chart.key.colors' : null,
        			'chart.key.interactive' : false,
        			'chart.key.interactive.highlight.chart.stroke' : '#000000',
        			'chart.key.interactive.highlight.chart.fill' : [255, 255, 255, 0.7],
        			'chart.key.interactive.highlight.label' : [255, 0, 0, 0.2],
        			'chart.key.interactive.background.color' : [255, 255, 255, 0.1], // hsji
        			'chart.key.interactive.stroke.color' : [255, 255, 255, 1], // hsji

        			'chart.key.text.color' : 'black',
        			'chart.events.click' : null,
        			'chart.events.mousemove' : null,
        			'chart.border.inner' : true,
        			'chart.clearto' : [0, 0, 0, 0]
        		};

        		// Check for support
        		if (!this.canvas)
        		{
        			alert('[PROGRESS] No canvas support');
        			return;
        		}


        		/**
        		 * Create the dollar objects so that functions can be added to them
        		 */
        		var linear_data = RG.arrayLinearize(this.value);
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
        		 * A generic setter
        		 *
        		 * @param string name  The name of the property to set or it can also be an object containing
        		 *                     object style configuration
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

        			/**
        			 * chart.strokestyle now sets both chart.strokestyle.inner and chart.strokestyle.outer
        			 */
        			if (name == 'chart.strokestyle')
        			{
        				prop["chart.strokestyle.inner"] = value;
        				prop["chart.strokestyle.outer"] = value;

        				return;
        			}



        			// Convert uppercase letters to dot+lower case letter
        			while (name.match(/([A-Z])/))
        			{
        				name = name.replace(/([A-Z])/, '.' + RegExp.$1.toLowerCase());
        			}




        			prop[name.toLowerCase()] = value;

        			return this;
        		};




        		/**
        		 * A generic getter
        		 *
        		 * @param string name  The name of the property to get
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
        		 * Draws the progress bar
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
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
        			 * Set the current value
        			 */
        			this.currentValue = this.value;

        			/**
        			 * This is new in May 2011 and facilitates indiviual gutter settings,
        			 * eg chart.gutter.left
        			 */
        			this.gutterLeft = prop["chart.gutter.left"];
        			this.gutterRight = prop["chart.gutter.right"];
        			this.gutterTop = prop["chart.gutter.top"];
        			this.gutterBottom = prop["chart.gutter.bottom"];

        			// Figure out the width and height
        			this.width = ca.width - this.gutterLeft - this.gutterRight;
        			this.height = ca.height - this.gutterTop - this.gutterBottom;
        			this.coords = [];



        			/**
        			 * Stop this growing uncontrollably
        			 */
        			this.coordsText = [];

        			this.Drawbar();
        			this.DrawTickMarks();
        			this.DrawLabels();
        			this.DrawTitles();

        			// Taken out on 24th June 2016
        			// co.stroke();
        			// co.fill();


        			/**
        			 * Draw the bevel effect if requested
        			 */
        			if (prop["chart.bevel"])
        			{
        				this.DrawBevel();
        			}

        			/**
        			 * Setup the context menu if required
        			 */
        			if (prop["chart.contextmenu"])
        			{
        				RG.ShowContext(this);
        			}


        			/**
        			 * This installs the event listeners
        			 */
        			RG.InstallEventListeners(this);
        			// Draw a key if necessary
        			if (prop["chart.key"] && prop["chart.key"].length)
        			{
        				RG.DrawKey(this, prop["chart.key"], prop["chart.colors"]);
        			}

        			/**
        			 * This function enables resizing
        			 */
        			if (prop["chart.resizable"])
        			{
        				RG.AllowResizing(this);
        			}

        			/**
        			 * Instead of using RG.common.adjusting.js, handle them here
        			 */
        			this.AllowAdjusting();


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
        		 * Draw the bar itself
        		 */
        		this.drawbar =
        			this.Drawbar = function ()
        		{
        			/**
        			 * First get the scale
        			 */
        			this.scale2 = RG.getScale2(this, {
        				'max' : this.max,
        				'min' : this.min,
        				'strict' : true,
        				'scale.thousand' : prop["chart.scale.thousand"],
        				'scale.point' : prop["chart.scale.point"],
        				'scale.decimals' : prop["chart.scale.decimals"],
        				'ylabels.count' : prop["chart.labels.count"],
        				'scale.round' : prop["chart.scale.round"],
        				'units.pre' : prop["chart.units.pre"],
        				'units.post' : prop["chart.units.post"]
        			});


        			// Set a shadow if requested
        			if (prop["chart.shadow"])
        			{
        				RG.setShadow(this, prop["chart.shadow.color"], prop["chart.shadow.offsetx"], prop["chart.shadow.offsety"], prop["chart.shadow.blur"]);
        			}

        			// Draw the outline
        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.strokeStyle = prop["chart.strokestyle.outer"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			co.strokeRect(
        				this.gutterLeft,
        				this.gutterTop,
        				this.width,
        				this.height
        			);

        			co.fillRect(
        				this.gutterLeft,
        				this.gutterTop,
        				this.width,
        				this.height
        			);

        			// Turn off any shadow
        			RG.noShadow(this);

        			co.strokeStyle = prop["chart.strokestyle.outer"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.fillStyle = prop["chart.colors"][0];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			var margin = prop["chart.margin"];
        			var barHeight = (ca.height - this.gutterTop - this.gutterBottom) * ((RG.arraySum(this.value) - this.min) / (this.max - this.min));

        			// Draw the actual bar itself
        			if (typeof this.value === 'number')
        			{
        				co.lineWidth = 1;
        				co.setElementLineWidth(co.lineWidth);
        				co.strokeStyle = prop["chart.strokestyle.inner"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				if (prop["chart.border.inner"])
        				{
        					this.drawCurvedBar({
        						x : this.gutterLeft + margin,
        						y : this.gutterTop + (this.height - barHeight),
        						width : this.width - margin - margin,
        						height : barHeight,
        						stroke : prop["chart.strokestyle.inner"]
        					});
        				}

        				this.drawCurvedBar({
        					x : this.gutterLeft + margin,
        					y : this.gutterTop + (this.height - barHeight),
        					width : this.width - margin - margin,
        					height : barHeight,
        					fill : prop["chart.colors"][0]
        				});
        			}
        			else if (typeof this.value == 'object')
        			{
        				co.beginPath();
        				co.strokeStyle = prop["chart.strokestyle.inner"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);

        				var startPoint = ca.height - this.gutterBottom;
        				var col;
        				for (var i = 0,len = this.value.length; i < len; ++i)
        				{
        					var segmentHeight = ((this.value[i] - this.min) / (this.max - this.min)) * (ca.height - this.gutterBottom - this.gutterTop);

        					co.fillStyle = col = prop["chart.colors"][i];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);

        					co.beginPath();
        					if (prop["chart.border.inner"])
        					{
        						this.drawCurvedBar({
        							x : this.gutterLeft + margin,
        							y : startPoint - segmentHeight,
        							width : this.width - margin - margin,
        							height : segmentHeight,
        							stroke : co.strokeStyle
        						});
        					}

        					this.drawCurvedBar({
        						x : this.gutterLeft + margin,
        						y : startPoint - segmentHeight,
        						width : this.width - margin - margin,
        						height : segmentHeight,
        						fill : col
        					});

        					// Store the coords
        					this.coords.push([
        						this.gutterLeft + margin,
        						startPoint - segmentHeight,
        						this.width - margin - margin,
        						segmentHeight
        					]);

        					startPoint -= segmentHeight;
        				}

        				// co.stroke();
        				co.fill();
        			}

        			/**
        			 * Inner tickmarks
        			 */
        			if (prop["chart.tickmarks.inner"])
        			{
        				var spacing = (ca.height - this.gutterTop - this.gutterBottom) / prop["chart.numticks.inner"];

        				co.lineWidth = 1;
        				co.setElementLineWidth(co.lineWidth);
        				co.strokeStyle = prop["chart.strokestyle.outer"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);

        				co.beginPath();

        				for (var y = this.gutterTop; y < ca.height - this.gutterBottom; y += spacing)
        				{
        					co.moveTo(this.gutterLeft, Math.round(y));
        					co.lineTo(this.gutterLeft + 3, Math.round(y));

        					co.moveTo(ca.width - this.gutterRight, Math.round(y));
        					co.lineTo(ca.width - this.gutterRight - 3, Math.round(y));
        				}

        				co.stroke();
        			}

        			co.beginPath();
        			co.strokeStyle = prop["chart.strokestyle.inner"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			if (typeof this.value == 'number')
        			{
        				if (prop["chart.border.inner"])
        				{
        					this.drawCurvedBar({
        						x : this.gutterLeft + margin,
        						y : this.gutterTop + this.height - barHeight,
        						width : this.width - margin - margin,
        						height : barHeight
        					});
        				}

        				this.drawCurvedBar({
        					x : this.gutterLeft + margin,
        					y : this.gutterTop + this.height - barHeight,
        					width : this.width - margin - margin,
        					height : barHeight
        				});

        				// Store the coords
        				this.coords.push([
        					this.gutterLeft + margin,
        					this.gutterTop + this.height - barHeight,
        					this.width - margin - margin,
        					barHeight
        				]);
        			}

        			/**
        			 * Draw the arrows indicating the level if requested
        			 */
        			if (prop["chart.arrows"])
        			{
        				var x = this.gutterLeft - 4;
        				var y = ca.height - this.gutterBottom - barHeight;

        				co.lineWidth = 1;
        				co.setElementLineWidth(co.lineWidth);
        				co.fillStyle = 'black';
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.strokeStyle = 'black';
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);

        				co.beginPath();
        				co.moveTo(x, y);
        				co.lineTo(x - 4, y - 2);
        				co.lineTo(x - 4, y + 2);
        				co.closePath();

        				co.stroke();
        				co.fill();

        				x += this.width + 8;

        				co.beginPath();
        				co.moveTo(x, y);
        				co.lineTo(x + 4, y - 2);
        				co.lineTo(x + 4, y + 2);
        				co.closePath();

        				co.stroke();
        				co.fill();

        				RG.pa2(co, 'b');
        			}




        			/**
        			 * Draw the "in-bar" label
        			 */
        			if (prop["chart.label.inner"])
        			{
        				co.fillStyle = 'black';
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				RG.text2(this, {
        					'font' : prop["chart.text.font"],
        					'size' : prop["chart.text.size"],
        					'x' : ((ca.width - this.gutterLeft - this.gutterRight) / 2) + this.gutterLeft,
        					'y' : this.coords[this.coords.length - 1][1] - 5,
        					'text' : RG.number_format(this, (typeof (this.value) == 'number' ? this.value : RG.array_sum(this.value)).toFixed(prop["chart.scale.decimals"])),
        					'valign' : 'bottom',
        					'halign' : 'center',
        					'bounding' : true,
        					'boundingFill' : 'white',
        					'tag' : 'label.inner'
        				});
        			}
        		};




        		/**
        		 * The function that draws the tick marks.
        		 */
        		this.drawTickMarks =
        			this.DrawTickMarks = function ()
        		{
        			co.strokeStyle = prop["chart.tickmarks.color"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			if (prop["chart.tickmarks"])
        			{
        				co.beginPath();
        				for (var i = 0; prop["chart.tickmarks.zerostart"] ? i <= prop["chart.numticks"] : i < prop["chart.numticks"]; i++)
        				{
        					var startX = prop["chart.labels.position"] == 'left' ? this.gutterLeft : ca.width - prop["chart.gutter.right"];
        					var endX = prop["chart.labels.position"] == 'left' ? startX - 4 : startX + 4;
        					var yPos = (this.height * (i / prop["chart.numticks"])) + this.gutterTop;

        					co.moveTo(startX, ma.round(yPos));
        					co.lineTo(endX, ma.round(yPos));
        				}
        				co.stroke();
        			}
        		};




        		/**
        		 * The function that draws the labels
        		 */
        		this.drawLabels =
        			this.DrawLabels = function ()
        		{
        			if (!RG.is_null(prop["chart.labels.specific"]))
        			{
        				return this.DrawSpecificLabels();
        			}

        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			var position = prop["chart.labels.position"].toLowerCase();
        			var xAlignment = position == 'left' ? 'right' : 'left';
        			var yAlignment = 'center';
        			var count = prop["chart.labels.count"];
        			var units_pre = prop["chart.units.pre"];
        			var units_post = prop["chart.units.post"];
        			var text_size = prop["chart.text.size"];
        			var text_font = prop["chart.text.font"];
        			var decimals = prop["chart.scale.decimals"];
        			var offsetx = prop["chart.labels.offsetx"];
        			var offsety = prop["chart.labels.offsety"];

        			if (prop["chart.tickmarks"])
        			{
        				for (var i = 0; i < count; ++i)
        				{
        					RG.text2(this, {
        						font : text_font,
        						size : text_size,
        						x : position == 'left' ? (this.gutterLeft - 7 + offsetx) : (ca.width - this.gutterRight + 7) + offsetx,
        						y : (((ca.height - this.gutterTop - this.gutterBottom) / count) * i) + this.gutterTop + offsety,
        						text : this.scale2.labels[this.scale2.labels.length - (i + 1)],
        						valign : yAlignment,
        						halign : xAlignment,
        						tag : 'scale'
        					});
        				}

        				/**
        				 * Show zero?
        				 */
        				if (prop["chart.tickmarks.zerostart"] && this.min == 0)
        				{
        					RG.text2(this, {
        						font : text_font,
        						size : text_size,
        						x : position == 'left' ? (this.gutterLeft - 5 + offsetx) : (ca.width - this.gutterRight + 5 + offsetx),
        						y : ca.height - this.gutterBottom + offsety,
        						'text' : RG.numberFormat(this, this.min.toFixed(this.min === 0 ? 0 : decimals), units_pre, units_post),
        						valign : yAlignment,
        						halign : xAlignment,
        						tag : 'scale'
        					});
        				}

        				/**
        				 * min is set
        				 */
        				if (this.min != 0)
        				{
        					RG.text2(this, {
        						font : text_font,
        						size : text_size,
        						x : position == 'left' ? (this.gutterLeft - 5 + offsetx) : (ca.width - this.gutterRight + 5 + offsetx),
        						y : ca.height - this.gutterBottom + offsety,
        						text : RG.number_format(this, this.min.toFixed(decimals), units_pre, units_post),
        						valign : yAlignment,
        						halign : xAlignment,
        						tag : 'scale'
        					});
        				}
        			}
        		};




        		/**
        		 * Draws titles
        		 */
        		this.drawTitles =
        			this.DrawTitles = function ()
        		{
        			var text_size = prop["chart.text.size"];
        			var text_font = prop["chart.text.font"];
        			var title_size = prop["chart.title.size"] ? prop["chart.title.size"] : text_size + 2;

        			// Draw the title text
        			if (prop["chart.title"].length > 0)
        			{
        				co.fillStyle = prop["chart.title.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				RG.text2(this, {
        					'font' : prop["chart.title.font"] ? prop["chart.title.font"] : text_font,
        					'size' : title_size,
        					'x' : this.gutterLeft + ((ca.width - this.gutterLeft - this.gutterRight) / 2),
        					'y' : this.gutterTop - 5,
        					'text' : prop["chart.title"],
        					'valign' : 'bottom',
        					'halign' : 'center',
        					'bold' : prop["chart.title.bold"],
        					'tag' : 'title'
        				});
        			}

        			// Draw side title
        			if (typeof (prop["chart.title.side"]) == 'string')
        			{
        				co.fillStyle = prop["chart.title.side.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				RG.Text2(this, {
        					'font' : prop["chart.title.side.font"],
        					'size' : prop["chart.title.side.size"],
        					'x' : prop["chart.labels.position"] == 'right' ? this.gutterLeft - 10 : (ca.width - this.gutterRight) + 10,
        					'y' : this.gutterTop + (this.height / 2),
        					'text' : prop["chart.title.side"],
        					'valign' : 'bottom',
        					'halign' : 'center',
        					'angle' : prop["chart.labels.position"] == 'right' ? 270 : 90,
        					'bold' : prop["chart.title.side.bold"],
        					'tag' : 'title.side'
        				});
        			}
        		};




        		/**
        		 * Returns the focused bar
        		 *
        		 * @param event e The event object
        		 */
        		this.getShape =
        			this.getBar = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e),mouseX = mouseXY[0],mouseY = mouseXY[1];

        			for (var i = 0,len = this.coords.length; i < len; i++)
        			{
        				var x = this.coords[i][0],y = this.coords[i][1],w = this.coords[i][2],h = this.coords[i][3],idx = i;

        				co.beginPath();
        				this.drawCurvedBar({
        					x : x,
        					y : y,
        					width : w,
        					height : h
        				});

        				// if (co.isPointInPath(mouseX, mouseY)) {
        				if (mouseX >= x && mouseX <= (x + w) && mouseY >= y && mouseY <= (y + h))
        				{
        					var tooltip = RG.parseTooltipText(prop["chart.tooltips"], i);

        					return {
        						0 : this,
        						'object' : this,
        						1 : x,
        						'x' : x,
        						2 : y,
        						'y' : y,
        						3 : w,
        						'width' : w,
        						4 : h,
        						'height' : h,
        						5 : i,
        						'index' : i,
        						'tooltip' : tooltip
        					};
        				}
        			}
        		};




        		/**
        		 * This function returns the value that the mouse is positioned at, regardless of
        		 * the actual indicated value.
        		 *
        		 * @param object e The event object
        		 */
        		this.getValue = function (e)
        		{
        			var mouseCoords = RG.getMouseXY(e);
        			var mouseX = mouseCoords[0];
        			var mouseY = mouseCoords[1];

        			var value = (this.height - (mouseY - this.gutterTop)) / this.height;
        			value *= this.max - this.min;
        			value += this.min;

        			// Bounds checking
        			if (value > this.max)
        			{
        				value = this.max;
        			}
        			if (value < this.min)
        			{
        				value = this.min;
        			}

        			return value;
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
        				var last = shape.index === this.coords.length - 1;

        				this.drawCurvedBar({
        					x : shape.x,
        					y : shape.y,
        					width : shape.width,
        					height : shape.height,
        					stroke : prop["chart.highlight.stroke"],
        					fill : prop["chart.highlight.fill"]
        				});
        			}
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

        			if (mouseXY[0] > this.gutterLeft
        				 && mouseXY[0] < (ca.width - this.gutterRight)
        				 && mouseXY[1] >= this.gutterTop
        				 && mouseXY[1] <= (ca.height - this.gutterBottom))
        			{
        				return this;
        			}
        		};




        		/**
        		 * This function allows the VProgress to be  adjustable.
        		 * UPDATE: Not any more
        		 */
        		this.allowAdjusting =
        			this.AllowAdjusting = function ()
        		{
        			return;
        		};




        		/**
        		 * This method handles the adjusting calculation for when the mouse is moved
        		 *
        		 * @param object e The event object
        		 */
        		this.adjusting_mousemove =
        			this.Adjusting_mousemove = function (e)
        		{
        			/**
        			 * Handle adjusting for the HProgress
        			 */
        			if (prop["chart.adjustable"] && RG.Registry.Get('chart.adjusting') && RG.Registry.Get('chart.adjusting').uid == this.uid)
        			{
        				var mouseXY = RG.getMouseXY(e);
        				var value = this.getValue(e);

        				if (typeof value === 'number')
        				{
        					// Fire the onadjust event
        					RG.FireCustomEvent(this, 'onadjust');

        					this.value = Number(value.toFixed(prop["chart.scale.decimals"]));
        					RG.RedrawCanvas(this.canvas);
        				}
        			}
        		};




        		/**
        		 * Draws chart.labels.specific
        		 */
        		this.drawSpecificLabels =
        			this.DrawSpecificLabels = function ()
        		{
        			var labels = prop["chart.labels.specific"];

        			if (labels)
        			{
        				var font = prop["chart.text.font"];
        				var size = prop["chart.text.size"];
        				var halign = prop["chart.labels.position"] == 'right' ? 'left' : 'right';
        				var step = this.height / (labels.length - 1);

        				co.beginPath();

        				co.fillStyle = prop["chart.text.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				for (var i = 0; i < labels.length; ++i)
        				{
        					RG.Text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : prop["chart.labels.position"] == 'right' ? ca.width - this.gutterRight + 7 : this.gutterLeft - 7,
        						'y' : (this.height + this.gutterTop) - (step * i),
        						'text' : labels[i],
        						'valign' : 'center',
        						'halign' : halign,
        						'tag' : 'labels.specific'
        					});
        				}
        				co.fill();
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
        		 var coordX     = obj.coords[tooltip.__index__][0];
        		 var coordY     = obj.coords[tooltip.__index__][1];
        		 var coordW     = obj.coords[tooltip.__index__][2];
        		 var coordH     = obj.coords[tooltip.__index__][3];
        		 var canvasXY   = RG.getCanvasXY(obj.canvas);
        		 var mouseXY    = RG.getMouseXY(window.event);
        		 var gutterLeft = obj.gutterLeft;
        		 var gutterTop  = obj.gutterTop;
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
        		 * This function returns the appropriate Y coordinate for the given Y value
        		 *
        		 * @param  int value The Y value you want the coordinate for
        		 * @returm int       The coordinate
        		 */
        		this.getYCoord = function (value)
        		{
        			if (value > this.max || value < this.min)
        			{
        				return null;
        			}

        			var barHeight = ca.height - prop["chart.gutter.top"] - prop["chart.gutter.bottom"];
        			var coord = ((value - this.min) / (this.max - this.min)) * barHeight;
        			coord = ca.height - coord - prop["chart.gutter.bottom"];

        			return coord;
        		};




        		/**
        		 * This returns true/false as to whether the cursor is over the chart area.
        		 * The cursor does not necessarily have to be over the bar itself.
        		 */
        		this.overChartArea = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e);
        			var mouseX = mouseXY[0];
        			var mouseY = mouseXY[1];

        			if (mouseX >= this.gutterLeft
        				 && mouseX <= (ca.width - this.gutterRight)
        				 && mouseY >= this.gutterTop
        				 && mouseY <= (ca.height - this.gutterBottom))
        			{
        				return true;
        			}

        			return false;
        		};




        		/**
        		 *
        		 */
        		this.parseColors = function ()
        		{
        			// Save the original colors so that they can be restored when the canvas is reset
        			if (this.original_colors.length === 0)
        			{
        				this.original_colors["chart.colors"] = RG.array_clone(prop["chart.colors"]);
        				this.original_colors["chart.tickmarks.color"] = RG.array_clone(prop["chart.tickmarks.color"]);
        				this.original_colors["chart.strokestyle.inner"] = RG.array_clone(prop["chart.strokestyle.inner"]);
        				this.original_colors["chart.strokestyle.outer"] = RG.array_clone(prop["chart.strokestyle.outer"]);
        				this.original_colors["chart.highlight.fill"] = RG.array_clone(prop["chart.highlight.fill"]);
        				this.original_colors["chart.highlight.stroke"] = RG.array_clone(prop["chart.highlight.stroke"]);
        				this.original_colors["chart.highlight.color"] = RG.array_clone(prop["chart.highlight.color"]);
        			}

        			var colors = prop["chart.colors"];

        			for (var i = 0,len = colors.length; i < len; ++i)
        			{
        				colors[i] = this.parseSingleColorForGradient(colors[i]);
        			}

        			prop["chart.tickmarks.color"] = this.parseSingleColorForGradient(prop["chart.tickmarks.color"]);
        			prop["chart.strokestyle.inner"] = this.parseSingleColorForGradient(prop["chart.strokestyle.inner"]);
        			prop["chart.strokestyle.outer"] = this.parseSingleColorForGradient(prop["chart.strokestyle.outer"]);
        			prop["chart.highlight.fill"] = this.parseSingleColorForGradient(prop["chart.highlight.fill"]);
        			prop["chart.highlight.stroke"] = this.parseSingleColorForGradient(prop["chart.highlight.stroke"]);
        			prop["chart.background.color"] = this.parseSingleColorForGradient(prop["chart.background.color"]);
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
        			if (!color || typeof color != 'string')
        			{
        				return color;
        			}
        			var grad;
        			if (color.match(/^gradient\((.*)\)$/i))
        			{
        				grad = RG.createLinearGradient(co, 0, ca.height - prop["chart.gutter.bottom"], 0, prop["chart.gutter.top"], color);
        			}

        			return grad ? grad : color;
        		};




        		/**
        		 * Draws the bevel effect
        		 */
        		this.drawBevel =
        			this.DrawBevel = function ()
        		{
        			// In case of multiple segments - this adds up all the lengths
        			for (var i = 0,height = 0; i < this.coords.length; ++i)
        			{
        				height += this.coords[i][3];
        			}

        			co.save();
        			co.beginPath();
        			co.rect(
        				this.coords[0][0],
        				this.coords[this.coords.length - 1][1] - 1,
        				this.coords[0][2],
        				height
        			);
        			// co.clip();

        			co.save();
        			// Draw a path to clip to
        			co.beginPath();
        			this.drawCurvedBar({
        				x : this.coords[0][0],
        				y : this.coords[this.coords.length - 1][1] - 1,
        				width : this.coords[0][2],
        				height : height
        			});
        			co.clip();

        			// Now draw the rect with a shadow
        			co.beginPath();

        			co.shadowColor = 'black';
        			RG.setElementCommonStyle(co, co.shadowColor, 3);
        			co.shadowOffsetX = 0;
        			co.shadowOffsetY = 0;
        			co.setElementShadowOffsetX(co.shadowOffsetX);
        			co.setElementShadowOffsetY(co.shadowOffsetY);
        			co.shadowBlur = 15;
        			co.setElementShadowBlur(co.shadowBlur);

        			co.lineWidth = 2;
        			co.setElementLineWidth(co.lineWidth);

        			this.drawCurvedBar({
        				x : this.coords[0][0] - 1,
        				y : this.coords[this.coords.length - 1][1] - 1,
        				width : this.coords[0][2] + 2,
        				// height: height + 2
        				height : height + 2 + 100
        			});

        			co.stroke();
        			// co.restore();
        			co.restore();
        		};

        		/**
        		 * This function handles highlighting an entire data-series for the interactive
        		 * key
        		 *
        		 * @param int index The index of the data series to be highlighted
        		 */
        		this.interactiveKeyHighlight = function (index)
        		{
        			var coords = this.coords[index];

        			co.beginPath();

        			co.strokeStyle = prop["chart.key.interactive.highlight.chart.stroke"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.lineWidth = 2;
        			co.setElementLineWidth(co.lineWidth);
        			co.fillStyle = prop["chart.key.interactive.highlight.chart.fill"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			co.rect(coords[0], coords[1], coords[2], coords[3]);
        			co.fill();
        			co.stroke();

        			// Reset the linewidth
        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);
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
        		 * Draws a bar with a curved end
        		 *
        		 * DOESN'T DRAW A CURVED BAR ANY MORE - JUST A REGULAR SQUARE ENDED BAR
        		 *
        		 * @param object opt The coords and colours
        		 */
        		this.drawCurvedBar = function (opt)
        		{
        			RG.pa2(co, 'b r % % % %',
        				opt.x, opt.y,
        				opt.width, opt.height
        			);

        			if (opt.stroke)
        			{
        				co.strokeStyle = opt.stroke;
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.stroke();
        			}

        			if (opt.fill)
        			{
        				co.fillStyle = opt.fill;
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.fill();
        			}
        		};




        		/**
        		 * This function runs once only
        		 * (put at the end of the file (before any effects))
        		 */
        		this.firstDrawFunc = function ()
        		{
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
        		 * HProgress Grow effect (which is also the VPogress Grow effect)
        		 *
        		 * @param object obj The chart object
        		 */
        		this.grow = function ()
        		{
        			var obj = this;
        			var canvas = obj.canvas;
        			var context = obj.context;
        			var initial_value = obj.currentValue;
        			var opt = arguments[0] || {
        			};
        			var numFrames = opt.frames || 10;
        			var frame = 0;
        			var callback = arguments[1] || function ()
        			{
        			};

        			if (RG.ISIE8)
        			{
        				this.draw();
        				callback(obj);
        				return;
        			}

        			if (typeof obj.value === 'object')
        			{
        				if (RG.is_null(obj.currentValue))
        				{
        					obj.currentValue = [];
        					for (var i = 0; i < obj.value.length; ++i)
        					{
        						obj.currentValue[i] = 0;
        					}
        				}

        				var diff = [];
        				var increment = [];

        				for (var i = 0; i < obj.value.length; ++i)
        				{
        					diff[i] = obj.value[i] - Number(obj.currentValue[i]);
        					increment[i] = diff[i] / numFrames;
        				}

        				if (initial_value == null)
        				{
        					initial_value = [];
        					for (var i = 0; i < obj.value.length; ++i)
        					{
        						initial_value[i] = 0;
        					}
        				}
        			}
        			else
        			{
        				var diff = obj.value - Number(obj.currentValue);
        				var increment = diff / numFrames;
        			}

        			function iterator ()
        			{
        				frame++;

        				if (frame <= numFrames)
        				{
        					if (typeof obj.value == 'object')
        					{
        						obj.value = [];
        						for (var i = 0; i < initial_value.length; ++i)
        						{
        							obj.value[i] = initial_value[i] + (increment[i] * frame);
        						}
        					}
        					else
        					{
        						obj.value = initial_value + (increment * frame);
        					}
        					RG.effectCanvasShow(obj.canvas, true);
        					RG.clear(obj.canvas);
        					RG.redrawCanvas(obj.canvas);
        					RG.effectCanvasShow(obj.canvas, false, 10);

        					RG.Effects_updateCanvas(iterator);
        				}
        				else
        				{
        					callback();
        				}
        			}

        			iterator();

        			return this;
        		};



        		RG.att(ca);



        		/**
        		 * The chart is now always registered
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
