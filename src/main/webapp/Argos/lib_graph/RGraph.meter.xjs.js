//XJS=RGraph.meter.xjs
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

        if (!nexacro.RGraph.Meter)
        {
        	/**
        	 * The bar chart constructor
        	 *
        	 * @param string canvas The canvas ID
        	 * @param min    integer The minimum value
        	 * @param max    integer The maximum value
        	 * @param value  integer The indicated value
        	 */
        	nexacro.RGraph.Meter = function (conf)
        	{
        		var RG = arguments[1];
        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];
        		var id = this.id;
        		var canvas = this.canvas;
        		var min = conf.min;
        		var max = conf.max;
        		var value = conf.value;
        		var parseConfObjectForOptions = true;
        		// id, min, max, value
        		// Get the canvas and context objects
        		this.canvas.__object__ = this;
        		this.type = 'meter';
        		this.min = RG.stringsToNumbers(min);
        		this.max = RG.stringsToNumbers(max);
        		this.value = RG.stringsToNumbers(value);
        		this.centerx = null;
        		this.centery = null;
        		this.radius = null;
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
        		// Various config type stuff
        		this.properties =
        			{
        			'chart.style.background' : null,
        			'chart.style.gradation' : null,
        			'chart.style.border' : null,
        			'chart.style.bordertype' : null,

        			'chart.background.image.url' : null,
        			'chart.background.image.offsetx' : 0,
        			'chart.background.image.offsety' : 0,
        			'chart.background.image.stretch' : true,
        			'chart.background.color' : 'white',
        			'chart.gutter.left' : 15,
        			'chart.gutter.right' : 15,
        			'chart.gutter.top' : 15,
        			'chart.gutter.bottom' : 20,
        			'chart.linewidth' : 1,
        			'chart.linewidth.segments' : 0,
        			'chart.strokestyle' : null,
        			'chart.border' : true,
        			'chart.border.color' : 'black',
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.size' : 12,
        			'chart.text.color' : 'black',
        			'chart.text.valign' : 'center',
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.value.text.decimals' : 0,
        			'chart.value.text.units.pre' : '',
        			'chart.value.text.units.post' : '',
        			'chart.title' : '',
        			'chart.title.background' : null,
        			'chart.title.hpos' : null,
        			'chart.title.vpos' : null,
        			'chart.title.color' : 'black',
        			'chart.title.bold' : true,
        			'chart.title.font' : null,
        			'chart.title.x' : null,
        			'chart.title.y' : null,
        			'chart.title.halign' : null,
        			'chart.title.valign' : null,
        			'chart.green.start' : ((this.max - this.min) * 0.35) + this.min,
        			'chart.green.end' : this.max,
        			'chart.green.color' : '#207A20',
        			'chart.yellow.start' : ((this.max - this.min) * 0.1) + this.min,
        			'chart.yellow.end' : ((this.max - this.min) * 0.35) + this.min,
        			'chart.yellow.color' : '#D0AC41',
        			'chart.red.start' : this.min,
        			'chart.red.end' : ((this.max - this.min) * 0.1) + this.min,
        			'chart.red.color' : '#9E1E1E',
        			'chart.colors.ranges' : null,
        			'chart.units.pre' : '',
        			'chart.units.post' : '',
        			'chart.contextmenu' : null,
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
        			'chart.annotatable' : false,
        			'chart.annotate.color' : 'black',
        			'chart.shadow' : false,
        			'chart.shadow.color' : [0, 0, 0, 0.5],
        			'chart.shadow.blur' : 3,
        			'chart.shadow.offsetx' : 3,
        			'chart.shadow.offsety' : 3,
        			'chart.resizable' : false,
        			'chart.resize.handle.adjust' : [0, 0],
        			'chart.resize.handle.background' : null,
        			'chart.tickmarks.small.num' : 100,
        			'chart.tickmarks.big.num' : 10,
        			'chart.tickmarks.small.color' : '#bbbbbb',
        			'chart.tickmarks.big.color' : 'black',
        			'chart.scale.decimals' : 0,
        			'chart.scale.point' : '.',
        			'chart.scale.thousand' : ',',
        			'chart.radius' : null,
        			'chart.centerx' : null,
        			'chart.centery' : null,
        			'chart.labels' : true,
        			'chart.labels.count' : 10,
        			'chart.labels.specific' : null,
        			'chart.segment.radius.start' : 0,
        			'chart.needle.radius' : null,
        			'chart.needle.tail' : false,
        			'chart.needle.head' : true,
        			'chart.needle.color' : 'black',
        			'chart.needle.image.url' : null,
        			'chart.needle.image.offsetx' : 0,
        			'chart.needle.image.offsety' : 0,
        			'chart.adjustable' : false,
        			'chart.angles.start' : RG.PI,
        			'chart.angles.end' : RG.TWOPI,
        			'chart.centerpin.stroke' : 'black',
        			'chart.centerpin.fill' : 'white',
        			'chart.clearto' : [0, 0, 0, 0]
        		};


        		// Check for support
        		if (!this.canvas)
        		{
        			alert('[METER] No canvas support');
        			return;
        		}

        		/*
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
        		 * A setter
        		 *
        		 * @param name  string The name of the property to set
        		 * @param value mixed  The value of the property
        		 */
        		this.set =
        			this.Set = function (name)
        		{
        			var value = arguments[1] || null;

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


        			if (name == 'chart.value')
        			{
        				this.value = value;
        				return;
        			}
        			prop[name] = value;

        			return this;
        		};

        		/**
        		 * A getter
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

        			if (name == 'chart.value')
        			{
        				return this.value;
        			}

        			return prop[name];
        		};

        		/**
        		 * The function you call to draw the bar chart
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
        			if (RG.ISIE8)
        			{
        				this.set("segment.radius.start", 0);
        				this.set("angles.start", RG.PI);
        				this.set("angles.end", RG.TWOPI);
        				this.set("needle.radius", null);
        				this.set("colors.ranges", null);
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
        			 * Constrain the value to be within the min and max
        			 */
        			if (this.value > this.max)
        			{
        				this.value = this.max;
        			}
        			if (this.value < this.min)
        			{
        				this.value = this.min;
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

        			this.centerx = ((ca.width - this.gutterLeft - this.gutterRight) / 2) + this.gutterLeft;
        			this.centery = ca.height - this.gutterBottom;
        			this.radius = Math.min(
        				(ca.width - this.gutterLeft - this.gutterRight) / 2,
        				(ca.height - this.gutterTop - this.gutterBottom)
        			);

        			/**
        			 * Stop this growing uncontrollably
        			 */
        			this.coordsText = [];

        			/**
        			 * Custom centerx, centery and radius
        			 */
        			if (typeof (prop["chart.centerx"]) == 'number')
        			{
        				this.centerx = prop["chart.centerx"];
        			}
        			if (typeof (prop["chart.centery"]) == 'number')
        			{
        				this.centery = prop["chart.centery"];
        			}
        			if (typeof (prop["chart.radius"]) == 'number')
        			{
        				this.radius = prop["chart.radius"];
        			}


        			/**
        			 * Parse the colors for gradients. Its down here so that the center X/Y can be used
        			 */
        			if (!this.colorsParsed)
        			{
        				this.parseColors();

        				// Don't want to do this again
        				this.colorsParsed = true;
        			}
        			this.drawBackground();
        			this.drawLabels();
        			this.drawNeedle();
        			this.drawReadout();

        			/**
        			 * Draw the title
        			 */
        			RG.DrawTitle(this, prop["chart.title"], this.gutterTop, null, prop["chart.title.size"] ? prop["chart.title.size"] : prop["chart.text.size"] + 2);

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
        		 * Draws the background of the chart
        		 */
        		this.drawBackground =
        			this.DrawBackground = function ()
        		{
        			/**
        			 * Draw the white background
        			 */
        			co.beginPath();

        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			if (prop["chart.shadow"])
        			{
        				RG.SetShadow(this, prop["chart.shadow.color"], prop["chart.shadow.offsetx"], prop["chart.shadow.offsety"], prop["chart.shadow.blur"]);
        			}
        			co.moveTo(this.centerx, this.centery);
        			co.arc(this.centerx,
        				this.centery,
        				this.radius,
        				prop["chart.angles.start"],
        				prop["chart.angles.end"],
        				false);

        			co.fill();

        			RG.NoShadow(this);

        			// Draw the shadow
        			if (prop["chart.shadow"])
        			{
        				co.beginPath();
        				var r = (this.radius * 0.06) > 40 ? 40 : (this.radius * 0.06);
        				co.arc(this.centerx, this.centery, r, 0, RG.TWOPI, 0);
        				co.fill();

        				RG.NoShadow(this);
        			}

        			// First, draw the grey tickmarks
        			if (prop["chart.tickmarks.small.num"])
        			{
        				for (var i = 0; i < (prop["chart.angles.end"] - prop["chart.angles.start"]); i += (RG.PI / prop["chart.tickmarks.small.num"]))
        				{
        					co.beginPath();
        					co.strokeStyle = prop["chart.tickmarks.small.color"];
        					RG.setElementCommonStyle(co, co.strokeStyle, 2);
        					co.arc(this.centerx, this.centery, this.radius, prop["chart.angles.start"] + i, prop["chart.angles.start"] + i + 0.00001, 0);
        					co.arc(this.centerx, this.centery, this.radius - 5, prop["chart.angles.start"] + i, prop["chart.angles.start"] + i + 0.00001, 0);
        					co.stroke();
        				}

        				// Draw the semi-circle that makes the tickmarks
        				co.beginPath();
        				co.fillStyle = prop["chart.background.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.arc(this.centerx, this.centery, this.radius - 4, prop["chart.angles.start"], prop["chart.angles.end"], false);
        				co.closePath();
        				co.fill();
        			}

        			// Second, draw the darker tickmarks. First run draws them in white to get rid of the existing tickmark,
        			// then the second run draws them in the requested color


        			if (prop["chart.tickmarks.big.num"])
        			{
        				var colors = ['white', 'white', prop["chart.tickmarks.big.color"]];
        				for (var j = 0; j < colors.length; ++j)
        				{
        					for (var i = 0; i < (prop["chart.angles.end"] - prop["chart.angles.start"]); i += ((prop["chart.angles.end"] - prop["chart.angles.start"]) / prop["chart.tickmarks.big.num"]))
        					{
        						co.beginPath();
        						co.strokeStyle = colors[j];
        						RG.setElementCommonStyle(co, co.strokeStyle, 2);
        						co.arc(this.centerx, this.centery, this.radius, prop["chart.angles.start"] + i, prop["chart.angles.start"] + i + 0.001, 0);
        						co.arc(this.centerx, this.centery, this.radius - 5, prop["chart.angles.start"] + i, prop["chart.angles.start"] + i + 0.0001, 0);
        						co.stroke();
        					}
        				}
        			}
        			// Draw the white circle that makes the tickmarks
        			co.beginPath();
        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.moveTo(this.centerx, this.centery);
        			co.arc(this.centerx, this.centery, this.radius - 7, prop["chart.angles.start"], prop["chart.angles.end"], false);
        			co.closePath();
        			co.fill();
        			/**
        			 * Color ranges - either green/yellow/red or an arbitrary number of ranges
        			 */
        			var ranges = prop["chart.colors.ranges"];

        			if (RG.is_array(prop["chart.colors.ranges"]))
        			{
        				var ranges = prop["chart.colors.ranges"];
        				var col;
        				for (var i = 0; i < ranges.length; ++i)
        				{
        					co.strokeStyle = col = prop["chart.strokestyle"] ? prop["chart.strokestyle"] : ranges[i][2];
        					RG.setElementCommonStyle(co, co.strokeStyle, 2);
        					co.fillStyle = ranges[i][2];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);
        					co.lineWidth = prop["chart.linewidth.segments"];
        					co.setElementLineWidth(co.lineWidth);

        					co.beginPath();
        					co.arc(this.centerx,
        						this.centery,
        						this.radius * 0.85,
        						(((ranges[i][0] - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        						(((ranges[i][1] - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        						false);
        					if (prop["chart.segment.radius.start"] > 0)
        					{
        						co.lineTo(this.centerx, this.centery);
        						co.closePath();
        						co.stroke();
        						co.fill();

        						co.strokeStyle = prop["chart.background.color"];
        						RG.setElementCommonStyle(co, co.fillStyle, 2);
        						co.fillStyle = prop["chart.background.color"];
        						RG.setElementCommonStyle(co, co.fillStyle, 1);

        						co.beginPath();
        						co.arc(this.centerx,
        							this.centery,
        							prop["chart.segment.radius.start"],
        							((((ranges[i][1] + 2) - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        							((((ranges[i][0] - 2) - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        							true);
        						co.lineTo(this.centerx, this.centery);
        						co.closePath();
        						co.fill();
        					}
        					else
        					{
        						co.lineTo(this.centerx, this.centery);
        						co.closePath();
        						co.stroke();
        						co.fill();
        					}
        				}
        				// Stops the last line from being changed to a big linewidth.
        				co.beginPath();
        			}
        			else
        			{
        				var col;
        				co.lineWidth = prop["chart.linewidth"];
        				co.setElementLineWidth(co.lineWidth);

        				// Draw the green area
        				co.strokeStyle = col = prop["chart.strokestyle"] ? prop["chart.strokestyle"] : prop["chart.green.color"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.fillStyle = prop["chart.green.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.lineWidth = prop["chart.linewidth.segments"];
        				co.setElementLineWidth(co.lineWidth);

        				if (RG.ISIE8)
        				{
        					co.moveTo(this.centerx, this.centery);
        				}
        				co.beginPath();
        				co.arc(this.centerx,
        					this.centery,
        					this.radius * 0.85,
        					(((prop["chart.green.start"] - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - this.properties["chart.angles.start"])) + prop["chart.angles.start"],
        					(((prop["chart.green.end"] - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        					false);

        				if (prop["chart.segment.radius.start"] > 0)
        				{
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.fill();
        					co.stroke();
        					alert('k');
        					co.fillStyle = prop["chart.background.color"];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);

        					co.beginPath();
        					co.arc(this.centerx,
        						this.centery,
        						prop["chart.segment.radius.start"],
        						((((prop["chart.green.end"] + 2) - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        						((((prop["chart.green.start"] - 2) - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        						true);
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.fill();
        					alert(2);
        				}
        				else
        				{
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.stroke();
        					co.fill();
        				}
        				// Draw the yellow area
        				co.strokeStyle = col = prop["chart.strokestyle"] ? prop["chart.strokestyle"] : prop["chart.yellow.color"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.fillStyle = prop["chart.yellow.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.lineWidth = prop["chart.linewidth.segments"];
        				co.setElementLineWidth(co.lineWidth);
        				co.beginPath();
        				co.arc(this.centerx,
        					this.centery,
        					this.radius * 0.85,
        					(((prop["chart.yellow.start"] - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        					(((prop["chart.yellow.end"] - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        					false);
        				if (prop["chart.segment.radius.start"] > 0)
        				{
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.fill();
        					co.stroke();

        					co.fillStyle = prop["chart.background.color"];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);

        					co.beginPath();
        					co.arc(this.centerx,
        						this.centery,
        						prop["chart.segment.radius.start"],
        						((((prop["chart.yellow.end"] + 2) - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        						((((prop["chart.yellow.start"] - 2) - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        						true);
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.fill();
        				}
        				else
        				{
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.stroke();
        					co.fill();
        				}
        				// Draw the red area
        				co.strokeStyle = col = prop["chart.strokestyle"] ? prop["chart.strokestyle"] : prop["chart.red.color"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.fillStyle = prop["chart.red.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.lineWidth = prop["chart.linewidth.segments"];
        				co.setElementLineWidth(co.lineWidth);

        				co.beginPath();
        				co.arc(this.centerx,
        					this.centery, this.radius * 0.85,
        					(((prop["chart.red.start"] - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        					(((prop["chart.red.end"] - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        					false);
        				if (prop["chart.segment.radius.start"] > 0)
        				{
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.fill();
        					co.stroke();
        					co.fillStyle = prop["chart.background.color"];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);

        					co.beginPath();
        					co.arc(this.centerx,
        						this.centery,
        						prop["chart.segment.radius.start"],
        						((((prop["chart.red.end"] + 2) - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        						((((prop["chart.red.start"] - 2) - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"],
        						true);
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.fill();
        				}
        				else
        				{
        					co.lineTo(this.centerx, this.centery);
        					co.closePath();
        					co.stroke();
        					co.fill();
        				}

        				// Revert the linewidth
        				co.lineWidth = 1;
        				co.setElementLineWidth(co.lineWidth);
        			}
        			// Draw the outline
        			if (prop["chart.border"])
        			{
        				co.strokeStyle = prop["chart.border.color"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.lineWidth = prop["chart.linewidth"];
        				co.setElementLineWidth(co.lineWidth);

        				co.beginPath();
        				co.moveTo(this.centerx, this.centery);
        				co.arc(this.centerx,
        					this.centery,
        					this.radius,
        					prop["chart.angles.start"],
        					prop["chart.angles.end"],
        					false);
        				co.closePath();
        				co.stroke();
        			}

        			// Reset the linewidth back to 1
        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);
        		};


        		/**
        		 * Draws the pointer
        		 */
        		this.drawNeedle =
        			this.DrawNeedle = function ()
        		{
        			/**
        			 * The angle that the needle is at
        			 */
        			var a = (((this.value - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"];

        			// Allow customising the needle radius
        			var needleRadius = typeof (prop["chart.needle.radius"]) == 'number' ? prop["chart.needle.radius"] : (this.radius * 0.70);

        			// First draw the circle at the bottom
        			co.fillStyle = 'black';
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.lineWidth = this.radius >= 200 ? 7 : 3;
        			co.setElementLineWidth(co.lineWidth);
        			co.lineCap = 'round';
        			co.setElementLineCap(co.lineCap);

        			// Now, draw the arm of the needle
        			if (RG.ISIE8)
        			{
        				co.beginPath();
        				co.strokeStyle = prop["chart.needle.color"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 1);
        				if (typeof (prop["chart.needle.linewidth"]) == 'number')
        				{
        					co.lineWidth = prop["chart.needle.linewidth"];
        					co.setElementLineWidth(co.lineWidth);
        				}
        				co.arc(this.centerx, this.centery, (this.radius * 0.65), a, a + 0.001, false);
        				co.stroke();
        				co.lineTo(this.centerx, this.centery);
        				co.closePath();
        				co.stroke();
        			}
        			else
        			{
        				co.beginPath();
        				co.strokeStyle = prop["chart.needle.color"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				if (typeof (prop["chart.needle.linewidth"]) == 'number')
        				{
        					co.lineWidth = prop["chart.needle.linewidth"];
        					co.setElementLineWidth(co.lineWidth);
        				}

        				co.arc(this.centerx, this.centery, needleRadius, a, a + 0.001, false);
        				co.lineTo(this.centerx, this.centery);
        				co.stroke();
        			}
        			// Draw the triangular needle head
        			if (prop["chart.needle.head"])
        			{
        				if (RG.ISIE8)
        				{
        				}
        				else
        				{
        					co.fillStyle = prop["chart.needle.color"];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);
        					co.beginPath();
        					co.lineWidth = 1;
        					co.setElementLineWidth(co.lineWidth);
        					// co.moveTo(this.centerx, this.centery);
        					co.arc(this.centerx, this.centery, needleRadius + 15, a, a + 0.001, 0);
        					co.arc(this.centerx, this.centery, needleRadius - 15, a + 0.087, a + 0.087999, 0);
        					co.arc(this.centerx, this.centery, needleRadius - 15, a - 0.087, a - 0.087999, 1);
        					co.fill();
        				}
        			}
        			// Draw the tail if requested
        			if (prop["chart.needle.tail"])
        			{
        				if (RG.ISIE8)
        				{
        				}
        				else
        				{
        					co.beginPath();
        					co.strokeStyle = prop["chart.needle.color"];
        					RG.setElementCommonStyle(co, co.strokeStyle, 2);
        					if (typeof (prop["chart.needle.linewidth"]) == 'number')
        					{
        						co.lineWidth = prop["chart.needle.linewidth"];
        						co.setElementLineWidth(co.lineWidth);
        					}

        					var a = ((this.value - this.min) / (this.max - this.min) * (this.properties["chart.angles.end"] - this.properties["chart.angles.start"])) + this.properties["chart.angles.start"] + RG.PI;
        					co.arc(this.centerx, this.centery, 25, a, a + 0.001, false);
        					co.lineTo(this.centerx, this.centery);
        					co.stroke();
        				}
        			}
        			// Draw the center circle (the stroke)
        			var r = (this.radius * 0.06) > 40 ? 40 : (this.radius * 0.06);

        			co.beginPath();
        			co.fillStyle = prop["chart.centerpin.stroke"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, r, 0 + 0.001, RG.TWOPI, 0);
        			co.fill();
        			// Draw the centre bit of the circle (the fill)
        			co.fillStyle = prop["chart.centerpin.fill"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.beginPath();
        			co.arc(this.centerx, this.centery, r - 2, 0 + 0.001, RG.TWOPI, 0);
        			co.fill();
        		};




        		/**
        		 * Draws the labels
        		 */
        		this.drawLabels =
        			this.DrawLabels = function ()
        		{
        			if (!prop["chart.labels"])
        			{
        				return;
        			}

        			var radius = this.radius,text_size = prop["chart.text.size"],text_font = prop["chart.text.font"],units_post = prop["chart.units.post"],units_pre = prop["chart.units.pre"],centerx = this.centerx,centery = this.centery,min = this.min,max = this.max,decimals = prop["chart.scale.decimals"],numLabels = prop["chart.labels.count"],specific = prop["chart.labels.specific"];




        			//
        			// Draw the specific labels if they're specifid
        			//
        			if (specific)
        			{
        				for (var i = 0; i < specific.length; ++i)
        				{
        					var angle = this.getAngle(specific[i][1]),angle_degrees = angle * (180 / RG.PI),text = specific[i][0].toString(),coords = RG.getRadiusEndPoint(this.centerx, this.centery, angle, this.radius * 0.925);


        					RG.text2(this, {
        						'font' : text_font,
        						'size' : text_size,
        						'x' : coords[0],
        						'y' : coords[1],
        						'text' : text,
        						'halign' : 'center',
        						'valign' : 'center',
        						'angle' : angle_degrees + 90,
        						'bounding' : false,
        						'tag' : 'labels-specific',
        						color : 'black'
        					});
        				}

        				return;
        			}




        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);

        			co.beginPath();

        			for (var i = 0; i <= numLabels; ++i)
        			{
        				var angle = ((prop["chart.angles.end"] - prop["chart.angles.start"]) * (i / numLabels)) + prop["chart.angles.start"];
        				var coords = RG.getRadiusEndPoint(centerx, centery, angle + (((i == 0 || i == numLabels) && prop["chart.border"]) ? (i == 0 ? 0.05 : -0.05) : 0), (this.radius * 0.925) - (prop["chart.text.valign"] === 'bottom' ? 15 : 0));

        				var angleStart = prop["chart.angles.start"],angleEnd = prop["chart.angles.end"],angleRange = angleEnd - angleStart,angleStart_degrees = angleStart * (180 / RG.PI),angleEnd_degrees = angleEnd * (180 / RG.PI),angleRange_degrees = angleRange * (180 / RG.PI);

        				// Vertical alignment
        				valign = prop["chart.text.valign"];

        				// Horizontal alignment
        				if (prop["chart.border"])
        				{
        					if (i == 0)
        					{
        						halign = 'left';
        					}
        					else if (i == numLabels)
        					{
        						halign = 'right';
        					}
        					else
        					{
        						halign = 'center';
        					}
        				}
        				else
        				{
        					halign = 'center';
        				}

        				var value = ((this.max - this.min) * (i / numLabels)) + this.min;

        				RG.text2(this, {
        					'font' : text_font,
        					'size' : text_size,
        					'x' : coords[0],
        					'y' : coords[1],
        					'text' : RG.numberFormat(this, (value).toFixed(value === 0 ? 0 : decimals), units_pre, units_post),
        					'halign' : halign,
        					'valign' : valign,
        					'angle' : ((angleRange_degrees * (1 / numLabels) * i) + angleStart_degrees) - 270,
        					'bounding' : false,
        					'boundingFill' : (i == 0 || i == numLabels) ? 'white' : null,
        					'tag' : 'scale'
        				});
        			}
        		};




        		/**
        		 * This function draws the text readout if specified
        		 */
        		this.drawReadout =
        			this.DrawReadout = function ()
        		{
        			if (prop["chart.value.text"])
        			{
        				co.beginPath();
        				co.fillStyle = prop["chart.text.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				RG.Text2(this, {
        					'font' : prop["chart.text.font"],
        					'size' : prop["chart.text.size"],
        					'x' : this.centerx,
        					'y' : this.centery - prop["chart.text.size"] - 15,
        					'text' : prop["chart.value.text.units.pre"] + (this.value).toFixed(prop["chart.value.text.decimals"]) + prop["chart.value.text.units.post"],
        					'halign' : 'center',
        					'valign' : 'bottom',
        					'bounding' : RG.ISIE8 ? false : true,
        					'boundingFill' : 'white',
        					'tag' : 'value.text'
        				});

        				co.stroke();
        				co.fill();
        			}
        		};

        		/**
        		 * A placeholder function
        		 *
        		 * @param object The event object
        		 */
        		this.getShape = function (e)
        		{
        		};

        		/**
        		 * This function returns the pertinent value for a particular click (or other mouse event)
        		 *
        		 * @param obj e The event object
        		 */
        		this.getValue = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e);
        			var angle = RG.getAngleByXY(this.centerx, this.centery, mouseXY[0], mouseXY[1]);

        			// Work out the radius
        			var radius = RG.getHypLength(this.centerx, this.centery, mouseXY[0], mouseXY[1]);
        			if (radius > this.radius)
        			{
        				return null;
        			}

        			if (angle < RG.HALFPI)
        			{
        				angle += RG.TWOPI;
        			}

        			var value = (((angle - prop["chart.angles.start"]) / (prop["chart.angles.end"] - prop["chart.angles.start"])) * (this.max - this.min)) + this.min;

        			value = Math.max(value, this.min);
        			value = Math.min(value, this.max);

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

        			// Work out the radius
        			var radius = RG.getHypLength(this.centerx, this.centery, mouseXY[0], mouseXY[1]);

        			if (mouseXY[0] > (this.centerx - this.radius)
        				 && mouseXY[0] < (this.centerx + this.radius)
        				 && mouseXY[1] > (this.centery - this.radius)
        				 && mouseXY[1] < (this.centery + this.radius)
        				 && radius <= this.radius)
        			{
        				return this;
        			}
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
        			 * Handle adjusting for the Bar
        			 */
        			if (prop["chart.adjustable"] && RG.Registry.Get('chart.adjusting') && RG.Registry.Get('chart.adjusting').uid == this.uid)
        			{
        				this.value = this.getValue(e);
        				RG.clear(this.canvas);
        				RG.redrawCanvas(this.canvas);
        				RG.fireCustomEvent(this, 'onadjust');
        			}
        		};

        		/**
        		 * This method returns the appropriate angle for a value
        		 *
        		 * @param number value The value
        		 */
        		this.getAngle = function (value)
        		{
        			// Higher than max
        			if (value > this.max || value < this.min)
        			{
        				return null;
        			}

        			var angle = (((value - this.min) / (this.max - this.min)) * (prop["chart.angles.end"] - prop["chart.angles.start"])) + prop["chart.angles.start"];

        			return angle;
        		};

        		/**
        		 * This allows for easy specification of gradients
        		 */
        		this.parseColors = function ()
        		{
        			// Save the original colors so that they can be restored when the canvas is reset
        			if (this.original_colors.length === 0)
        			{
        				this.original_colors["chart.green.color"] = RG.array_clone(prop["chart.green.color"]);
        				this.original_colors["chart.yellow.color"] = RG.array_clone(prop["chart.yellow.color"]);
        				this.original_colors["chart.red.color"] = RG.array_clone(prop["chart.red.color"]);
        				this.original_colors["chart.colors.ranges"] = RG.array_clone(prop["chart.colors.ranges"]);
        			}

        			// Parse the basic colors
        			prop["chart.green.color"] = this.parseSingleColorForGradient(prop["chart.green.color"]);
        			prop["chart.yellow.color"] = this.parseSingleColorForGradient(prop["chart.yellow.color"]);
        			prop["chart.red.color"] = this.parseSingleColorForGradient(prop["chart.red.color"]);

        			// Parse chart.colors.ranges
        			var ranges = prop["chart.colors.ranges"];
        			if (ranges && ranges.length)
        			{
        				for (var i = 0; i < ranges.length; ++i)
        				{
        					ranges[i][2] = this.parseSingleColorForGradient(ranges[i][2]);
        				}
        			}
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
        				// Create the gradient
        				grad = RG.createRadialGradient(co, this.centerx, this.centery, prop["chart.segment.radius.start"], this.centerx, this.centery, this.radius * 0.85, color);
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




        		/**
        		 * This function runs once only
        		 * (put at the end of the file (before any effects))
        		 */
        		this.firstDrawFunc = function ()
        		{
        		};




        		/**
        		 * Meter Grow
        		 *
        		 * This effect gradually increases the represented value
        		 *
        		 * @param              An object of options - eg: {frames: 60}
        		 * @param function     An optional callback function
        		 */
        		this.grow = function ()
        		{
        			var obj = this;

        			obj.currentValue = obj.currentValue || obj.min;

        			var opt = arguments[0] || {
        			};
        			var frames = opt.frames || 10;
        			var frame = 0;
        			var diff = obj.value - obj.currentValue;
        			var step = diff / frames;
        			var callback = arguments[1] || function ()
        			{
        			};
        			var initial = obj.currentValue;

        			if (RG.ISIE8)
        			{
        				this.draw();
        				callback(obj);
        				return;
        			}


        			function iterator ()
        			{
        				obj.value = initial + (frame++ * step);
        				RG.effectCanvasShow(obj.canvas, true);
        				RG.clear(obj.canvas);
        				RG.redrawCanvas(obj.canvas);
        				RG.effectCanvasShow(obj.canvas, false, 20);

        				if (frame <= frames)
        				{
        					RG.Effects_updateCanvas(iterator);
        				}
        				else
        				{
        					callback(obj);
        				}
        			}

        			iterator();

        			return this;
        		};

        		RG.att(ca);

        		/**
        		 * Register the object
        		 */
        		RG.register(this);

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
