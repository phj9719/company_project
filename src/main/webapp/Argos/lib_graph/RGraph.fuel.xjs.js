//XJS=RGraph.fuel.xjs
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
        if (!nexacro.RGraph.Fuel)
        {
        	/**
        	 * The Fuel widget constructor
        	 *
        	 * @param object canvas The canvas object
        	 * @param int min       The minimum value
        	 * @param int max       The maximum value
        	 * @param int value     The indicated value
        	 */
        	nexacro.RGraph.Fuel = function (conf)
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
        		var min = conf.min,max = conf.max,value = conf.value,parseConfObjectForOptions = true;
        		this.canvas.__object__ = this;
        		this.type = 'fuel';
        		this.isRGraph = true;
        		this.min = RG.stringsToNumbers(min);
        		this.max = RG.stringsToNumbers(max);
        		this.value = RG.stringsToNumbers(value);
        		this.angles = {
        		};
        		this.currentValue = null;
        		this.uid = RG.CreateUID();
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false


        		/**
        		 * Compatibility with older browsers
        		 */
        		// RG.OldBrowserCompat(this.context);


        		// Check for support
        		if (!this.canvas)
        		{
        			alert('[FUEL] No canvas support');
        			return;
        		}

        		/**
        		 * The funnel charts properties
        		 */
        		this.properties =
        			{
        			'chart.style.background' : null,
        			'chart.style.gradation' : null,
        			'chart.style.border' : null,
        			'chart.style.bordertype' : null,
        			'chart.colors' : ['gradient(red:white:red)'],
        			'chart.needle.color' : 'red',
        			'chart.gutter.left' : 5,
        			'chart.gutter.right' : 5,
        			'chart.gutter.top' : 5,
        			'chart.gutter.bottom' : 5,
        			'chart.text.size' : 12,
        			'chart.text.color' : '#000000', // Does not support gradients
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.contextmenu' : null,
        			'chart.annotatable' : false,
        			'chart.annotate.color' : 'black',
        			'chart.zoom.factor' : 1.5,
        			'chart.zoom.fade.in' : true,
        			'chart.zoom.fade.out' : true,
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
        			'chart.adjustable' : false,
        			'chart.resizable' : false,
        			'chart.resize.handle.background' : null,
        			'chart.icon' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAEGElEQVRIS7VXSyhtYRT+jnfe5FEMjAwUBiQGHikzRWIkkgy8YyDK+xnJK5JCeZSUGKBMiAyYkMxMJAMpSfJ+2/d8695/33NunSPnHqt2Z5+91/9/' + '/' + '/et9a/1b8Pn56dmMBhg/IWDgwNoNzc38PHxkXtN0+Tiexp9eH18fIDj1Bj63N/fw8vLS/wsmcHoqKmXT09PuL29RVFREU5OTvTJ6UIAgioQ+vLe09MTb29v8PX1RWBgICYnJ+XXIqDRWXN0dJT3nIDsWlpadP+lpSWZlD4KmL/8/' + '/7+Ls/S09N1/7y8PISHh+sK/QssDJWcHEyGCnB1dRUDAwPIzMzUx5GpAnZ1dcXy8jK2trbM5j06OsLc3JzISx8q4OzsLOOsAq6treHg4AAeHh4WJbq7u0Nzc7P+PiYmBnt7ezg9PcXExAQCAgLg5OSEx8dHuLu7Wwfc3t7G/v6+yEcjO8rIROGKaWdnZ+jr6zMDjI6OxvT0tDzr6uqS2KtksspwZ2cHjY2NuqSUhnHmilUCraysmElaWloKJpQCjI2NRX5+Pl5eXr6WlCv08/MTEMVOZDH+Zzw4CdlfX1/rDHt7ezE1NQXGkcYEKi4ulkVKYlpLGouBs/JiaGgIZL25uSlecXFxohAz/ccAz8/P4e/vj7q6Ojw8PMje5DNRy94MQ0JCUFtbK2wqKipE+sHBQbi4uPwMQ86ak5ODxMREVFdXIywsDCUlJRJDXnZlmJqaip6eHuTm5kqikGlycjIyMjL+ZrY9JSUgMzQiIgINDQ2ypaqqqkCZWXHsnjQEHB8fR0pKigAxabq7uyWOlJNxtLukTJDs7GxUVlZKDNl5oqKi8Pr6+jOAIyMjiI+Pl5JGQG4F1Qy+LN7f3fiUdGZmBsHBwRgbG8Pw8LD01ba2NmlX0rTtnTQLCwvSjEdHR3FxcSExLCwsRGRkpBR9vePzeMDyw3bT1NT0XXLiT4a7u7s4Pj4GGzd7K8GCgoKEsRR8I4Cm6hwHXV5eiv62GAE5npMTmFuBTCkzmzT7qs5Q9TlW/o6ODlvwhCHPM5SVPZIxYzNeXFxEa2srvL29YTC2GI3aMm3Zeq6urv4LMC0tDRsbG1K8k5KS9DgS0IwhKVFjSsJA22r9/f0oKCgQdvPz83JEmZ2dlcpD9maSshow0KZnlO8Csx9yK3BLKCMJPpf2xGMigdi9WXooaWdn53dxdP+amhrZh4eHh1hfX5cTW319vZyBnp+ffzNkBWBmhYaGysB/j322oCckJCArK0uGMlsJ5ubmBoPxRiMzFlomjr2MGdne3i5ANILRJEtJt6ysTG8h9gDl4am8vFwSUWron1O9LulXIOqk9pWftfdSS40yyj5Uh101wPRryuR7R1ZMX/U1pfy5IF40xcgUnGAc9wsGYxsFhy87kwAAAABJRU5ErkJggg==',
        			'chart.icon.redraw' : true,
        			'chart.background.image.stretch' : false,
        			'chart.background.image.x' : null,
        			'chart.background.image.y' : null,
        			'chart.background.color' : '#ffffff',
        			'chart.strokeline.color' : '#000000dd',
        			'chart.strokeline.width' : 1,
        			'chart.labels.full' : 'F',
        			'chart.labels.empty' : 'E',
        			'chart.labels.count' : 5,
        			'chart.centerx' : null,
        			'chart.centery' : null,
        			'chart.radius' : null,
        			'chart.scale.visible' : false,
        			'chart.scale.decimals' : 0,
        			'chart.units.pre' : '',
        			'chart.units.post' : '',
        			'chart.clearto' : [0, 0, 0, 0]
        		};

        		/**
        		 * Bounds checking - if the value is outside the scale
        		 */
        		if (this.value > this.max)
        		{
        			this.value = this.max;
        		}
        		if (this.value < this.min)
        		{
        			this.value = this.min;
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

        			return prop[name.toLowerCase()];
        		};




        		/**
        		 * The function you call to draw the bar chart
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

        			/**
        			 * Get the center X and Y of the chart. This is the center of the needle bulb
        			 */
        			this.centerx = ((ca.width - this.gutterLeft - this.gutterRight) / 2) + this.gutterLeft;
        			this.centery = ca.height - 20 - this.gutterBottom;

        			/**
        			 * Work out the radius of the chart
        			 */
        			this.radius = ca.height - this.gutterTop - this.gutterBottom - 20;

        			/**
        			 * Stop this growing uncntrollably
        			 */
        			this.coordsText = [];

        			/**
        			 * You can now specify chart.centerx, chart.centery and chart.radius
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


        			/**
        			 * The start and end angles of the chart
        			 */
        			this.angles.start = (RG.PI + RG.HALFPI) - 0.5;
        			this.angles.end = (RG.PI + RG.HALFPI) + 0.5;
        			this.angles.needle = this.getAngle(this.value);

        			/**
        			 * Draw the labels on the chart
        			 */
        			// this.DrawLabels();


        			/**
        			 * Draw the fuel guage
        			 */
        			this.DrawChart();
        			this.DrawLabels();
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
        		 * This function actually draws the chart
        		 */
        		this.drawChart =
        			this.DrawChart = function ()
        		{
        			/**
        			 * Draw the "Scale"
        			 */
        			this.DrawScale();
        			/**
        			 * Place the icon on the canvas
        			 */
        			if (!RG.ISOLD)
        			{
        				// this.DrawIcon();
        			}
        			/**
        			 * Draw the needle
        			 */
        			this.DrawNeedle();
        		};

        		/**
        		 * Draws the labels
        		 */
        		this.drawLabels =
        			this.DrawLabels = function ()
        		{
        			if (!prop["chart.scale.visible"])
        			{
        				var radius = (this.radius - 20);
        				co.fillStyle = prop["chart.text.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				// Draw the left label
        				var y = this.centery - Math.sin(this.angles.start - RG.PI) * (this.radius - 25);
        				var x = this.centerx - Math.cos(this.angles.start - RG.PI) * (this.radius - 25);
        				RG.Text2(this, {
        					'font' : prop["chart.text.font"],
        					'size' : prop["chart.text.size"],
        					'x' : x,
        					'y' : y,
        					'text' : prop["chart.labels.empty"],
        					'halign' : 'center',
        					'valign' : 'center',
        					'tag' : 'labels'
        				});

        				// Draw the right label
        				var y = this.centery - Math.sin(this.angles.start - RG.PI) * (this.radius - 25);
        				var x = this.centerx + Math.cos(this.angles.start - RG.PI) * (this.radius - 25);
        				RG.Text2(this, {
        					'font' : prop["chart.text.font"],
        					'size' : prop["chart.text.size"],
        					'x' : x,
        					'y' : y,
        					'text' : prop["chart.labels.full"],
        					'halign' : 'center',
        					'valign' : 'center',
        					'tag' : 'labels'
        				});
        			}
        		};

        		/**
        		 * Draws the needle
        		 */
        		this.drawNeedle =
        			this.DrawNeedle = function ()
        		{
        			// Draw the actual needle
        			co.beginPath();
        			co.lineWidth = 5;
        			co.setElementLineWidth(co.lineWidth);
        			co.lineCap = 'round';
        			co.setElementLineCap(co.lineCap);
        			co.strokeStyle = prop["chart.needle.color"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			/**
        			 * The angle for the needle
        			 */
        			var angle = this.angles.needle;

        			co.arc(this.centerx, this.centery, this.radius - 30, angle, angle + 0.0001, false);
        			co.lineTo(this.centerx, this.centery);
        			co.stroke();

        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);

        			// Create the gradient for the bulb
        			var cx = this.centerx + 10;
        			var cy = this.centery - 10;

        			// var grad = co.createRadialGradient(cx, cy, 35, cx, cy, 0);
        			var cc = "gradient(black:#eeeeee)";
        			var grad = RG.createRadialGradient(co, cx, cy, 35, cx, cy, 0,
        				cc);
        			// Draw the bulb
        			co.beginPath();
        			co.fillStyle = grad;
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.moveTo(this.centerx, this.centery);
        			co.arc(this.centerx, this.centery, 20, 0, RG.TWOPI, 0);
        			co.fill();
        		};


        		/**
        		 * Draws the "scale"
        		 */
        		this.drawScale =
        			this.DrawScale = function ()
        		{
        			var a,x,y;

        			// First draw the fill background
        			co.beginPath();
        			co.strokeStyle = prop["chart.strokeline.color"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.setElementLineWidth(prop["chart.strokeline.width"]);
        			co.arc(this.centerx, this.centery, this.radius, this.angles.start, this.angles.end, false);
        			// co.arc(this.centerx, this.centery, this.radius - 10, this.angles.end, this.angles.start, true);
        			co.lineTo(this.centerx, this.centery);
        			co.closePath();
        			co.stroke();
        			co.fill();

        			// First draw the fill itself
        			var start = this.angles.start;
        			var end = this.angles.needle;

        			co.beginPath();
        			co.fillStyle = prop["chart.colors"][0];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.radius, start, end, false);
        			// co.arc(this.centerx, this.centery, this.radius - 10, end, start, true);
        			co.lineTo(this.centerx, this.centery);
        			co.closePath();
        			// co.stroke();
        			co.fill();

        			co.beginPath();
        			co.arc(this.centerx, this.centery, this.radius - 10, this.angles.start, this.angles.end, false);
        			co.lineTo(this.centerx, this.centery);
        			co.closePath();
        			co.stroke();

        			// 지우기
        			RG.setElementCommonStyle(co, prop["chart.background.color"], 1);
        			co.beginPath();
        			co.arc(this.centerx,
        				this.centery,
        				this.radius - 11,
        				0,
        				2 * Math.PI,
        				false);
        			co.lineTo(this.centerx + x, this.centery + y);
        			co.closePath();
        			co.fill();

        			// This draws the tickmarks
        			for (a = this.angles.start; a <= this.angles.end + 0.01; a += ((this.angles.end - this.angles.start) / 5))
        			{
        				co.beginPath();
        				co.arc(this.centerx, this.centery, this.radius - 10, a, a + 0.0001, false);
        				co.arc(this.centerx, this.centery, this.radius - 15, a + 0.0001, a, true);
        				co.stroke();
        			}

        			/**
        			 * If chart.scale.visible is specified draw the textual scale
        			 */
        			if (prop["chart.scale.visible"])
        			{
        				co.fillStyle = prop["chart.text.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				// The labels
        				var numLabels = prop["chart.labels.count"];
        				var decimals = prop["chart.scale.decimals"];
        				var font = prop["chart.text.font"];
        				var size = prop["chart.text.size"];
        				var units_post = prop["chart.units.post"];
        				var units_pre = prop["chart.units.pre"];

        				for (var i = 0; i <= numLabels; ++i)
        				{
        					a = ((this.angles.end - this.angles.start) * (i / numLabels)) + this.angles.start;
        					y = this.centery - Math.sin(a - RG.PI) * (this.radius - 25);
        					x = this.centerx - Math.cos(a - RG.PI) * (this.radius - 25);


        					RG.Text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : x,
        						'y' : y,
        						'text' : RG.number_format(this, (this.min + ((this.max - this.min) * (i / numLabels))).toFixed(decimals), units_pre, units_post),
        						'halign' : 'center',
        						'valign' : 'center',
        						'tag' : 'scale'
        					});
        				}
        			}
        		};

        		this.drawScale_ =
        			this.DrawScale_ = function ()
        		{
        			var a,x,y;

        			// First draw the fill background
        			co.beginPath();
        			co.strokeStyle = 'black';
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.fillStyle = 'white';
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.radius, this.angles.start, this.angles.end, false);
        			co.arc(this.centerx, this.centery, this.radius - 10, this.angles.end, this.angles.start, true);
        			co.closePath();
        			co.stroke();
        			co.fill();
        			alert(2);

        			// First draw the fill itself
        			var start = this.angles.start;
        			var end = this.angles.needle;

        			co.beginPath();
        			co.fillStyle = prop["chart.colors"][0];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.arc(this.centerx, this.centery, this.radius, start, end, false);
        			co.arc(this.centerx, this.centery, this.radius - 10, end, start, true);
        			co.closePath();
        			// co.stroke();
        			co.fill();

        			// This draws the tickmarks
        			for (a = this.angles.start; a <= this.angles.end + 0.01; a += ((this.angles.end - this.angles.start) / 5))
        			{
        				co.beginPath();
        				co.arc(this.centerx, this.centery, this.radius - 10, a, a + 0.0001, false);
        				co.arc(this.centerx, this.centery, this.radius - 15, a + 0.0001, a, true);
        				co.stroke();
        			}
        			/**
        			 * If chart.scale.visible is specified draw the textual scale
        			 */
        			if (prop["chart.scale.visible"])
        			{
        				co.fillStyle = prop["chart.text.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				// The labels
        				var numLabels = prop["chart.labels.count"];
        				var decimals = prop["chart.scale.decimals"];
        				var font = prop["chart.text.font"];
        				var size = prop["chart.text.size"];
        				var units_post = prop["chart.units.post"];
        				var units_pre = prop["chart.units.pre"];

        				for (var i = 0; i <= numLabels; ++i)
        				{
        					a = ((this.angles.end - this.angles.start) * (i / numLabels)) + this.angles.start;
        					y = this.centery - Math.sin(a - RG.PI) * (this.radius - 25);
        					x = this.centerx - Math.cos(a - RG.PI) * (this.radius - 25);
        					RG.Text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : x,
        						'y' : y,
        						'text' : RG.number_format(this, (this.min + ((this.max - this.min) * (i / numLabels))).toFixed(decimals), units_pre, units_post),
        						'halign' : 'center',
        						'valign' : 'center',
        						'tag' : 'scale'
        					});
        				}
        			}
        		};
        		/**
        		 * A placeholder function that is here to prevent errors
        		 */
        		this.getShape = function (e)
        		{
        		};
        		/**
        		 * This function returns the pertinent value based on a click
        		 *
        		 * @param  object e An event object
        		 * @return number   The relevant value at the point of click
        		 */
        		this.getValue = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e);
        			var angle = RG.getAngleByXY(this.centerx, this.centery, mouseXY[0], mouseXY[1]);

        			/**
        			 * Boundary checking
        			 */
        			if (angle >= this.angles.end)
        			{
        				return this.max;
        			}
        			else if (angle <= this.angles.start)
        			{
        				return this.min;
        			}

        			var value = (angle - this.angles.start) / (this.angles.end - this.angles.start);
        			value = value * (this.max - this.min);
        			value = value + this.min;

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
        			var angle = RG.getAngleByXY(this.centerx, this.centery, mouseXY[0], mouseXY[1]);
        			var accuracy = 15;

        			var leftMin = this.centerx - this.radius;
        			var rightMax = this.centerx + this.radius;
        			var topMin = this.centery - this.radius;
        			var bottomMax = this.centery + this.radius;

        			if (mouseXY[0] > leftMin
        				 && mouseXY[0] < rightMax
        				 && mouseXY[1] > topMin
        				 && mouseXY[1] < bottomMax)
        			{
        				return this;
        			}
        		};
        		/**
        		 * Draws the icon
        		 */
        		this.drawIcon =
        			this.DrawIcon = function ()
        		{
        			if (!RG.ISOLD)
        			{
        				if (!this.__icon__ || !this.__icon__.__loaded__)
        				{
        					var img = new Image();
        					img.src = prop["chart.icon"];
        					img.__object__ = this;
        					this.__icon__ = img;


        					img.onload = function (e)
        					{
        						img.__loaded__ = true;
        						var obj = img.__object__;
        						// var co  = obj.context;
        						// var prop = obj.properties;

        						co.drawImage(img, obj.centerx - (img.width / 2), obj.centery - obj.radius + 35);

        						obj.DrawNeedle();

        						if (prop["chart.icon.redraw"])
        						{
        							obj.Set('chart.icon.redraw', false);
        							RG.Clear(obj.canvas);
        							RG.RedrawCanvas(ca);
        						}
        					};
        				}
        				else
        				{
        					var img = this.__icon__;
        					co.drawImage(img, this.centerx - (img.width / 2), this.centery - this.radius + 35);
        				}
        			}

        			this.DrawNeedle();
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
        			 * Handle adjusting for the Fuel gauge
        			 */
        			if (prop["chart.adjustable"] && RG.Registry_Get('chart.adjusting') && RG.Registry_Get('chart.adjusting').uid == this.uid)
        			{
        				this.value = this.getValue(e);
        				// RG.Clear(ca);
        				RG.redrawCanvas(ca);
        				RG.fireCustomEvent(this, 'onadjust');
        			}
        		};
        		/**
        		 * This method gives you the relevant angle (in radians) that a particular value is
        		 *
        		 * @param number value The relevant angle
        		 */
        		this.getAngle = function (value)
        		{
        			// Range checking
        			if (value < this.min || value > this.max)
        			{
        				return null;
        			}
        			var angle = (((value - this.min) / (this.max - this.min)) * (this.angles.end - this.angles.start)) + this.angles.start;
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
        				this.original_colors["chart.colors"] = RG.array_clone(prop["chart.colors"]);
        				this.original_colors["chart.needle.color"] = RG.array_clone(prop["chart.needle.color"]);
        			}

        			var props = this.properties;
        			var colors = props["chart.colors"];

        			for (var i = 0; i < colors.length; ++i)
        			{
        				colors[i] = this.parseSingleColorForLinearGradient(colors[i]);
        			}

        			props["chart.needle.color"] = this.parseSingleColorForRadialGradient(props["chart.needle.color"]);
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
        		this.parseSingleColorForLinearGradient = function (color)
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
        		 * This parses a single color value
        		 */
        		this.parseSingleColorForRadialGradient = function (color)
        		{
        			if (!color || typeof color != 'string')
        			{
        				return color;
        			}

        			var grad;
        			if (color.match(/^gradient\((.*)\)$/i))
        			{
        				grad = RG.createRadialGradient(co, this.centerx, this.centery, 0, this.centerx, this.centery, this.radius,
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
        		 * Grow
        		 *
        		 * The Fuel chart Grow effect gradually increases the values of the Fuel chart
        		 *
        		 * @param object obj The graph object
        		 */
        		this.grow = function ()
        		{
        			var callback = arguments[1] || function ()
        			{
        			};
        			var opt = arguments[0] || {
        			};
        			var numFrames = opt.frames || 10;
        			var frame = 0;
        			var obj = this;
        			var origValue = Number(this.currentValue);

        			if (RG.ISIE8)
        			{
        				this.draw();
        				callback(obj);
        				return;
        			}

        			if (this.currentValue == null)
        			{
        				this.currentValue = this.min;
        				origValue = this.min;
        			}

        			var newValue = this.value;
        			var diff = newValue - origValue;
        			var step = (diff / numFrames);
        			var frame = 0;


        			function iterator ()
        			{
        				frame++;

        				obj.value = ((frame / numFrames) * diff) + origValue;

        				if (obj.value > obj.max)
        				{
        					obj.value = obj.max;
        				}
        				if (obj.value < obj.min)
        				{
        					obj.value = obj.min;
        				}
        				RG.effectCanvasShow(obj.canvas, true);
        				RG.clear(obj.canvas);
        				RG.redrawCanvas(obj.canvas);
        				RG.effectCanvasShow(obj.canvas, false, 10);

        				if (frame < numFrames)
        				{
        					RG.Effects_updateCanvas(iterator);

        					// The callback variable is always function
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
        		 * Now need to register all chart types. MUST be after the setters/getters are defined
        		 *
        		 * *** MUST BE LAST IN THE CONSTRUCTOR ***
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
