//XJS=RGraph.gauge.xjs
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
        if (!nexacro.RGraph.Gauge)
        {
        	/**
        	 * The line chart constructor
        	 *
        	 * @param object canvas The canvas ID
        	 * @param array  data   The chart data
        	 * @param array  ...    Other lines to plot
        	 */
        	nexacro.RGraph.Gauge = function (conf)
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
        		var min = conf.min;
        		var max = conf.max;
        		var value = conf.value;
        		var parseConfObjectForOptions = true;
        		this.canvas.__object__ = this;
        		this.type = 'gauge';
        		this.min = RG.stringsToNumbers(min);
        		this.max = RG.stringsToNumbers(max);
        		this.value = RG.stringsToNumbers(value);
        		this.isRGraph = true;
        		this.currentValue = null;
        		this.uid = RG.CreateUID();
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();
        		this.colorsParsed = false;
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		/**
        		 * Range checking
        		 */
        		if (typeof (this.value) == 'object')
        		{
        			for (var i = 0; i < this.value.length; ++i)
        			{
        				if (this.value[i] > this.max)
        				{
        					this.value[i] = max;
        				}
        				if (this.value[i] < this.min)
        				{
        					this.value[i] = min;
        				}
        			}
        		}
        		else
        		{
        			if (this.value > this.max)
        			{
        				this.value = max;
        			}
        			if (this.value < this.min)
        			{
        				this.value = min;
        			}
        		}



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

        			'chart.angles.start' : null,
        			'chart.angles.end' : null,
        			'chart.centerx' : null,
        			'chart.centery' : null,
        			'chart.radius' : null,
        			'chart.gutter.left' : 15,
        			'chart.gutter.right' : 15,
        			'chart.gutter.top' : 15,
        			'chart.gutter.bottom' : 15,
        			'chart.border.width' : 10,
        			'chart.title.top' : '',
        			'chart.title.top.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.title.top.size' : 14,
        			'chart.title.top.italic' : false,
        			'chart.title.top.color' : '#333333',
        			'chart.title.top.bold' : false,
        			'chart.title.top.pos' : null,
        			'chart.title.bottom' : '',
        			'chart.title.bottom.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.title.bottom.size' : 14,
        			'chart.title.bottom.italic' : false,
        			'chart.title.bottom.color' : '#333333',
        			'chart.title.bottom.bold' : false,
        			'chart.title.bottom.pos' : null,
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.color' : '#666666',
        			'chart.text.size' : 12,
        			'chart.text.accessible' : true,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.background.color' : 'white',
        			'chart.background.gradient' : false,
        			'chart.scale.decimals' : 0,
        			'chart.scale.point' : '.',
        			'chart.scale.thousand' : ',',
        			'chart.units.pre' : '',
        			'chart.units.post' : '',

        			'chart.value.text' : false,
        			'chart.value.text.y.pos' : 0.5,
        			'chart.value.text.units.pre' : null,
        			'chart.value.text.units.post' : null,
        			'chart.value.text.color' : 'black',
        			'chart.value.text.bounding' : true,
        			'chart.value.text.bounding.fill' : 'white',
        			'chart.value.text.bounding.stroke' : 'black',

        			'chart.red.start' : 0.9 * this.max,
        			'chart.red.color' : '#DC3912',
        			'chart.red.width' : 10,
        			'chart.yellow.color' : '#FF9900',
        			'chart.yellow.width' : 10,
        			'chart.green.end' : 0.7 * this.max,
        			'chart.green.color' : [0, 0, 0, 0],
        			'chart.green.width' : 10,
        			'chart.colors.ranges' : null,
        			'chart.colors.ranges.width' : 10,
        			'chart.needle.size' : null,
        			'chart.needle.tail' : false,
        			'chart.needle.colors' : ['#D5604D', 'red', 'green', 'yellow'],
        			'chart.needle.type' : 'triangle',
        			'chart.needle.width' : 7,
        			'chart.border.outer' : '#cccccc',
        			'chart.border.inner' : '#f1f1f1',
        			'chart.border.outline' : 'black',
        			'chart.centerpin.color' : 'blue',
        			'chart.centerpin.radius' : null,
        			'chart.zoom.background' : true,
        			'chart.zoom.action' : 'zoom',
        			'chart.tickmarks.small' : 25,
        			'chart.tickmarks.small.color' : 'black',
        			'chart.tickmarks.medium' : 0,
        			'chart.tickmarks.medium.color' : 'black',
        			'chart.tickmarks.big' : 5,
        			'chart.tickmarks.big.color' : 'black',
        			'chart.labels.count' : 5,
        			'chart.labels.centered' : false,
        			'chart.labels.offset.radius' : 0,
        			'chart.labels.offset.angle' : 0,
        			'chart.labels.specific' : null,
        			'chart.labels.offsetx' : 0,
        			'chart.labels.offsety' : 0,

        			'chart.border.gradient' : false,
        			'chart.adjustable' : false,
        			'chart.shadow' : true,
        			'chart.shadow.color' : 'gray',
        			'chart.shadow.offsetx' : 0,
        			'chart.shadow.offsety' : 0,
        			'chart.shadow.blur' : 15,
        			'chart.clearto' : [0, 0, 0, 0]
        		};

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
        		 * An all encompassing accessor
        		 *
        		 * @param string name The name of the property
        		 * @param mixed value The value of the property
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

        			/**
        			 * Title compatibility
        			 */
        			if (name == 'chart.title')
        			{
        				name = 'chart.title.top';
        			}
        			if (name == 'chart.title.font')
        			{
        				name = 'chart.title.top.font';
        			}
        			if (name == 'chart.title.size')
        			{
        				name = 'chart.title.top.size';
        			}
        			if (name == 'chart.title.color')
        			{
        				name = 'chart.title.top.color';
        			}
        			if (name == 'chart.title.bold')
        			{
        				name = 'chart.title.top.bold';
        			}

        			// BC
        			if (name == 'chart.needle.color')
        			{
        				name = 'chart.needle.colors';
        			}

        			// name change
        			if (name == 'chart.labels.offset')
        			{
        				name = 'chart.labels.offset.radius';
        			}

        			prop[name] = value;

        			return this;
        		};




        		/**
        		 * An all encompassing accessor
        		 *
        		 * @param string name The name of the property
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

        			// BC
        			if (name == 'chart.needle.color')
        			{
        				name = 'chart.needle.colors';
        			}

        			// name change
        			if (name == 'chart.labels.offset')
        			{
        				name = 'chart.labels.offset.radius';
        			}

        			return prop[name];
        		};




        		/**
        		 * The function you call to draw the line chart
        		 *
        		 * @param bool An optional bool used internally to ditinguish whether the
        		 *             line chart is being called by the bar chart
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
        			if (RG.ISIE8)
        			{
        				this.set("chart.shadow", false);
        				this.set("chart.needle.type", "line");
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
        			 * Store the value (for animation primarily
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
        			this.centery = ((ca.height - this.gutterTop - this.gutterBottom) / 2) + this.gutterTop;
        			this.radius = Math.min(
        				((ca.width - this.gutterLeft - this.gutterRight) / 2),
        				((ca.height - this.gutterTop - this.gutterBottom) / 2)
        			);
        			this.startAngle = prop["chart.angles.start"] ? prop["chart.angles.start"] : (RG.HALFPI / 3) + RG.HALFPI;
        			this.endAngle = prop["chart.angles.end"] ? prop["chart.angles.end"] : RG.TWOPI + RG.HALFPI - (RG.HALFPI / 3);

        			/**
        			 * Reset this so it doesn't keep growing
        			 */
        			this.coordsText = [];

        			/**
        			 * You can now override the positioning and radius if you so wish.
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
        			 * Parse the colors. This allows for simple gradient syntax
        			 */
        			if (!this.colorsParsed)
        			{
        				this.parseColors();

        				// Don't want to do this again
        				this.colorsParsed = true;
        			}

        			// This has to be in the constructor
        			this.centerpinRadius = 0.16 * this.radius;

        			if (typeof (prop["chart.centerpin.radius"]) == 'number')
        			{
        				this.centerpinRadius = prop["chart.centerpin.radius"];
        			}
        			/**
        			 * Setup the context menu if required
        			 */
        			if (prop["chart.contextmenu"])
        			{
        				RG.ShowContext(this);
        			}

        			// DRAW THE CHART HERE
        			this.DrawBackGround();
        			this.DrawGradient();
        			this.DrawColorBands();
        			this.DrawSmallTickmarks();
        			this.DrawMediumTickmarks();
        			this.DrawBigTickmarks();
        			this.DrawLabels();
        			this.DrawTopTitle();
        			this.DrawBottomTitle();

        			if (typeof (this.value) == 'object')
        			{
        				for (var i = 0; i < this.value.length; ++i)
        				{
        					this.DrawNeedle(this.value[i], prop["chart.needle.colors"][i], i);
        				}
        			}
        			else
        			{
        				this.DrawNeedle(this.value, prop["chart.needle.colors"][0], 0);
        			}

        			this.DrawCenterpin();
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
        		 * Draw the background
        		 */
        		this.drawBackGround =
        			this.DrawBackGround = function ()
        		{
        			// Shadow //////////////////////////////////////////////
        			if (prop["chart.shadow"])
        			{
        				RG.SetShadow(this, prop["chart.shadow.color"], prop["chart.shadow.offsetx"], prop["chart.shadow.offsety"], prop["chart.shadow.blur"]);
        			}

        			co.beginPath();
        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			// co.moveTo(this.centerx, this.centery)
        			co.arc(this.centerx, this.centery, this.radius, 0, RG.TWOPI, 0);
        			co.fill();

        			// Turn off the shadow
        			RG.NoShadow(this);
        			// Shadow //////////////////////////////////////////////


        			var grad = "gradient(#eeeeee:white)";
        			RG.createRadialGradient(co, this.centerx + 50, this.centery - 50, 0, this.centerx + 50, this.centery - 50, 150, grad);
        			var borderWidth = prop["chart.border.width"];
        			co.beginPath();
        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.radius, 0, RG.TWOPI, 0);
        			co.fill();

        			/**
        			 * Draw the gray circle
        			 */
        			co.beginPath();
        			co.fillStyle = prop["chart.border.outer"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.radius, 0, RG.TWOPI, 0);
        			co.fill();

        			/**
        			 * Draw the light gray inner border
        			 */
        			co.beginPath();
        			co.fillStyle = prop["chart.border.inner"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.radius - borderWidth, 0, RG.TWOPI, 0);
        			co.fill();

        			// Draw the white circle inner border
        			co.beginPath();
        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.radius - borderWidth - 4, 0, RG.TWOPI, 0);
        			co.fill();

        			// Draw the circle background. Can be any colour now.
        			co.beginPath();
        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.radius - borderWidth - 4, 0, RG.TWOPI, 0);
        			co.fill();

        			if (prop["chart.background.gradient"])
        			{
        				// Draw a partially transparent gradient that sits on top of the background
        				co.beginPath();
        				var grd = "gradient(#ffffff66;#ffffff11)";
        				co.fillStyle = RG.createRadialGradient(co,
        					this.centerx,
        					this.centery,
        					0,
        					this.centerx,
        					this.centery,
        					this.radius,
        					grd);
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.arc(this.centerx, this.centery, this.radius - borderWidth - 4, 0, RG.TWOPI, 0);
        				co.fill();
        			}
        			// Draw a black border around the chart
        			co.beginPath();
        			co.strokeStyle = prop["chart.border.outline"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.arc(this.centerx, this.centery, this.radius, 0, RG.TWOPI, 0);
        			co.stroke();
        		};

        		/**
        		 * This function draws the smaller tickmarks
        		 */
        		this.drawSmallTickmarks =
        			this.DrawSmallTickmarks = function ()
        		{
        			var numTicks = prop["chart.tickmarks.small"];
        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);

        			var r = this.radius - prop["chart.border.width"] - 10;
        			var cc = prop["chart.tickmarks.small.color"];
        			co.strokeStyle = cc;
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			for (var i = 0; i <= numTicks; ++i)
        			{
        				var a = (((this.endAngle - this.startAngle) / numTicks) * i) + this.startAngle;
        				var b = a + 0.00001;
        				co.beginPath();
        				co.arc(this.centerx, this.centery, r, a, b, 0);
        				co.arc(this.centerx, this.centery, r - 5, a, b, 0);
        				co.stroke();
        			}
        			/*
        			 for (var i=0; i<=numTicks; ++i) {
        			 co.beginPath();
        			 co.strokeStyle = prop['chart.tickmarks.small.color'];
        			 RG.setElementCommonStyle(co,co.strokeStyle,2);
        			 var a = (((this.endAngle - this.startAngle) / numTicks) * i) + this.startAngle;
        			 var b = a + 0.00001
        			 co.arc(this.centerx, this.centery, this.radius - prop['chart.border.width'] - 10, a, b, 0);
        			 co.arc(this.centerx, this.centery, this.radius - prop['chart.border.width'] - 10 - 5, a, b, 0);
        			 co.stroke();
        			 }
        			 */
        		};

        		/**
        		 * This function draws the medium sized tickmarks
        		 */
        		this.drawMediumTickmarks =
        			this.DrawMediumTickmarks = function ()
        		{
        			if (prop["chart.tickmarks.medium"])
        			{
        				var numTicks = prop["chart.tickmarks.medium"];
        				co.lineWidth = 3;
        				co.setElementLineWidth(co.lineWidth);
        				co.lineCap = 'round';
        				co.setElementLineCap(co.lineCap);
        				var cc = prop["chart.tickmarks.medium.color"];
        				co.strokeStyle = cc;
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);


        				for (var i = 0; i <= numTicks; ++i)
        				{
        					co.beginPath();
        					var a = (((this.endAngle - this.startAngle) / numTicks) * i) + this.startAngle + (((this.endAngle - this.startAngle) / (2 * numTicks)));

        					if (a > this.startAngle && a < this.endAngle)
        					{
        						co.arc(this.centerx, this.centery, this.radius - prop["chart.border.width"] - 10, a, a + 0.00001, 0);
        						co.arc(this.centerx, this.centery, this.radius - prop["chart.border.width"] - 10 - 6, a, a + 0.00001, 0);
        					}
        					co.stroke();
        				}
        			}
        		};

        		/**
        		 * This function draws the large, bold tickmarks
        		 */
        		this.drawBigTickmarks =
        			this.DrawBigTickmarks = function ()
        		{
        			var numTicks = prop["chart.tickmarks.big"];
        			co.lineWidth = 3;
        			co.setElementLineWidth(co.lineWidth);
        			co.lineCap = 'round';
        			co.setElementLineCap(co.lineCap);

        			var cc;
        			for (var i = 0; i <= numTicks; ++i)
        			{
        				co.beginPath();
        				co.strokeStyle = cc = prop["chart.tickmarks.big.color"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				var a = (((this.endAngle - this.startAngle) / numTicks) * i) + this.startAngle;
        				co.arc(this.centerx, this.centery, this.radius - prop["chart.border.width"] - 10, a, a + 0.00001, 0);
        				co.arc(this.centerx, this.centery, this.radius - prop["chart.border.width"] - 10 - 10, a, a + 0.00001, 0);
        				co.stroke();
        			}
        		};

        		/**
        		 * This function draws the centerpin
        		 */
        		this.drawCenterpin =
        			this.DrawCenterpin = function ()
        		{
        			var offset = 6;
        			var grd = "gradient(#ddffff:" + prop["chart.centerpin.color"] + ")";

        			var grad = RG.createRadialGradient(co, this.centerx + offset, this.centery - offset, 0, this.centerx + offset, this.centery - offset, 25, grd);

        			co.beginPath();
        			co.fillStyle = grad;
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.centerpinRadius, 0, RG.TWOPI, 0);
        			co.fill();
        		};


        		/**
        		 * This function draws the labels
        		 */
        		this.drawLabels =
        			this.DrawLabels = function ()
        		{
        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			var font = prop["chart.text.font"],size = prop["chart.text.size"],num = prop["chart.labels.specific"] ? (prop["chart.labels.specific"].length - 1) : prop["chart.labels.count"],offsetx = prop["chart.labels.offsetx"],offsety = prop["chart.labels.offsety"],offseta = prop["chart.labels.offset.angle"];

        			co.beginPath();
        			if (num)
        			{
        				for (var i = 0; i <= num; ++i)
        				{
        					var hyp = (this.radius - 25 - prop["chart.border.width"]) - prop["chart.labels.offset.radius"];
        					var a = (this.endAngle - this.startAngle) / num;
        					a = this.startAngle + (i * a);
        					a -= RG.HALFPI;
        					a += offseta;


        					var x = this.centerx - (ma.sin(a) * hyp);
        					var y = this.centery + (ma.cos(a) * hyp);

        					var hAlign = x > this.centerx ? 'right' : 'left';
        					var vAlign = y > this.centery ? 'bottom' : 'top';

        					// This handles the label alignment when the label is on a PI/HALFPI boundary
        					if (a == RG.HALFPI)
        					{
        						vAlign = 'center';
        					}
        					else if (a == RG.PI)
        					{
        						hAlign = 'center';
        					}
        					else if (a == (RG.HALFPI + RG.PI))
        					{
        						vAlign = 'center';
        					}

        					/**
        					 * Can now force center alignment
        					 */
        					if (prop["chart.labels.centered"])
        					{
        						hAlign = 'center';
        						vAlign = 'center';
        					}

        					var value = (((this.max - this.min) * (i / num)) + this.min);


        					RG.text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : x + offsetx,
        						'y' : y + offsety,
        						'text' : prop["chart.labels.specific"] ? prop["chart.labels.specific"][i] : RG.numberFormat(this, value.toFixed(value === 0 ? 0 : prop["chart.scale.decimals"]), prop["chart.units.pre"], prop["chart.units.post"]),
        						'halign' : hAlign,
        						'valign' : vAlign,
        						'tag' : prop["chart.labels.specific"] ? 'labels.specific' : 'labels'
        					});
        				}
        			}
        			co.fill();


        			/**
        			 * Draw the textual value if requested
        			 */
        			if (prop["chart.value.text"])
        			{
        				var x = this.centerx;
        				var y = this.centery + (prop["chart.value.text.y.pos"] * this.radius);

        				var units_pre = typeof (prop["chart.value.text.units.pre"]) == 'string' ? prop["chart.value.text.units.pre"] : prop["chart.units.pre"];
        				var units_post = typeof (prop["chart.value.text.units.post"]) == 'string' ? prop["chart.value.text.units.post"] : prop["chart.units.post"];
        				var color = prop["chart.value.text.color"];
        				var bounding = prop["chart.value.text.bounding"];
        				var boundingFill = prop["chart.value.text.bounding.fill"];
        				var boundingStroke = prop["chart.value.text.bounding.stroke"];

        				co.fillStyle = color;
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				RG.text2(this, {
        					'font' : font,
        					'size' : size + 2,
        					'x' : x,
        					'y' : y,
        					'text' : RG.numberFormat(this, this.value.toFixed(prop["chart.value.text.decimals"]), units_pre, units_post),
        					'halign' : 'center',
        					'valign' : 'center',
        					'bounding' : bounding,
        					'bounding.fill' : boundingFill,
        					'bounding.stroke' : boundingStroke,
        					'tag' : 'value.text'
        				});
        			}
        		};




        		/**
        		 * This function draws the top title
        		 */
        		this.drawTopTitle =
        			this.DrawTopTitle = function ()
        		{
        			var x = this.centerx;
        			var y = this.centery - 25;

        			// Totally override the calculated positioning
        			if (typeof (prop["chart.title.top.pos"]) == 'number')
        			{
        				y = this.centery - (this.radius * prop["chart.title.top.pos"]);
        			}

        			if (prop["chart.title.top"])
        			{
        				co.fillStyle = prop["chart.title.top.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				RG.Text2(this, {
        					'font' : prop["chart.title.top.font"],
        					'size' : prop["chart.title.top.size"],
        					'x' : x,
        					'y' : y,
        					'text' : String(prop["chart.title.top"]),
        					'halign' : 'center',
        					'valign' : 'bottom',
        					'bold' : prop["chart.title.top.bold"],
        					'tag' : 'title.top',
        					'italic' : prop["chart.title.top.italic"]
        				});
        			}
        		};




        		/**
        		 * This function draws the bottom title
        		 */
        		this.drawBottomTitle =
        			this.DrawBottomTitle = function ()
        		{
        			var x = this.centerx;
        			var y = this.centery + this.centerpinRadius + 10;

        			// Totally override the calculated positioning
        			if (typeof (prop["chart.title.bottom.pos"]) == 'number')
        			{
        				y = this.centery + (this.radius * prop["chart.title.bottom.pos"]);
        			}

        			if (prop["chart.title.bottom"])
        			{
        				co.fillStyle = prop["chart.title.bottom.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				RG.Text2(this, {
        					'font' : prop["chart.title.bottom.font"],
        					'size' : prop["chart.title.bottom.size"],
        					'x' : x,
        					'y' : y,
        					'text' : String(prop["chart.title.bottom"]),
        					'halign' : 'center',
        					'valign' : 'top',
        					'bold' : prop["chart.title.bottom.bold"],
        					'tag' : 'title.bottom',
        					'italic' : prop["chart.title.bottom.italic"]
        				});
        			}
        		};




        		/**
        		 * This function draws the Needle
        		 *
        		 * @param number value The value to draw the needle for
        		 */
        		this.drawNeedle =
        			this.DrawNeedle = function (value, color, index)
        		{
        			var type = prop["chart.needle.type"];

        			co.lineWidth = 0.5;
        			co.setElementLineWidth(co.lineWidth);
        			co.strokeStyle = 'gray';
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.fillStyle = color;
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			var angle = (this.endAngle - this.startAngle) * ((value - this.min) / (this.max - this.min));
        			angle += this.startAngle;


        			// Work out the size of the needle
        			if (typeof (prop["chart.needle.size"]) == 'object'
        				 && prop["chart.needle.size"]
        				 && typeof (prop["chart.needle.size"][index]) == 'number')
        			{
        				var size = prop["chart.needle.size"][index];
        			}
        			else if (typeof (prop["chart.needle.size"]) == 'number')
        			{
        				var size = prop["chart.needle.size"];
        			}
        			else
        			{
        				var size = this.radius - 25 - prop["chart.border.width"];
        			}

        			if (type == 'line')
        			{
        				co.beginPath();

        				co.lineWidth = prop["chart.needle.width"];
        				co.setElementLineWidth(co.lineWidth);
        				co.strokeStyle = color;
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);

        				co.arc(this.centerx,
        					this.centery,
        					size,
        					angle,
        					angle + 0.0001,
        					false);

        				co.lineTo(this.centerx, this.centery);

        				if (prop["chart.needle.tail"])
        				{
        					co.arc(this.centerx, this.centery, this.radius * 0.2, angle + RG.PI, angle + 0.00001 + RG.PI, false);
        				}

        				co.lineTo(this.centerx, this.centery);

        				co.stroke();
        				// co.fill();
        			}
        			else
        			{
        				co.beginPath();
        				co.arc(this.centerx, this.centery, size, angle, angle + 0.00001, false);
        				co.arc(this.centerx, this.centery, this.centerpinRadius * 0.5, angle + RG.HALFPI, angle + 0.00001 + RG.HALFPI, false);

        				if (prop["chart.needle.tail"])
        				{
        					co.arc(this.centerx, this.centery, this.radius * 0.2, angle + RG.PI, angle + 0.00001 + RG.PI, false);
        				}

        				co.arc(this.centerx, this.centery, this.centerpinRadius * 0.5, angle - RG.HALFPI, angle - 0.00001 - RG.HALFPI, false);
        				co.stroke();
        				co.fill();

        				/**
        				 * Store the angle in an object variable
        				 */
        				this.angle = angle;
        			}
        		};

        		/**
        		 * - ???????????? - fill?????? stroke ??????
        		 * This draws the green background to the tickmarks
        		 */
        		this.drawColorBands =
        			this.DrawColorBands = function ()
        		{
        			if (RG.is_array(prop["chart.colors.ranges"]))
        			{
        				var ranges = prop["chart.colors.ranges"];

        				for (var i = 0; i < ranges.length; ++i)
        				{
        					co.strokeStyle = prop["chart.strokestyle"] ? prop["chart.strokestyle"] : ranges[i][2];
        					RG.setElementCommonStyle(co, co.strokeStyle, 2);
        					// co.fillStyle = ranges[i][2];
        					// RG.setElementCommonStyle(co,co.fillStyle,1);
        					co.lineWidth = prop["chart.colors.ranges.width"]; //prop['chart.linewidth.segments'];
        					co.setElementLineWidth(co.lineWidth);
        					co.lineCap = 'butt';
        					co.setElementLineCap(co.lineCap);

        					co.beginPath();
        					co.arc(this.centerx,
        						this.centery,
        						this.radius - 10 - prop["chart.border.width"],
        						(((ranges[i][0] - this.min) / (this.max - this.min)) * (this.endAngle - this.startAngle)) + this.startAngle,
        						(((ranges[i][1] - this.min) / (this.max - this.min)) * (this.endAngle - this.startAngle)) + this.startAngle,
        						false);
        					/*
        					 co.arc(this.centerx,
        					 this.centery,
        					 this.radius - 20 - prop['chart.border.width'],
        					 (((ranges[i][1] - this.min) / (this.max - this.min)) * (this.endAngle - this.startAngle)) + this.startAngle,
        					 (((ranges[i][0] - this.min) / (this.max - this.min)) * (this.endAngle - this.startAngle)) + this.startAngle,
        					 true);
        					 */
        					// co.closePath();
        					// co.fill();
        					co.stroke();
        				}

        				return;
        			}

        			/**
        			 * Draw the GREEN region
        			 */
        			co.lineCap = 'butt';
        			co.setElementLineCap(co.lineCap);
        			co.strokeStyle = prop["chart.green.color"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			// co.fillStyle = prop['chart.green.color'];
        			// RG.setElementCommonStyle(co,co.fillStyle,1);

        			var greenStart = this.startAngle;
        			var greenEnd = this.startAngle + (this.endAngle - this.startAngle) * ((prop["chart.green.end"] - this.min) / (this.max - this.min));

        			// hsji ????????? ?????? - ????????? fill??? ?????? ???????????? ????????? stroke??? ??????
        			co.setElementLineWidth(prop["chart.green.width"]);
        			co.beginPath();
        			co.arc(this.centerx, this.centery, this.radius - 10 - prop["chart.border.width"], greenStart, greenEnd, false);
        			co.stroke();
        			/**
        			 * Draw the YELLOW region
        			 */
        			co.strokeStyle = prop["chart.yellow.color"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			// co.fillStyle = prop['chart.yellow.color'];
        			// RG.setElementCommonStyle(co,co.fillStyle,1);

        			var yellowStart = greenEnd;
        			var yellowEnd = this.startAngle + (this.endAngle - this.startAngle) * ((prop["chart.red.start"] - this.min) / (this.max - this.min));

        			co.setElementLineWidth(prop["chart.yellow.width"]);
        			co.beginPath();
        			co.arc(this.centerx, this.centery, this.radius - 10 - prop["chart.border.width"], yellowStart, yellowEnd, false);
        			co.stroke();

        			/**
        			 * Draw the RED region
        			 */
        			co.strokeStyle = prop["chart.red.color"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			// co.fillStyle = prop['chart.red.color'];
        			// RG.setElementCommonStyle(co,co.fillStyle,1);

        			var redStart = yellowEnd;
        			var redEnd = this.startAngle + (this.endAngle - this.startAngle) * ((this.max - this.min) / (this.max - this.min));

        			co.setElementLineWidth(prop["chart.yellow.width"]);
        			co.beginPath();
        			co.arc(this.centerx, this.centery, this.radius - 10 - prop["chart.border.width"], redStart, redEnd, false);
        			co.stroke();
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
        		 * A getValue method
        		 *
        		 * @param object e An event object
        		 */
        		this.getValue = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e);
        			var mouseX = mouseXY[0];
        			var mouseY = mouseXY[1];

        			var angle = RG.getAngleByXY(this.centerx, this.centery, mouseX, mouseY);

        			if (angle >= 0 && angle <= RG.HALFPI)
        			{
        				angle += RG.TWOPI;
        			}

        			var value = ((angle - this.startAngle) / (this.endAngle - this.startAngle)) * (this.max - this.min);
        			value = value + this.min;

        			if (value < this.min)
        			{
        				value = this.min;
        			}

        			if (value > this.max)
        			{
        				value = this.max;
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

        			if (mouseXY[0] > (this.centerx - this.radius)
        				 && mouseXY[0] < (this.centerx + this.radius)
        				 && mouseXY[1] > (this.centery - this.radius)
        				 && mouseXY[1] < (this.centery + this.radius)
        				 && RG.getHypLength(this.centerx, this.centery, mouseXY[0], mouseXY[1]) <= this.radius)
        			{
        				return this;
        			}
        		};




        		/**
        		 * This draws the gradient that goes around the Gauge chart
        		 */
        		this.drawGradient =
        			this.DrawGradient = function ()
        		{
        			if (prop["chart.border.gradient"])
        			{
        				var grd = "gradient(gray:white)";
        				co.beginPath();
        				var grad = RG.createRadialGradient(co, this.centerx, this.centery, this.radius, this.centerx, this.centery, this.radius - 15, grd);

        				co.fillStyle = grad;
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.arc(this.centerx, this.centery, this.radius, 0, RG.TWOPI, false);
        				co.arc(this.centerx, this.centery, this.radius - 15, RG.TWOPI, 0, true);
        				co.fill();
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
        			if (prop["chart.adjustable"] && RG.Registry_Get('chart.adjusting') && RG.Registry_Get('chart.adjusting').uid == this.uid)
        			{
        				this.value = this.getValue(e);
        				// RG.Clear(this.canvas);
        				RG.redrawCanvas(this.canvas);
        				RG.fireCustomEvent(this, 'onadjust');
        			}
        		};

        		/**
        		 * This method returns an appropriate angle for the given value (in RADIANS)
        		 *
        		 * @param number value The value to get the angle for
        		 */
        		this.getAngle = function (value)
        		{
        			// Higher than max
        			if (value > this.max || value < this.min)
        			{
        				return null;
        			}

        			// var value = ((angle - this.startAngle) / (this.endAngle - this.startAngle)) * (this.max - this.min);
        			// value = value + this.min;

        			var angle = (((value - this.min) / (this.max - this.min)) * (this.endAngle - this.startAngle)) + this.startAngle;

        			return angle;
        		};

        		/**
        		 * This allows for easy specification of gradients. Could optimise this not to repeatedly call parseSingleColors()
        		 */
        		this.parseColors = function ()
        		{
        			// Save the original colors so that they can be restored when the canvas is reset
        			if (this.original_colors.length === 0)
        			{
        				this.original_colors["chart.background.color"] = RG.array_clone(prop["chart.background.color"]);
        				this.original_colors["chart.red.color"] = RG.array_clone(prop["chart.red.color"]);
        				this.original_colors["chart.yellow.color"] = RG.array_clone(prop["chart.yellow.color"]);
        				this.original_colors["chart.green.color"] = RG.array_clone(prop["chart.green.color"]);
        				this.original_colors["chart.border.inner"] = RG.array_clone(prop["chart.border.inner"]);
        				this.original_colors["chart.border.outer"] = RG.array_clone(prop["chart.border.outer"]);
        				this.original_colors["chart.colors.ranges"] = RG.array_clone(prop["chart.colors.ranges"]);
        				this.original_colors["chart.needle.colors"] = RG.array_clone(prop["chart.needle.colors"]);
        			}

        			prop["chart.background.color"] = this.parseSingleColorForGradient(prop["chart.background.color"]);
        			prop["chart.red.color"] = this.parseSingleColorForGradient(prop["chart.red.color"]);
        			prop["chart.yellow.color"] = this.parseSingleColorForGradient(prop["chart.yellow.color"]);
        			prop["chart.green.color"] = this.parseSingleColorForGradient(prop["chart.green.color"]);
        			prop["chart.border.inner"] = this.parseSingleColorForGradient(prop["chart.border.inner"]);
        			prop["chart.border.outer"] = this.parseSingleColorForGradient(prop["chart.border.outer"]);

        			// Parse the chart.color.ranges value
        			if (prop["chart.colors.ranges"])
        			{
        				var ranges = prop["chart.colors.ranges"];

        				for (var i = 0; i < ranges.length; ++i)
        				{
        					ranges[i][2] = this.parseSingleColorForGradient(ranges[i][2], this.radius - 30);
        				}
        			}

        			// Parse the chart.needle.colors value
        			if (prop["chart.needle.colors"])
        			{
        				var colors = prop["chart.needle.colors"];

        				for (var i = 0; i < colors.length; ++i)
        				{
        					colors[i] = this.parseSingleColorForGradient(colors[i]);
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
        		 *
        		 * @param string color    The color to look for a gradient in
        		 * @param radius OPTIONAL The start radius to start the gradient at.
        		 *                        If not suppllied the centerx value is used
        		 */
        		this.parseSingleColorForGradient = function (color)
        		{
        			var radiusStart = arguments[1] || 0;

        			if (!color || typeof (color) != 'string')
        			{
        				return color;
        			}

        			var grad;
        			if (color.match(/^gradient\((.*)\)$/i))
        			{
        				grad = RG.createRadialGradient(co, this.centerx,
        					this.centery,
        					radiusStart,
        					this.centerx,
        					this.centery,
        					this.radius,
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

        		/**
        		 * This function runs once only
        		 * (put at the end of the file (before any effects))
        		 */
        		this.firstDrawFunc = function ()
        		{
        		};

        		/**
        		 * Gauge Grow
        		 *
        		 * This effect gradually increases the represented value
        		 *
        		 * @param object       Options for the effect. You can pass frames here
        		 * @param function     An optional callback function
        		 */
        		this.grow = function ()
        		{
        			var obj = this;
        			var opt = arguments[0] ? arguments[0] : {
        			};
        			var callback = arguments[1] ? arguments[1] : function ()
        			{
        			};
        			var frames = opt.frames || 30;
        			var frame = 0;

        			if (RG.ISIE8)
        			{
        				this.draw();
        				callback(obj);
        				return;
        			}

        			// Single pointer
        			if (typeof obj.value === 'number')
        			{
        				var origValue = Number(obj.currentValue);

        				if (obj.currentValue == null)
        				{
        					obj.currentValue = obj.min;
        					origValue = obj.min;
        				}

        				var newValue = obj.value;
        				var diff = newValue - origValue;


        				var iterator = function ()
        				{
        					obj.value = ((frame / frames) * diff) + origValue;

        					if (obj.value > obj.max)
        					{
        						obj.value = obj.max;
        					}
        					if (obj.value < obj.min)
        					{
        						obj.value = obj.min;
        					}

        					// RG.clear(obj.canvas);
        					RG.redrawCanvas(obj.canvas);

        					if (frame++ < frames)
        					{
        						RG.Effects_updateCanvas(iterator);
        					}
        					else
        					{
        						callback(obj);
        					}
        				};

        				iterator();

        				/**
        				 * Multiple pointers
        				 */
        			}
        			else
        			{
        				if (obj.currentValue == null)
        				{
        					obj.currentValue = [];

        					for (var i = 0; i < obj.value.length; ++i)
        					{
        						obj.currentValue[i] = obj.min;
        					}

        					origValue = RG.array_clone(obj.currentValue);
        				}

        				var origValue = RG.array_clone(obj.currentValue);
        				var newValue = RG.array_clone(obj.value);
        				var diff = [];

        				for (var i = 0,len = newValue.length; i < len; ++i)
        				{
        					diff[i] = newValue[i] - Number(obj.currentValue[i]);
        				}



        				var iterator = function ()
        				{
        					frame++;

        					for (var i = 0,len = obj.value.length; i < len; ++i)
        					{
        						obj.value[i] = ((frame / frames) * diff[i]) + origValue[i];

        						if (obj.value[i] > obj.max)
        						{
        							obj.value[i] = obj.max;
        						}
        						if (obj.value[i] < obj.min)
        						{
        							obj.value[i] = obj.min;
        						}
        					}

        					// RG.clear(obj.canvas);
        					RG.redrawCanvas(obj.canvas);


        					if (frame < frames)
        					{
        						RG.Effects_updateCanvas(iterator);
        					}
        					else
        					{
        						callback(obj);
        					}
        				};

        				iterator();
        			}

        			return this;
        		};

        		RG.att(ca);

        		/**
        		 * Register the object
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
