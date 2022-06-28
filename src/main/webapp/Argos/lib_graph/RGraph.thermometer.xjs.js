//XJS=RGraph.thermometer.xjs
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

        if (!nexacro.RGraph.Thermometer)
        {
        	/**
        	 * The chart constructor. This function sets up the object. It takes the ID (the HTML attribute) of the canvas as the
        	 * first argument and the data as the second. If you need to change this, you can.
        	 *
        	 * NB: If tooltips are ever implemented they must go below the use event listeners!!
        	 *
        	 * @param string id    The canvas tag ID
        	 * @param number min   The minimum value
        	 * @param number max   The maximum value
        	 * @param number value The value reported by the thermometer
        	 */
        	nexacro.RGraph.Thermometer = function (conf)
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
        		this.uid = RG.CreateUID();
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();
        		this.colorsParsed = false;
        		this.type = 'thermometer';
        		this.isRGraph = true;
        		this.min = RG.stringsToNumbers(conf.min);
        		this.max = RG.stringsToNumbers(conf.max);
        		this.value = RG.stringsToNumbers(conf.value);
        		this.coords = [];
        		this.graphArea = [];
        		this.currentValue = null;
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		this.properties =
        			{
        			'chart.style.background' : null,
        			'chart.style.gradation' : null,
        			'chart.style.border' : null,
        			'chart.style.bordertype' : null,
        			'chart.linewidth' : 1,
        			'chart.background.color' : 'white',
        			'chart.strokestyle' : 'black',
        			'chart.colors' : ['#ff0000'],
        			'chart.gutter.left' : 25,
        			'chart.gutter.right' : 25,
        			'chart.gutter.top' : 25,
        			'chart.gutter.bottom' : 25,
        			'chart.ticksize' : 2,
        			'chart.text.color' : 'black',
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.size' : 12,
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.numticks' : 10,
        			'chart.units.pre' : '',
        			'chart.units.post' : '',
        			'chart.zoom.factor' : 1.5,
        			'chart.zoom.fade.in' : true,
        			'chart.zoom.fade.out' : true,
        			'chart.zoom.hdir' : 'right',
        			'chart.zoom.vdir' : 'down',
        			'chart.zoom.frames' : 25,
        			'chart.zoom.delay' : 16.666,
        			'chart.zoom.shadow' : true,
        			'chart.zoom.background' : true,
        			'chart.title' : '',
        			'chart.title.side' : '',
        			'chart.title.side.bold' : true,
        			'chart.title.side.font' : null,
        			'chart.shadow' : true,
        			'chart.shadow.offsetx' : 0,
        			'chart.shadow.offsety' : 0,
        			'chart.shadow.blur' : 15,
        			'chart.shadow.color' : '#dddddd',
        			'chart.resizable' : false,
        			'chart.contextmenu' : null,
        			'chart.adjustable' : false,
        			'chart.value.label' : true,
        			'chart.value.label.decimals' : null,
        			'chart.value.label.thousand' : ',',
        			'chart.value.label.point' : '.',
        			'chart.labels.count' : 5,
        			'chart.scale.visible' : false,
        			'chart.scale.decimals' : 0,
        			'chart.annotatable' : false,
        			'chart.annotate.color' : 'black',
        			'chart.scale.decimals' : 0,
        			'chart.scale.point' : '.',
        			'chart.scale.thousand' : ',',
        			'chart.tooltips' : null,
        			'chart.tooltips.highlight' : true,
        			'chart.tooltips.effect' : 'fade',
        			'chart.tooltips.event' : 'on___click', // disable
        			'chart.highlight.stroke' : [0, 0, 0, 0],
        			'chart.highlight.fill' : [255, 255, 255, 0.7],
        			'chart.clearto' : [0, 0, 0, 0],
        			'chart.bulb.bottom.radius.adjust' : 0,
        			'chart.bulb.bottom.radius' : null
        		};



        		/**
        		 * A simple check that the browser has canvas support
        		 */
        		if (!this.canvas)
        		{
        			alert('[THERMOMETER] No canvas support');
        			return;
        		}

        		/**
        		 * The thermometer can only have one data point so only this.$0 needs to be created
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
        		 * A setter.
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
        			 * Change of name
        			 */
        			if (name == 'chart.ylabels.count')
        			{
        				name = 'chart.labels.count';
        			}
        			prop[name.toLowerCase()] = value;

        			return this;
        		};




        		/**
        		 * A getter.
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

        			return prop[name];
        		};




        		/**
        		 * Draws the thermometer
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
        			// Fire the custom RGraph onbeforedraw event (which should be fired before the chart is drawn)
        			RG.fireCustomEvent(this, 'onbeforedraw');

        			// Max/min boundary constraints
        			this.value = ma.min(this.max, this.value);
        			this.value = ma.max(this.min, this.value);

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
        			 * Stop this growing uncontrollably
        			 */
        			this.coordsText = [];

        			// This is new in May 2011 and facilitates indiviual gutter settings,
        			// eg chart.gutter.left
        			this.gutterLeft = prop["chart.gutter.left"];
        			this.gutterRight = prop["chart.gutter.right"];
        			this.gutterTop = prop["chart.gutter.top"];
        			this.gutterBottom = prop["chart.gutter.bottom"];


        			// Get the scale
        			this.scale2 = RG.getScale2(
        				this, {
        				max : this.max,
        				min : this.min,
        				strict : true,
        				'scale.thousand' : prop["chart.scale.thousand"],
        				'scale.point' : prop["chart.scale.point"],
        				'scale.decimals' : prop["chart.scale.decimals"],
        				'ylabels.count' : prop["chart.labels.count"],
        				'scale.round' : prop["chart.scale.round"],
        				'units.pre' : prop["chart.units.pre"],
        				'units.post' : prop["chart.units.post"]
        			}
        			);

        			// Work out the coordinates and positions

        			this.x = this.gutterLeft;
        			this.width = ca.width - this.gutterLeft - this.gutterRight;
        			this.y = this.gutterTop + (this.width / 2);


        			this.halfWidth = this.width / 2;

        			this.bulbTopCenterx = this.gutterLeft + (this.width / 2);
        			this.bulbTopCentery = this.gutterTop + (this.width / 2);
        			this.bulbTopRadius = this.width / 2;
        			this.bulbBottomCenterx = this.gutterLeft + (this.width / 2);
        			this.bulbBottomRadius = typeof prop["chart.bulb.bottom.radius"] === 'number' ? prop["chart.bulb.bottom.radius"] : this.width * 0.75 + prop["chart.bulb.bottom.radius.adjust"];
        			this.bulbBottomCentery = ca.height - this.gutterBottom - this.bulbBottomRadius;

        			this.scaleTopY = this.bulbTopCentery;
        			this.scaleBottomY = this.bulbBottomCentery - this.bulbBottomRadius;
        			this.scaleHeight = this.scaleBottomY - this.scaleTopY;

        			this.height = this.getYCoord(this.min) - this.getYCoord(this.value);

        			this.coords[0] = [
        				this.x,
        				this.getYCoord(this.value),
        				this.width,
        				this.height
        			];

        			// Draw the background
        			this.drawBackground();
        			// Draw the bar that represents the value
        			this.drawBar();

        			// Draw the tickmarks
        			this.drawTickMarks();

        			/**
        			 * Draw the label
        			 */
        			this.drawLabels();



        			/**
        			 * Draw the title
        			 */
        			if (prop["chart.title"])
        			{
        				this.drawTitle();
        			}

        			/**
        			 * Draw the side title
        			 */
        			if (prop["chart.title.side"])
        			{
        				this.drawSideTitle();
        			}

        			/**
        			 * This function enables resizing
        			 */
        			if (prop["chart.resizable"])
        			{
        				RG.allowResizing(this);
        			}




        			/**
        			 * Setup the context menu if required
        			 */
        			if (prop["chart.contextmenu"])
        			{
        				RG.showContext(this);
        			}




        			/**
        			 * This installs the event listeners
        			 */
        			RG.installEventListeners(this);


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
        			 * Fire the custom RGraph ondraw event (which should be fired when you have drawn the chart)
        			 */
        			RG.fireCustomEvent(this, 'ondraw');

        			return this;
        		};

        		/**
        		 * Draws the thermometer itself
        		 */
        		this.drawBackground =
        			this.DrawBackground = function ()
        		{
        			if (prop["chart.shadow"])
        			{
        				RG.setShadow(
        					this,
        					prop["chart.shadow.color"],
        					prop["chart.shadow.offsetx"],
        					prop["chart.shadow.offsety"],
        					prop["chart.shadow.blur"]
        				);
        			}

        			// Draw the outline and background
        			this.pathBackground();
        			co.stroke();
        			co.fill();
        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);
        		};

        		/**
        		 * This draws the bar that indicates the value of the thermometer. It makes use
        		 * of the .pathBar() function.
        		 */
        		this.drawBar =
        			this.DrawBar = function ()
        		{
        			this.pathBar();
        			co.fillStyle = prop["chart.colors"][0];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.fill();
        			// RG.pa2(co, 'f %', prop['chart.colors'][0]);
        		};

        		//
        		// This function draws the path that indicates the specified value. It
        		// doesn't stroke or fill the path.
        		//
        		this.pathBar = function ()
        		{
        			var barHeight = this.coords[0][3],y = (this.coords[0][1] + this.coords[0][3]) - barHeight;

        			RG.noShadow(this);
        			co.beginPath();
        			co.moveTo(this.coords[0][0], y);
        			co.rect(
        				this.coords[0][0],
        				y,
        				this.coords[0][2],
        				this.bulbBottomCentery - y);
        			co.moveTo(this.bulbBottomCenterx, this.bulbBottomCentery);
        			co.arc(
        				this.bulbBottomCenterx,
        				this.bulbBottomCentery,
        				this.bulbBottomRadius,
        				0,
        				6.28,
        				false);
        			co.closePath();
        		};

        		//
        		// This function draws the path that indicates that encompasses the
        		// background. It's used by the overChartArea() function.
        		//
        		this.pathBackground = function ()
        		{
        			co.strokeStyle = prop["chart.strokestyle"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.fillStyle = prop["chart.background.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.lineWidth = prop["chart.linewidth"];
        			co.setElementLineWidth(co.lineWidth);

        			co.beginPath();

        			co.moveTo(
        				this.bulbTopCenterx,
        				this.bulbTopCentery);

        			co.arc(
        				this.bulbTopCenterx,
        				this.bulbTopCentery,
        				this.bulbTopRadius,
        				0,
        				6.28,
        				false);

        			co.moveTo(
        				this.bulbBottomCenterx,
        				this.bulbBottomCentery);
        			co.arc(
        				this.bulbBottomCenterx,
        				this.bulbBottomCentery,
        				this.bulbBottomRadius,
        				0,
        				6.28,
        				false);
        			co.moveTo(
        				this.x,
        				this.scaleTopY);
        			co.rect(
        				this.x,
        				this.scaleTopY,
        				this.coords[0][2],
        				this.bulbBottomCentery - this.scaleTopY);

        			co.closePath();
        		};

        		/**
        		 * Draws the tickmarks of the thermometer
        		 */
        		this.drawTickMarks =
        			this.DrawTickMarks = function ()
        		{
        			if (prop["chart.numticks"])
        			{
        				var ticksize = prop["chart.ticksize"];

        				co.strokeStyle = prop["chart.strokestyle"];
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.lineWidth = prop["chart.linewidth"] / 2;
        				co.setElementLineWidth(co.lineWidth);

        				// Left hand side tickmarks
        				co.beginPath();
        				for (var i = 0; i <= prop["chart.numticks"]; ++i)
        				{
        					var y = this.scaleBottomY - ((this.scaleHeight / prop["chart.numticks"]) * i);

        					co.moveTo(this.gutterLeft, ma.round(y));
        					co.lineTo(this.gutterLeft + ticksize, ma.round(y));

        					// Right hand side tickmarks
        					co.moveTo(ca.width - this.gutterRight, ma.round(y));
        					co.lineTo(ca.width - this.gutterRight - ticksize, ma.round(y));
        				}
        				co.stroke();

        				co.lineWidth = 1;
        				co.setElementLineWidth(co.lineWidth);
        			}
        		};




        		/**
        		 * Draws the labels of the thermometer. Now (4th August 2011) draws
        		 * the scale too
        		 */
        		this.drawLabels =
        			this.DrawLabels = function ()
        		{
        			/**
        			 * This draws draws the label that sits at the top of the chart
        			 */
        			if (prop["chart.value.label"])
        			{
        				co.fillStyle = prop["chart.text.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				// Weird...
        				var text = prop["chart.scale.visible"] ?
        					RG.numberFormat(this, this.value.toFixed(typeof prop["chart.value.label.decimals"] == 'number' ? prop["chart.value.label.decimals"] : prop["chart.scale.decimals"]))
        					 :
        					RG.numberFormat(this, this.value.toFixed(typeof prop["chart.value.label.decimals"] == 'number' ? prop["chart.value.label.decimals"] : prop["chart.scale.decimals"]), prop["chart.units.pre"], prop["chart.units.post"]);

        				RG.text2(this, {
        					font : prop["chart.text.font"],
        					size : prop["chart.text.size"],
        					x : this.coords[0][0] + (this.coords[0][2] / 2),
        					y : this.coords[0][1] + 7,
        					text : text,
        					valign : 'top',
        					halign : 'center',
        					bounding : true,
        					boundingFill : 'white',
        					tag : 'value.label'
        				});
        			}


        			/**
        			 * Draw the scale if requested
        			 */
        			if (prop["chart.scale.visible"])
        			{
        				this.drawScale();
        			}
        		};




        		/**
        		 * Draws the title
        		 */
        		this.drawTitle =
        			this.DrawTitle = function ()
        		{
        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			RG.text2(this, {
        				font : prop["chart.text.font"],
        				size : prop["chart.text.size"] + 2,
        				x : this.gutterLeft + (this.width / 2),
        				y : this.gutterTop - 3,
        				text : String(prop["chart.title"]),
        				valign : 'bottom',
        				halign : 'center',
        				bold : true,
        				tag : 'title'
        			});
        		};




        		/**
        		 * Draws the title
        		 */
        		this.drawSideTitle =
        			this.DrawSideTitle = function ()
        		{
        			var font = prop["chart.title.side.font"] ? prop["chart.title.side.font"] : prop["chart.text.font"];
        			var size = prop["chart.title.side.size"] ? prop["chart.title.side.size"] : prop["chart.text.size"] + 2;

        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			RG.text2(this, {
        				font : font,
        				size : size + 2,
        				x : this.gutterLeft - 3,
        				y : (this.scaleHeight / 2) + this.gutterTop + this.bulbTopRadius,
        				text : String(prop["chart.title.side"]),
        				valign : 'bottom',
        				halign : 'center',
        				angle : 270,
        				bold : prop["chart.title.side.bold"],
        				tag : 'title.side',
        				accessible : false
        			});
        		};




        		/**
        		 * Draw the scale if requested
        		 */
        		this.drawScale =
        			this.DrawScale = function ()
        		{
        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			var font = prop["chart.text.font"],size = prop["chart.text.size"],units_pre = prop["chart.units.pre"],units_post = prop["chart.units.post"],decimals = prop["chart.scale.decimals"],numLabels = prop["chart.labels.count"],step = (this.max - this.min) / numLabels;

        			for (var i = 1; i <= numLabels; ++i)
        			{
        				var x = ca.width - this.gutterRight + (prop["chart.linewidth"] / 2),y = ca.height - this.gutterBottom - (2 * this.bulbBottomRadius) - ((this.scaleHeight / numLabels) * i),text = RG.numberFormat(
        					this,
        					String((this.min + (i * step)).toFixed(decimals)),
        					units_pre,
        					units_post
        				);

        				RG.text2(this, {
        					font : font,
        					size : size,
        					x : x + 6,
        					y : y,
        					text : text,
        					valign : 'center',
        					tag : 'scale'
        				});
        			}

        			// Draw zero
        			RG.text2(this, {
        				font : font,
        				size : size,
        				x : x + 6,
        				y : this.bulbBottomCentery - this.bulbBottomRadius,
        				text : RG.numberFormat(
        					this,
        					this.min.toFixed(decimals),
        					units_pre,
        					units_post
        				),
        				valign : 'center',
        				tag : 'scale'
        			});
        		};




        		/**
        		 * Returns the focused/clicked bar
        		 *
        		 * @param event  e The event object
        		 */
        		this.getShape =
        			this.getBar = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e),mouseX = mouseXY[0],mouseY = mouseXY[1];

        			for (var i = 0; i < this.coords.length; i++)
        			{
        				var coords = this.coords[i],left = coords[0],top = coords[1],width = coords[2],height = coords[3];
        				this.pathBar();

        				// if (    (mouseX >= left && mouseX <= (left + width) && mouseY >= top && mouseY <= (top + height + this.bulbBottomRadius)) // The bulbBottomRadius is added as the rect and the bulb don't fully cover the red bit
        				// || RG.getHypLength(this.bulbBottomCenterX, this.bulbBottomCenterY, mouseX, mouseY) <= this.bulbBottomRadius) {

        				if (co.isPointInPath(mouseX, mouseY))
        				{
        					var tooltip = RG.parseTooltipText ? RG.parseTooltipText(prop["chart.tooltips"], i) : '';
        					return {
        						0 : this,
        						object : this,
        						1 : left,
        						x : left,
        						2 : top,
        						y : top,
        						3 : width,
        						width : width,
        						4 : height,
        						height : height,
        						5 : i,
        						index : i,
        						tooltip : tooltip,
        						x1 : mouseX,
        						y1 : mouseY
        					};
        				}
        			}

        			return null;
        		};




        		/**
        		 * This function returns the value that the mouse is positioned t, regardless of
        		 * the actual indicated value.
        		 *
        		 * @param object e The event object (or it can also be an two element array containing the X/Y coords)
        		 */
        		this.getValue = function (arg)
        		{
        			if (arg.length === 2)
        			{
        				var mouseX = arg[0],mouseY = arg[1];
        			}
        			else
        			{
        				var mouseXY = RG.getMouseXY(arg),mouseX = mouseXY[0],mouseY = mouseXY[1];
        			}

        			var value = (this.scaleHeight - (mouseY - this.scaleTopY)) / this.scaleHeight;
        			value *= (this.max - this.min);
        			value += this.min;

        			value = ma.max(value, this.min);
        			value = ma.min(value, this.max);

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
        			if (prop["chart.tooltips.highlight"])
        			{
        				if (typeof prop["chart.highlight.style"] === 'function')
        				{
        					(prop["chart.highlight.style"])(shape);
        					return;
        				}

        				this.pathBar();

        				RG.pa2(co, 's % f %',
        					prop["chart.highlight.stroke"],
        					prop["chart.highlight.fill"]
        				);
        			}
        		};




        		/**
        		 * The getObjectByXY() worker method. Don't call this - call:
        		 *
        		 * RG.ObjectRegistry.getObjectByXY(e)
        		 *
        		 * @param object e The event object
        		 */
        		this.getObjectByXY = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e),mouseX = mouseXY[0],mouseY = mouseXY[1];

        			// Draw the background shape (don't stroke or fill it)
        			this.pathBackground();

        			if (co.isPointInPath(mouseX, mouseY))
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
        			 * Handle adjusting for the Thermometer
        			 */
        			if (prop["chart.adjustable"] && RG.Registry.get('chart.adjusting') && RG.Registry.Get('chart.adjusting').uid == this.uid)
        			{
        				var mouseXY = RG.getMouseXY(e),value = this.getValue(e);

        				if (typeof (value) == 'number')
        				{
        					// Fire the onadjust event
        					RG.fireCustomEvent(this, 'onadjust');

        					this.value = Number(value.toFixed(prop["chart.scale.decimals"]));

        					RG.redrawCanvas(ca);
        				}
        			}
        		};




        		/**
        		 * Returns the appropriate Y coord for a value
        		 *
        		 * @param number value The value to return the coord for
        		 */
        		this.getYCoord = function (value)
        		{
        			if (value > this.max || value < this.min)
        			{
        				return null;
        			}

        			var y = ma.abs(value - this.min) / ma.abs(this.max - this.min);
        			y = y * (this.scaleBottomY - this.scaleTopY);


        			return this.scaleBottomY - y;
        		};




        		/**
        		 * This returns true/false as to whether the cursor is over the chart area.
        		 * The cursor does not necessarily have to be over the bar itself.
        		 */
        		this.overChartArea = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e),mouseX = mouseXY[0],mouseY = mouseXY[1];

        			this.pathBackground();

        			return co.isPointInPath(mouseX, mouseY);
        		};




        		/**
        		 * This allows for easy specification of gradients
        		 */
        		this.parseColors = function ()
        		{
        			// Save the original colors so that they can be restored when the canvas is reset
        			if (this.original_colors.length === 0)
        			{
        				this.original_colors["chart.colors"] = RG.arrayClone(prop["chart.colors"]);
        			}

        			var colors = prop["chart.colors"];

        			for (var i = 0; i < colors.length; ++i)
        			{
        				colors[i] = this.parseSingleColorForGradient(colors[i]);
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
        			if (!color)
        			{
        				return color;
        			}
        			var grad;
        			if (typeof color === 'string' && color.match(/^gradient\((.*)\)$/i))
        			{
        				// Create the gradient
        				grad = RG.createLinearGradient(co,
        					prop["chart.gutter.left"],
        					0,
        					ca.width - prop["chart.gutter.right"],
        					0,
        					color
        				);
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
        		 * @param object   obj The chart object
        		 * @param              Not used - pass null
        		 * @param function     An optional callback function
        		 */
        		this.grow = function ()
        		{
        			var obj = this,callback = arguments[1] || function ()
        			{
        			},opt = arguments[0] || {
        			},frames = opt.frames ? opt.frames : 10,origValue = Number(obj.currentValue),newValue = obj.value;

        			if (RG.ISIE8)
        			{
        				this.draw();
        				callback(obj);
        				return;
        			}
        			newValue = ma.min(newValue, this.max);
        			newValue = ma.max(newValue, this.min);

        			var diff = newValue - origValue,step = (diff / frames),frame = 0;


        			function iterate ()
        			{
        				// Set the new value
        				obj.value = (step * frame) + origValue;
        				RG.effectCanvasShow(obj.canvas, true);
        				RG.clear(obj.canvas);
        				RG.redrawCanvas(obj.canvas);
        				RG.effectCanvasShow(obj.canvas, false, 20);

        				if (frame < frames)
        				{
        					frame++;
        					RG.Effects_updateCanvas(iterate);
        				}
        				else
        				{
        					callback(obj);
        				}
        			}

        			iterate();

        			return this;
        		};





        		/**
        		 * Now, because canvases can support multiple charts, canvases must always be registered
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
