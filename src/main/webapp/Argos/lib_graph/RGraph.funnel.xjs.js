//XJS=RGraph.funnel.xjs
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

        if (!nexacro.RGraph.Funnel)
        {
        	/**
        	 * The bar chart constructor
        	 *
        	 * @param object canvas The canvas object
        	 * @param array  data   The chart data
        	 */
        	nexacro.RGraph.Funnel = function (conf)
        	{
        		// argument 0 : option
        		// 1 : rg common
        		// 2 : canvas id
        		var RG = arguments[1];
        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];
        		RG.convertDataset(conf.data);
        		var data = conf.data;
        		var parseConfObjectForOptions = true;
        		this.canvas.__object__ = this;
        		this.type = 'funnel';
        		this.coords = [];
        		this.isRGraph = true;
        		this.uid = RG.CreateUID();
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		// Check for support
        		if (!this.canvas)
        		{
        			alert('[FUNNEL] No canvas support');
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
        			'chart.strokestyle' : [0, 0, 0, 0],
        			'chart.gutter.left' : 25,
        			'chart.gutter.right' : 25,
        			'chart.gutter.top' : 25,
        			'chart.gutter.bottom' : 25,
        			'chart.labels' : null,
        			'chart.labels.sticks' : false,
        			'chart.labels.x' : null,
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
        			'chart.colors' : [
        				'gradient(red:white:red)',
        				'gradient(green:white:green)',
        				'gradient(gray:white:gray)',
        				'gradient(blue:white:blue)',
        				'gradient(black:white:black)',
        				'gradient(gray:white:gray)',
        				'gradient(pink:white:pink)',
        				'gradient(blue:white:blue)',
        				'gradient(yellow:white:yellow)',
        				'gradient(green:white:green)',
        				'gradient(red:white:red)'
        			],
        			'chart.text.size' : 10,
        			'chart.text.boxed' : true,
        			'chart.text.halign' : 'left',
        			'chart.text.color' : 'black',
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.contextmenu' : null,
        			'chart.shadow' : false,
        			'chart.shadow.color' : '#666666',
        			'chart.shadow.blur' : 3,
        			'chart.shadow.offsetx' : 3,
        			'chart.shadow.offsety' : 3,
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
        			'chart.key.interactive.highlight.chart.stroke' : 'black',
        			'chart.key.interactive.highlight.chart.fill' : '#ffffff88',
        			'chart.key.interactive.highlight.label' : '#ff000022',
        			'chart.key.interactive.background.color' : [255, 255, 255, 0.1], // hsji
        			'chart.key.interactive.stroke.color' : [255, 255, 255, 1], // hsji
        			'chart.key.text.color' : 'black',
        			'chart.tooltips' : null,
        			'chart.tooltips.effect' : 'fade',
        			'chart.tooltips.css.class' : 'RGraph_tooltip',
        			'chart.tooltips.event' : 'onclick',
        			'chart.highlight.stroke' : [0, 0, 0, 0],
        			'chart.highlight.fill' : [255, 255, 255, 0.7],
        			'chart.tooltips.highlight' : true,
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
        			'chart.resizable' : false,
        			'chart.events.click' : null,
        			'chart.events.mousemove' : null,
        			'chart.clearto' : [0, 0, 0, 0]
        		};

        		// Store the data
        		for (var i = 0; i < data.length; ++i)
        		{
        			data[i] = parseFloat(data[i]);
        		}
        		this.data = data;


        		/**
        		 * Create the dollar objects so that functions can be added to them
        		 */
        		for (var i = 0; i < data.length; ++i)
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
        			if (RG.ISIE8)
        			{
        				this.set("chart.shadow", false);
        				this.set("chart.key.shadow", false);
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

        			// This stops the coords array from growing
        			this.coords = [];

        			/**
        			 * Stop this growing uncntrollably
        			 */
        			this.coordsText = [];

        			RG.DrawTitle(this, prop["chart.title"], this.gutterTop, null, prop["chart.title.size"] ? prop["chart.title.size"] : prop["chart.text.size"] + 2);
        			this.DrawFunnel();
        			/**
        			 * Setup the context menu if required
        			 */
        			if (prop["chart.contextmenu"])
        			{
        				RG.ShowContext(this);
        			}
        			/**
        			 * Draw the labels on the chart
        			 */
        			this.DrawLabels();
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
        		this.drawFunnel =
        			this.DrawFunnel = function ()
        		{
        			var width = ca.width - this.gutterLeft - this.gutterRight;
        			var height = ca.height - this.gutterTop - this.gutterBottom;
        			var total = RG.array_max(this.data);
        			var accheight = this.gutterTop;


        			/**
        			 * Loop through each segment to draw
        			 */

        			// Set a shadow if it's been requested
        			if (prop["chart.shadow"])
        			{
        				co.shadowColor = prop["chart.shadow.color"];
        				co.shadowBlur = prop["chart.shadow.blur"];
        				co.shadowOffsetX = prop["chart.shadow.offsetx"];
        				co.shadowOffsetY = prop["chart.shadow.offsety"];
        				RG.setElementCommonStyle(co, co.shadowColor, 3);
        				co.setElementShadowBlur(co.shadowBlur);
        				co.setElementShadowOffsetX(co.shadowOffsetX);
        				co.setElementShadowOffsetY(co.shadowOffsetY);
        			}

        			for (i = 0, len = this.data.length; i < len; ++i)
        			{
        				var firstvalue = this.data[0];
        				var firstwidth = (firstvalue / total) * width;
        				var curvalue = this.data[i];
        				var curwidth = (curvalue / total) * width;
        				var curheight = height / this.data.length;
        				var halfCurWidth = (curwidth / 2);
        				var nextvalue = this.data[i + 1];
        				var nextwidth = this.data[i + 1] ? (nextvalue / total) * width : null;
        				var halfNextWidth = (nextwidth / 2);
        				var center = this.gutterLeft + (firstwidth / 2);

        				var x1 = center - halfCurWidth;
        				var y1 = accheight;
        				var x2 = center + halfCurWidth;
        				var y2 = accheight;
        				var x3 = center + halfNextWidth;
        				var y3 = accheight + curheight;
        				var x4 = center - halfNextWidth;
        				var y4 = accheight + curheight;

        				if (nextwidth && i < this.data.length - 1)
        				{
        					co.beginPath();

        					co.strokeStyle = prop["chart.strokestyle"];
        					RG.setElementCommonStyle(co, co.strokeStyle, 2);
        					co.fillStyle = prop["chart.colors"][i];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);

        					co.moveTo(x1, y1);
        					co.lineTo(x2, y2);
        					co.lineTo(x3, y3);
        					co.lineTo(x4, y4);

        					co.closePath();

        					/**
        					 * Store the coordinates
        					 */
        					this.coords.push([x1, y1, x2, y2, x3, y3, x4, y4]);
        				}


        				// The redrawing if the shadow is on will do the stroke
        				if (!prop["chart.shadow"])
        				{
        					co.stroke();
        				}

        				co.fill();

        				accheight += curheight;
        			}

        			/**
        			 * If the shadow is enabled, redraw every segment, in order to allow for shadows going upwards
        			 */
        			if (prop["chart.shadow"])
        			{
        				RG.NoShadow(this);

        				for (i = 0; i < this.coords.length; ++i)
        				{
        					co.strokeStyle = prop["chart.strokestyle"];
        					RG.setElementCommonStyle(co, co.strokeStyle, 2);
        					co.fillStyle = prop["chart.colors"][i];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);

        					co.beginPath();
        					co.moveTo(this.coords[i][0], this.coords[i][1]);
        					co.lineTo(this.coords[i][2], this.coords[i][3]);
        					co.lineTo(this.coords[i][4], this.coords[i][5]);
        					co.lineTo(this.coords[i][6], this.coords[i][7]);
        					co.closePath();

        					co.stroke();
        					co.fill();
        				}
        			}

        			/**
        			 * Lastly, draw the key if necessary
        			 */
        			if (prop["chart.key"] && prop["chart.key"].length)
        			{
        				RG.DrawKey(this, prop["chart.key"], prop["chart.colors"]);
        			}
        		};




        		/**
        		 * Draws the labels
        		 */
        		this.drawLabels =
        			this.DrawLabels = function ()
        		{
        			/**
        			 * Draws the labels
        			 */
        			if (prop["chart.labels"] && prop["chart.labels"].length > 0)
        			{
        				var font = prop["chart.text.font"];
        				var size = prop["chart.text.size"];
        				var color = prop["chart.text.color"];
        				var labels = prop["chart.labels"];
        				var halign = prop["chart.text.halign"] == 'left' ? 'left' : 'center';
        				var bgcolor = prop["chart.text.boxed"] ? 'white' : null;

        				if (typeof prop["chart.labels.x"] == 'number')
        				{
        					var x = prop["chart.labels.x"];
        				}
        				else
        				{
        					var x = halign == 'left' ? (this.gutterLeft - 15) : ((ca.width - this.gutterLeft - this.gutterRight) / 2) + this.gutterLeft;
        				}

        				var objFont = new nexacro.Style_font();
        				objFont.set_face(font);
        				objFont.set_size(size);
        				co.font = size + 'pt ' + font;
        				co.setElementFont(objFont);
        				RG.NoShadow(this);
        				for (var j = 0; j < this.coords.length; ++j)
        				{
        					// MUST be "j"
        					co.beginPath();

        					// Set the color back to black
        					co.strokeStyle = 'black';
        					RG.setElementCommonStyle(co, co.strokeStyle, 2);
        					co.fillStyle = color;
        					RG.setElementCommonStyle(co, co.fillStyle, 1);

        					// Turn off any shadow
        					// RG.NoShadow(this);
        					var label = labels[j];
        					RG.text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : x,
        						'y' : this.coords[j][1],
        						'text' : label,
        						'valign' : 'center',
        						'halign' : halign,
        						'bounding' : prop["chart.text.boxed"],
        						'boundingFill' : bgcolor,
        						'tag' : 'labels'
        					});
        					if (prop["chart.labels.sticks"])
        					{
        						/**
        						 * Measure the text
        						 */

        						var labelWidth = RG._measureText(label, objFont)[0];
        						// var labelWidth    = co.measureText(label).width;

        						/**
        						 * Draw the horizontal indicator line
        						 */
        						co.beginPath();
        						co.strokeStyle = 'gray';
        						RG.setElementCommonStyle(co, co.strokeStyle, 2);
        						co.moveTo(x + labelWidth + 10, ma.round(this.coords[j][1]));
        						co.lineTo(this.coords[j][0] - 10, ma.round(this.coords[j][1]));
        						co.stroke();
        					}
        				}

        				/**
        				 * This draws the last labels if defined
        				 */
        				var lastLabel = labels[j];

        				if (lastLabel)
        				{
        					RG.text2(this, {
        						'font' : font,
        						'size' : size,
        						'x' : x,
        						'y' : this.coords[j - 1][5],
        						'text' : lastLabel,
        						'valign' : 'center',
        						'halign' : halign,
        						'bounding' : prop["chart.text.boxed"],
        						'boundingFill' : bgcolor,
        						'tag' : 'labels'
        					});

        					if (prop["chart.labels.sticks"])
        					{
        						/**
        						 * Measure the text
        						 */
        						// co.font = size + 'pt ' + font;
        						var labelWidth = RG._measureText(lastLabel, objFont)[0];
        						// var labelWidth    = co.measureText(lastLabel).width;

        						/**
        						 * Draw the horizontal indicator line
        						 */
        						co.beginPath();
        						co.strokeStyle = 'gray';
        						RG.setElementCommonStyle(co, co.strokeStyle, 2);
        						// co.moveTo(x + labelWidth + 10, ma.round(this.coords[j][1]));
        						// co.lineTo(this.coords[j][0] - 10, ma.round(this.coords[j][1]));

        						co.moveTo(x + labelWidth + 10, Math.round(this.coords[j - 1][7]));
        						co.lineTo(this.coords[j - 1][6] - 10, Math.round(this.coords[j - 1][7]));
        						co.stroke();
        					}
        				}
        			}
        		};




        		/**
        		 * Gets the appropriate segment that has been highlighted
        		 */
        		this.getShape =
        			this.getSegment = function (e)
        		{
        			// var canvas = ca = e.target;
        			// var co          = this.context;
        			// var prop        = this.properties;
        			var coords = this.coords;
        			var mouseCoords = RG.getMouseXY(e);
        			var x = mouseCoords[0];
        			var y = mouseCoords[1];

        			for (i = 0, len = coords.length; i < len; ++i)
        			{
        				var segment = coords[i];

        				// Path testing
        				co.beginPath();
        				co.moveTo(segment[0], segment[1]);
        				co.lineTo(segment[2], segment[3]);
        				co.lineTo(segment[4], segment[5]);
        				co.lineTo(segment[6], segment[7]);
        				co.lineTo(segment[8], segment[9]);

        				if (co.isPointInPath(x, y))
        				{
        					var tooltip = RG.parseTooltipText(prop["chart.tooltips"], i);
        					return {
        						0 : this,
        						1 : coords,
        						2 : i,
        						'object' : this,
        						'coords' : segment,
        						'index' : i,
        						'tooltip' : tooltip,
        						'x' : x,
        						'y' : y
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
        			if (prop["chart.tooltips.highlight"])
        			{
        				if (typeof prop["chart.highlight.style"] === 'function')
        				{
        					(prop["chart.highlight.style"])(shape);
        					return;
        				}



        				var coords = shape["coords"];

        				RG.pa2(
        					co,
        					'b m % % l % % l % % l % % c s % f %',
        					coords[0], coords[1],
        					coords[2], coords[3],
        					coords[4], coords[5],
        					coords[6], coords[7],
        					prop["chart.highlight.stroke"],
        					prop["chart.highlight.fill"]
        				);
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
        		 var coords = obj.coords[tooltip.__index__];

        		 var x1 = coords[0];
        		 var y1 = coords[1];
        		 var x2 = coords[2];
        		 var y2 = coords[3];
        		 var x3 = coords[4];
        		 var y3 = coords[5];
        		 var x4 = coords[6];
        		 var y4 = coords[7];

        		 var coordW     = x2 - x1;
        		 var coordX     = x1 + (coordW / 2);
        		 var canvasXY   = RG.getCanvasXY(ca);
        		 var mouseXY    = RG.getMouseXY(window.event);
        		 var gutterLeft = prop['chart.gutter.left'];
        		 var gutterTop  = prop['chart.gutter.top'];
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
        		 * This allows for easy specification of gradients
        		 */
        		this.parseColors = function ()
        		{
        			// Save the original colors so that they can be restored when the canvas is reset
        			if (this.original_colors.length === 0)
        			{
        				this.original_colors["chart.colors"] = RG.array_clone(prop["chart.colors"]);
        				this.original_colors["chart.key.colors"] = RG.array_clone(prop["chart.key.colors"]);
        				this.original_colors["chart.highlight.fill"] = RG.array_clone(prop["chart.highlight.fill"]);
        				this.original_colors["chart.highlight.stroke"] = RG.array_clone(prop["chart.highlight.stroke"]);
        				this.original_colors["chart.strokestyle"] = RG.array_clone(prop["chart.strokestyle"]);
        			}

        			var colors = prop["chart.colors"];

        			for (var i = 0; i < colors.length; ++i)
        			{
        				colors[i] = this.parseSingleColorForHorizontalGradient(colors[i]);
        			}

        			var keyColors = prop["chart.key.colors"];
        			if (keyColors)
        			{
        				for (var i = 0; i < keyColors.length; ++i)
        				{
        					keyColors[i] = this.parseSingleColorForHorizontalGradient(keyColors[i]);
        				}
        			}
        			prop["chart.strokestyle"] = this.parseSingleColorForVerticalGradient(prop["chart.strokestyle"]);
        			prop["chart.highlight.stroke"] = this.parseSingleColorForHorizontalGradient(prop["chart.highlight.stroke"]);
        			prop["chart.highlight.fill"] = this.parseSingleColorForHorizontalGradient(prop["chart.highlight.fill"]);
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
        		this.parseSingleColorForHorizontalGradient = function (color)
        		{
        			if (!color || typeof (color) != 'string')
        			{
        				return color;
        			}

        			var grad;
        			if (color.match(/^gradient\((.*)\)$/i))
        			{
        				grad = RG.createLinearGradient(co, prop["chart.gutter.left"], 0, ca.width - prop["chart.gutter.right"], 0, color);
        			}

        			return grad ? grad : color;
        		};




        		/**
        		 * This parses a single color value
        		 */
        		this.parseSingleColorForVerticalGradient = function (color)
        		{
        			if (!color || typeof (color) != 'string')
        			{
        				return color;
        			}
        			var grad;
        			if (color.match(/^gradient\((.*)\)$/i))
        			{
        				grad = RG.createLinearGradient(co, 0, prop["chart.gutter.top"], 0, ca.height - prop["chart.gutter.bottom"], color);
        			}
        			return grad ? grad : color;
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

        			if (coords && coords.length == 8)
        			{
        				var pre_linewidth = co.lineWidth;

        				co.lineWidth = 2;
        				co.setElementLineWidth(co.lineWidth);
        				co.strokeStyle = prop["chart.key.interactive.highlight.chart.stroke"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.fillStyle = prop["chart.key.interactive.highlight.chart.fill"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				co.beginPath();
        				co.moveTo(coords[0], coords[1]);
        				co.lineTo(coords[2], coords[3]);
        				co.lineTo(coords[4], coords[5]);
        				co.lineTo(coords[6], coords[7]);
        				co.closePath();
        				co.fill();
        				co.stroke();

        				// Reset the linewidth
        				co.lineWidth = pre_linewidth;
        				co.setElementLineWidth(co.lineWidth);
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
        		 * Always now regsiter the object
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
