//XJS=RGraph.gantt.xjs
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
        if (!nexacro.RGraph.Gantt)
        {
        	/**
        	 * The gantt chart constructor
        	 *
        	 * @param object conf The configuration object. You can also give seperate arguments if you prefer:
        	 *                    var foo = new RG.Gantt('cvs', [[0,50],[25,50],[50,50]]);
        	 */
        	nexacro.RGraph.Gantt = function (conf)
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
        		var id = this.id;
        		var canvas = this.canvas;
        		this.canvas.__object__ = this;
        		this.type = 'gantt';
        		this.isRGraph = true;
        		this.uid = RG.CreateUID();
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();
        		this.data = data;
        		this.colorsParsed = false;
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		// Set some defaults
        		this.properties =
        			{
        			'chart.style.background' : null,
        			'chart.style.gradation' : null,
        			'chart.style.border' : null,
        			'chart.style.bordertype' : null,
        			'chart.background.barcolor1' : [255, 255, 255, 0.1],
        			'chart.background.barcolor2' : [255, 255, 255, 0.1],
        			'chart.background.grid' : true,
        			'chart.background.grid.width' : 1,
        			'chart.background.grid.color' : '#dddddd',
        			'chart.background.grid.hsize' : 20,
        			'chart.background.grid.vsize' : 20,
        			'chart.background.grid.hlines' : true,
        			'chart.background.grid.vlines' : true,
        			'chart.background.grid.border' : true,
        			'chart.background.grid.autofit' : true,
        			'chart.background.grid.autofit.align' : true,
        			'chart.background.grid.autofit.numhlines' : 7,
        			'chart.background.grid.autofit.numvlines' : null,
        			'chart.vbars' : [],
        			'chart.hbars' : [],
        			'chart.text.size' : 10,
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.color' : 'black',
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.gutter.left' : 75,
        			'chart.gutter.right' : 25,
        			'chart.gutter.top' : 35,
        			'chart.gutter.bottom' : 25,
        			'chart.labels' : [],
        			'chart.labels.color' : null,
        			'chart.labels.align' : 'bottom',
        			'chart.labels.inbar' : null,
        			'chart.labels.inbar.color' : 'black',
        			'chart.labels.inbar.bgcolor' : null,
        			'chart.labels.inbar.align' : 'left',
        			'chart.labels.inbar.size' : 10,
        			'chart.labels.inbar.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.labels.inbar.above' : false,
        			'chart.labels.percent' : true,
        			'chart.vmargin' : 2,
        			'chart.title' : '',
        			'chart.title.background' : null,
        			'chart.title.x' : null,
        			'chart.title.y' : null,
        			'chart.title.bold' : true,
        			'chart.title.font' : null,
        			'chart.title.yaxis' : '',
        			'chart.title.yaxis.bold' : true,
        			'chart.title.yaxis.pos' : null,
        			'chart.title.yaxis.color' : null,
        			'chart.title.yaxis.position' : 'right',
        			'chart.title.yaxis.x' : null,
        			'chart.title.yaxis.y' : null,
        			'chart.title.xaxis.x' : null,
        			'chart.title.xaxis.y' : null,
        			'chart.title.xaxis.bold' : true,
        			'chart.title.xaxis.color' : null,
        			'chart.title.x' : null,
        			'chart.title.y' : null,
        			'chart.title.halign' : null,
        			'chart.title.valign' : null,
        			'chart.borders' : true,
        			'chart.defaultcolor' : '#ffffff99',
        			'chart.coords' : [],
        			'chart.tooltips' : null,
        			'chart.tooltips.effect' : 'fade',
        			'chart.tooltips.highlight' : true,
        			'chart.tooltips.event' : 'onclick',
        			'chart.highlight.stroke' : [0, 0, 0, 0],
        			'chart.highlight.fill' : [255, 255, 255, 0.7],
        			'chart.xmin' : 0,
        			'chart.xmax' : 0,
        			'chart.contextmenu' : null,
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
        			'chart.resizable' : false,
        			'chart.resize.handle.adjust' : [0, 0],
        			'chart.resize.handle.background' : null,
        			'chart.adjustable' : false,
        			'chart.adjustable.only' : null,
        			'chart.events.click' : null,
        			'chart.events.mousemove' : null,
        			'chart.clearto' : [0, 0, 0, 0]
        		};


        		/**
        		 * Create the dollar objects so that functions can be added to them
        		 */
        		if (!data)
        		{
        			alert('[GANTT] The Gantt chart event data is now supplied as the second argument to the constructor - please update your code');
        		}
        		else
        		{
        			// Go through the data converting relevant args to numbers
        			for (var i = 0,idx = 0; i < data.length; ++i)
        			{
        				if (typeof data[i][0] === 'string')
        				{
        					data[i][0] = parseFloat(data[i][0]);
        				}
        				if (typeof data[i][1] === 'string')
        				{
        					data[i][1] = parseFloat(data[i][1]);
        				}
        				if (typeof data[i][2] === 'string')
        				{
        					data[i][2] = parseFloat(data[i][2]);
        				}
        				if (typeof data[i][7] === 'string')
        				{
        					data[i][7] = parseFloat(data[i][7]);
        				}
        			}
        		}

        		// Linearize the data (DON'T use RG.arrayLinearize() here)
        		for (var i = 0,idx = 0; i < data.length; ++i)
        		{
        			if (RG.isArray(this.data[i][0]))
        			{
        				for (var j = 0; j < this.data[i].length; ++j)
        				{
        					this['$' + (idx++)] = {
        					};
        				}
        			}
        			else
        			{
        				this['$' + (idx++)] = {
        				};
        			}
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
        		 * A peudo setter
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

        			if (name == 'chart.margin')
        			{
        				name = 'chart.vmargin';
        			}

        			if (name == 'chart.events')
        			{
        				alert('[GANTT] The chart.events property is deprecated - supply the events data as an argument to the constructor instead');
        				this.data = value;
        			}

        			prop[name] = value;

        			return this;
        		};

        		/**
        		 * A peudo getter
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

        			if (name == 'chart.margin')
        			{
        				name = 'chart.vmargin';
        			}

        			return prop[name.toLowerCase()];
        		};

        		/**
        		 * Draws the chart
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
        			 * This is new in May 2011 and facilitates indiviual gutter settings,
        			 * eg chart.gutter.left
        			 */
        			this.gutterLeft = prop["chart.gutter.left"];
        			this.gutterRight = prop["chart.gutter.right"];
        			this.gutterTop = prop["chart.gutter.top"];
        			this.gutterBottom = prop["chart.gutter.bottom"];

        			/**
        			 * Stop this growing uncntrollably
        			 */
        			this.coordsText = [];

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
        			 * Work out the graphArea
        			 */
        			this.graphArea = ca.width - this.gutterLeft - this.gutterRight;
        			this.graphHeight = ca.height - this.gutterTop - this.gutterBottom;
        			this.numEvents = this.data.length;
        			this.barHeight = this.graphHeight / this.numEvents;
        			this.halfBarHeight = this.barHeight / 2;

        			/**
        			 * Draw the background
        			 */
        			RG.background_Draw(this);

        			/**
        			 * Draw the labels at the top
        			 */
        			this.drawLabels();

        			/**
        			 * Draw the events
        			 */
        			this.DrawEvents();

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
        		 * Draws the labels at the top and the left of the chart
        		 */
        		this.drawLabels =
        			this.DrawLabels = function ()
        		{
        			/**
        			 * Draw the X labels at the top/bottom of the chart.
        			 */
        			var labels = prop["chart.labels"];
        			var labelsColor = prop["chart.labels.color"] || prop["chart.text.color"];
        			var labelSpace = (this.graphArea) / labels.length;
        			var x = this.gutterLeft + (labelSpace / 2);
        			var y = this.gutterTop - (prop["chart.text.size"] / 2) - 5;
        			var font = prop["chart.text.font"];
        			var size = prop["chart.text.size"];

        			co.beginPath();
        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);
        			co.strokeStyle = 'black';
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);

        			/**
        			 * This facilitates chart.labels.align
        			 */
        			if (prop["chart.labels.align"] == 'bottom')
        			{
        				y = ca.height - this.gutterBottom + size + 2;
        			}

        			/**
        			 * Draw the horizontal labels
        			 */
        			for (var i = 0; i < labels.length; ++i)
        			{
        				RG.Text2(this, {
        					'font' : font,
        					'size' : size,
        					'x' : x + (i * labelSpace),
        					'y' : y,
        					'text' : String(labels[i]),
        					'halign' : 'center',
        					'valign' : 'center',
        					'tag' : 'labels.horizontal'
        				});
        			}

        			/**
        			 * Draw the vertical labels
        			 */
        			for (var i = 0,len = this.data.length; i < len; ++i)
        			{
        				var ev = this.data[i];
        				var x = this.gutterLeft;
        				var y = this.gutterTop + this.halfBarHeight + (i * this.barHeight);

        				co.fillStyle = labelsColor || prop["chart.text.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);

        				RG.text2(this, {
        					'font' : font,
        					'size' : size,
        					'x' : x - 5,
        					'y' : y,
        					'text' : RG.isArray(ev[0]) ? (ev[0][3] ? String(ev[0][3]) : '') : (typeof ev[3] == 'string' ? ev[3] : ''),
        					'halign' : 'right',
        					'valign' : 'center',
        					'tag' : 'labels.vertical'
        				});
        			}
        		};

        		/**
        		 * Draws the events to the canvas
        		 */
        		this.drawEvents =
        			this.DrawEvents = function ()
        		{
        			var events = this.data;

        			/**
        			 * Reset the coords array to prevent it growing
        			 */
        			this.coords = [];

        			/**
        			 * First draw the vertical bars that have been added
        			 */
        			if (prop["chart.vbars"])
        			{
        				for (var i = 0,len = prop["chart.vbars"].length; i < len; ++i)
        				{
        					// Boundary checking
        					if (prop["chart.vbars"][i][0] + prop["chart.vbars"][i][1] > prop["chart.xmax"])
        					{
        						prop["chart.vbars"][i][1] = 364 - prop["chart.vbars"][i][0];
        					}

        					var barX = this.gutterLeft + (((prop["chart.vbars"][i][0] - prop["chart.xmin"]) / (prop["chart.xmax"] - prop["chart.xmin"])) * this.graphArea);

        					var barY = this.gutterTop;
        					var width = (this.graphArea / (prop["chart.xmax"] - prop["chart.xmin"])) * prop["chart.vbars"][i][1];
        					var height = ca.height - this.gutterTop - this.gutterBottom;

        					// Right hand bounds checking
        					if ((barX + width) > (ca.width - this.gutterRight))
        					{
        						width = ca.width - this.gutterRight - barX;
        					}

        					co.fillStyle = prop["chart.vbars"][i][2];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);
        					co.fillRect(barX, barY, width, height);
        				}
        			}

        			/**
        			 * Now draw the horizontal bars
        			 */
        			if (prop["chart.hbars"])
        			{
        				for (var i = 0,len = prop["chart.hbars"].length; i < len; ++i)
        				{
        					if (prop["chart.hbars"][i])
        					{
        						var barX = this.gutterLeft,barY = ((ca.height - this.gutterTop - this.gutterBottom) / this.data.length) * i + this.gutterTop,width = this.graphArea,height = this.barHeight;

        						co.fillStyle = prop["chart.hbars"][i];
        						RG.setElementCommonStyle(co, co.fillStyle, 1);
        						co.fillRect(barX, barY, width, height);
        					}
        				}
        			}

        			/**
        			 * Draw the events
        			 */
        			var sequentialIndex = 0;
        			for (var i = 0; i < events.length; ++i)
        			{
        				if (typeof (events[i][0]) == 'number')
        				{
        					this.DrawSingleEvent(events[i], i, sequentialIndex++);
        				}
        				else
        				{
        					for (var j = 0; j < events[i].length; ++j)
        					{
        						var subindex = j;
        						this.DrawSingleEvent(events[i][j], i, sequentialIndex++, subindex);
        					}
        				}
        			}
        		};


        		/**
        		 * Retrieves the bar (if any) that has been click on or is hovered over
        		 *
        		 * @param object e The event object
        		 */
        		this.getShape =
        			this.getBar = function (e)
        		{
        			// trace("e1:" + e);
        			// e = RG.fixEventObject(e);
        			// trace("e2:" + e);

        			var mouseXY = RG.getMouseXY(e);
        			if (!mouseXY)
        			{
        				return;
        			}
        			var mouseX = mouseXY[0],mouseY = mouseXY[1];

        			/**
        			 * Loop through the bars determining if the mouse is over a bar
        			 */
        			for (var i = 0,len = this.coords.length; i < len; i++)
        			{
        				var left = this.coords[i][0],top = this.coords[i][1],width = this.coords[i][2],height = this.coords[i][3];

        				if (mouseX >= left
        					 && mouseX <= (left + width)
        					 && mouseY >= top
        					 && mouseY <= (top + height))
        				{
        					var tooltip = RG.parseTooltipText(prop["chart.tooltips"], i);

        					var ret = {
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
        						index : this.coords[i][4].index,
        						subindex : (this.coords[i][4] && typeof this.coords[i][4].subindex === 'number' ? this.coords[i][4].subindex : null),
        						sequentialIndex : this.coords[i][5],
        						tooltip : tooltip,
        						mousex : mouseX,
        						mousey : mouseY
        					};

        					return ret;
        				}
        			}
        		};




        		/**
        		 * Draws a single event
        		 */
        		this.drawSingleEvent =
        			this.DrawSingleEvent = function (ev, index, sequentialIndex)
        		{
        			// Store the indexes on the original data
        			ev.index = index;
        			if (typeof arguments[3] === 'number')
        			{
        				ev.subindex = arguments[3];
        				// this.data[index][arguments[3]].subindex = arguments[3];
        			}

        			var min = prop["chart.xmin"];

        			co.beginPath();
        			co.strokeStyle = 'black';
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.fillStyle = ev[4] ? ev[4] : prop["chart.defaultcolor"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			var barStartX = this.gutterLeft + (((ev[0] - min) / (prop["chart.xmax"] - min)) * this.graphArea);
        			var barStartY = this.gutterTop + (index * this.barHeight);
        			var barWidth = (ev[1] / (prop["chart.xmax"] - min)) * this.graphArea;

        			/**
        			 * If the width is greater than the graph atrea, curtail it
        			 */
        			if ((barStartX + barWidth) > (ca.width - this.gutterRight))
        			{
        				barWidth = ca.width - this.gutterRight - barStartX;
        			}

        			/**
        			 *  Draw the actual bar storing store the coordinates
        			 */
        			this.coords.push([
        				barStartX,
        				barStartY + prop["chart.vmargin"],
        				barWidth,
        				this.barHeight - (2 * prop["chart.vmargin"]),
        				ev,
        				sequentialIndex,
        			]);

        			// draw the border around the bar
        			if (prop["chart.borders"] || ev[6])
        			{
        				co.strokeStyle = typeof (ev[6]) == 'string' ? ev[6] : 'black';
        				RG.setElementCommonStyle(co, co.strokeStyle, 2);
        				co.lineWidth = (typeof (ev[7]) == 'number' ? ev[7] : 1);
        				co.setElementLineWidth(co.lineWidth);
        				co.beginPath();
        				co.strokeRect(barStartX, barStartY + prop["chart.vmargin"], barWidth, this.barHeight - (2 * prop["chart.vmargin"]));
        			}
        			co.beginPath();
        			co.fillRect(barStartX, barStartY + prop["chart.vmargin"], barWidth, this.barHeight - (2 * prop["chart.vmargin"]));
        			co.fill();

        			// Work out the completeage indicator
        			var complete = (ev[2] / 100) * barWidth;

        			// Draw the % complete indicator. If it's greater than 0
        			if (typeof (ev[2]) == 'number')
        			{
        				co.beginPath();
        				co.fillStyle = ev[5] ? ev[5] : '#00cc00';
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				co.fillRect(barStartX,
        					barStartY + prop["chart.vmargin"],
        					(ev[2] / 100) * barWidth,
        					this.barHeight - (2 * prop["chart.vmargin"]));

        				// Don't necessarily have to draw the label
        				if (prop["chart.labels.percent"])
        				{
        					co.beginPath();
        					co.fillStyle = prop["chart.text.color"];
        					RG.setElementCommonStyle(co, co.fillStyle, 1);
        					RG.Text2(this, {
        						'font' : prop["chart.text.font"],
        						'size' : prop["chart.text.size"],
        						'x' : barStartX + barWidth + 5,
        						'y' : barStartY + this.halfBarHeight,
        						'text' : String(ev[2]) + '%',
        						'valign' : 'center',
        						'tag' : 'labels.complete'
        					});
        				}
        			}

        			/**
        			 * Draw the inbar label if it's defined
        			 */
        			if (prop["chart.labels.inbar"] && prop["chart.labels.inbar"][sequentialIndex])
        			{
        				var label = String(prop["chart.labels.inbar"][sequentialIndex]);
        				var halign = prop["chart.labels.inbar.align"] == 'left' ? 'left' : 'center';
        				halign = prop["chart.labels.inbar.align"] == 'right' ? 'right' : halign;

        				// Work out the position of the text
        				if (halign == 'right')
        				{
        					var x = (barStartX + barWidth) - 5;
        				}
        				else if (halign == 'center')
        				{
        					var x = barStartX + (barWidth / 2);
        				}
        				else
        				{
        					var x = barStartX + 5;
        				}


        				// Draw the labels "above" the bar
        				if (prop["chart.labels.inbar.above"])
        				{
        					x = barStartX + barWidth + 5;
        					halign = 'left';
        				}


        				// Set the color
        				co.fillStyle = prop["chart.labels.inbar.color"];
        				RG.setElementCommonStyle(co, co.fillStyle, 1);
        				RG.text2(this, {
        					'font' : prop["chart.labels.inbar.font"],
        					'size' : prop["chart.labels.inbar.size"],
        					'x' : x,
        					'y' : barStartY + this.halfBarHeight,
        					'text' : label,
        					'valign' : 'center',
        					'halign' : halign,
        					'bounding' : typeof (prop["chart.labels.inbar.bgcolor"]) == 'string',
        					'boundingFill' : typeof (prop["chart.labels.inbar.bgcolor"]) == 'string' ? prop["chart.labels.inbar.bgcolor"] : null,
        					'tag' : 'labels.inbar'
        				});
        			}
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
        		 * The getObjectByXY() worker method. Don't call this call:
        		 *
        		 * RG.ObjectRegistry_getObjectByXY(e)
        		 *
        		 * @param object e The event object
        		 */
        		this.getObjectByXY = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e);

        			if (mouseXY[0] > this.gutterLeft
        				 && mouseXY[0] < (ca.width - this.gutterRight)
        				 && mouseXY[1] > this.gutterTop
        				 && mouseXY[1] < (ca.height - this.gutterBottom))
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
        			if (prop["chart.adjustable"] && RG.Registry_get('chart.adjusting') && RG.Registry_Get('chart.adjusting').uid == this.uid)
        			{
        				var bar = RG.Registry_get('chart.adjusting.gantt');
        				if (bar)
        				{
        					var obj = RG.Registry_get('chart.adjusting.gantt')["object"];

        					var index = bar["index"],subindex = bar["subindex"],diff = ((bar.mousex - bar.mousex_s) /
        						(this.canvas.width - obj.gutterLeft - obj.gutterRight)) * prop["chart.xmax"],eventStart = RG.Registry_get('chart.adjusting.gantt')["event_start"],duration = RG.Registry_get('chart.adjusting.gantt')["event_duration"],event = typeof subindex === 'number' ? obj.data[index][subindex] : obj.data[index];
        					// var tooltiptext = "";
        					// if(obj.properties['chart.tooltips']) {
        					// var tooltip = obj.properties['chart.tooltips'];
        					// tooltiptext = typeof subindex === 'number' ? tooltip[index][subindex] : tooltip[index];
        					// }
        					if (bar["mode"] == 'move')
        					{
        						this.canvas.style.set_cursor("move");
        						diff = Math.round(diff);
        						// Single event
        						if (RG.isNull(subindex))
        						{
        							event[0] = eventStart + diff;
        							if (eventStart + diff < 0)
        							{
        								obj.data[index][0] = 0;
        							}
        							else if ((eventStart + diff + obj.data[index][1]) > prop["chart.xmax"])
        							{
        								obj.data[index][0] = prop["chart.xmax"] - obj.data[index][1];
        							}
        							// Multiple events
        						}
        						else
        						{
        							var index = RG.Registry_get('chart.adjusting.gantt').index;
        							var subindex = RG.Registry_get('chart.adjusting.gantt').subindex;
        							var event = this.data[index][subindex];

        							event[0] = eventStart + diff;
        							if ((eventStart + diff) < 0)
        							{
        								event[0] = 0;
        							}
        							else if ((eventStart + diff + event[1]) > prop["chart.xmax"])
        							{
        								event[0] = prop["chart.xmax"] - event[1];
        							}
        						}
        					}
        					else if (bar["mode"] == 'resize')
        					{
        						this.canvas.style.set_cursor("e-resize");
        						/*
        						 * Account for the right hand gutter. Appears to be a FF bug
        						 */
        						if (bar.mousex > (ca.width - obj.gutterRight))
        						{
        							bar.mousex = ca.width - obj.gutterRight;
        						}
        						diff = Math.round(diff);
        						// Single event
        						if (RG.isNull(subindex))
        						{
        							obj.data[index][1] = duration + diff;
        							if (obj.data[index][1] < 1)
        							{
        								obj.data[index][1] = 1;
        							}
        							// Multiple events
        						}
        						else
        						{
        							obj.data[index][subindex][1] = duration + diff;
        							if (obj.data[index][subindex][1] < 1)
        							{
        								obj.data[index][subindex][1] = 1;
        							}
        						}
        					}
        					bar.differ = diff;


        					// RG.fireCustomEvent(obj, 'onadjusttooltip');
        					// if(obj.properties['chart.tooltips']) {
        					// RG.tooltip(this, tooltiptext, bar['shape'].width, bar['shape'].height, index, e);
        					// }
        					RG.resetColorsToOriginalValues(this);
        					// RG.Clear(ca);

        					// nexacro.OnceCallbackTimer.callonce(RG.context, function() {

        					RG.effectCanvasShow(obj.canvas, true);
        					RG.redrawCanvas(ca);
        					RG.effectCanvasShow(obj.canvas, false, 10);
        					RG.fireCustomEvent(obj, 'onadjust');

        					// if(diff == 0) {
        					// var xx = bar.mousex;
        					// var yy = bar.mousey;
        					// var xx1 = bar.mousex_s;
        					// var yy1 = bar.mousey_s;
        					// //bar['mousex_s'] = xx;
        					// //bar['mousey_s'] = yy;
        					// }

        					// }, 10);
        				}
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
        		 var gutterLeft = obj.gutterLeft;
        		 var gutterTop  = obj.gutterTop;
        		 var width      = tooltip.offsetWidth;
        		 var height     = tooltip.offsetHeight;
        		 var mouseXY    = RG.getMouseXY(window.event);

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
        		 * Returns the X coordinate for the given value
        		 *
        		 * @param number value The desired value (eg minute/hour/day etc)
        		 */
        		this.getXCoord = function (value)
        		{
        			var min = prop["chart.xmin"];
        			var max = prop["chart.xmax"];
        			var graphArea = ca.width - this.gutterLeft - this.gutterRight;

        			if (value > max || value < min)
        			{
        				return null;
        			}


        			var x = (((value - min) / (max - min)) * graphArea) + this.gutterLeft;

        			return x;
        		};




        		/**
        		 * Returns the value given EITHER the event object OR a two element array containing the X/Y coords
        		 */
        		this.getValue = function (arg)
        		{
        			if (arg.length == 2)
        			{
        				var mouseXY = arg;
        			}
        			else
        			{
        				var mouseXY = RG.getMouseXY(arg);
        			}

        			var mouseX = mouseXY[0];
        			var mouseY = mouseXY[1];

        			var value = (mouseX - this.gutterLeft) / (ca.width - this.gutterLeft - this.gutterRight);
        			value *= (prop["chart.xmax"] - prop["chart.xmin"]);

        			// Bounds checking
        			if (value < prop["chart.xmin"] || value > prop["chart.xmax"])
        			{
        				value = null;
        			}

        			return value;
        		};




        		/**
        		 * This allows for easy specification of gradients. Could optimise this not to repeatedly call parseSingleColors()
        		 */
        		this.parseColors = function ()
        		{
        			// Save the original colors so that they can be restored when the canvas is reset
        			if (this.original_colors.length === 0)
        			{
        				this.original_colors["data"] = RG.arrayClone(this.data);


        				this.original_colors["chart.background.barcolor1"] = RG.array_clone(prop["chart.background.barcolor1"]);
        				this.original_colors["chart.background.barcolor2"] = RG.array_clone(prop["chart.background.barcolor2"]);
        				this.original_colors["chart.background.grid.color"] = RG.array_clone(prop["chart.background.grid.color"]);
        				this.original_colors["chart.defaultcolor"] = RG.array_clone(prop["chart.defaultcolor"]);
        				this.original_colors["chart.highlight.stroke"] = RG.array_clone(prop["chart.highlight.stroke"]);
        				this.original_colors["chart.highlight.fill"] = RG.array_clone(prop["chart.highlight.fill"]);
        			}




        			/**
        			 * this.coords can be used here as gradients are only parsed on the SECOND draw - not the first.
        			 * A .redraw() is downe at the end of the first draw.
        			 */
        			for (var i = 0,sequentialIndex = 0; i < this.data.length; ++i)
        			{
        				if (typeof this.data[i][0] == 'object' && typeof this.data[i][0][0] === 'number')
        				{
        					for (var j = 0,len = this.data[i].length; j < len; j += 1, sequentialIndex += 1)
        					{
        						this.data[i][j][4] = this.parseSingleColorForGradient(this.data[i][j][4], {
        							start : this.data[i][j][0],
        							duration : this.data[i][j][1]
        						});
        						this.data[i][j][5] = this.parseSingleColorForGradient(this.data[i][j][5], {
        							start : this.data[i][j][0],
        							duration : this.data[i][j][1]
        						});
        					}
        				}
        				else
        				{
        					if (typeof this.data[i][4] == 'string')
        					{
        						this.data[i][4] = this.parseSingleColorForGradient(this.data[i][4], {
        							start : this.data[i][0],
        							duration : this.data[i][1]
        						});
        					}
        					if (typeof this.data[i][5] == 'string')
        					{
        						this.data[i][5] = this.parseSingleColorForGradient(this.data[i][5], {
        							start : this.data[i][0],
        							duration : this.data[i][1]
        						});
        					}
        					++sequentialIndex;
        				}
        			}

        			prop["chart.background.barcolor1"] = this.parseSingleColorForGradient(prop["chart.background.barcolor1"]);
        			prop["chart.background.barcolor2"] = this.parseSingleColorForGradient(prop["chart.background.barcolor2"]);
        			prop["chart.background.grid.color"] = this.parseSingleColorForGradient(prop["chart.background.grid.color"]);
        			prop["chart.background.color"] = this.parseSingleColorForGradient(prop["chart.background.color"]);
        			prop["chart.defaultcolor"] = this.parseSingleColorForGradient(prop["chart.defaultcolor"]);
        			prop["chart.highlight.stroke"] = this.parseSingleColorForGradient(prop["chart.highlight.stroke"]);
        			prop["chart.highlight.fill"] = this.parseSingleColorForGradient(prop["chart.highlight.fill"]);
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
        		 * @param string color The color to parse
        		 */
        		this.parseSingleColorForGradient = function (color)
        		{
        			var opts = arguments[1] || {
        			};

        			if (!color || typeof (color) != 'string')
        			{
        				return color;
        			}

        			var grad;
        			if (color.match(/^gradient\((.*)\)$/i))
        			{
        				grad = RG.createLinearGradient(co,
        					typeof opts.start === 'number' ? this.getXCoord(opts.start) : this.gutterLeft,
        					0,
        					typeof opts.start === 'number' ? this.getXCoord(value) : ca.width - this.gutterRight,
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
        		 * Gantt chart Grow effect
        		 *
        		 * @param object   obj Options for the grow effect
        		 * @param function     Optional callback (a function)
        		 */
        		this.grow = function ()
        		{
        			var obj = this;
        			var opt = arguments[0] || {
        			};
        			var callback = arguments[1] ? arguments[1] : function ()
        			{
        			};
        			var canvas = obj.canvas;
        			var context = obj.context;
        			var numFrames = opt.frames || 10;
        			var frame = 0;

        			if (RG.ISIE8)
        			{
        				this.draw();
        				callback(obj);
        				return;
        			}

        			var original_events = RG.arrayClone(obj.data);

        			function iterator ()
        			{
        				RG.effectCanvasShow(obj.canvas, true);
        				RG.clear(obj.canvas);
        				RG.redrawCanvas(obj.canvas);
        				RG.effectCanvasShow(obj.canvas, false, 10);

        				if (frame <= numFrames)
        				{
        					// Update the events
        					for (var i = 0,len = obj.data.length; i < len; ++i)
        					{
        						if (typeof obj.data[i][0] === 'object')
        						{
        							for (var j = 0; j < obj.data[i].length; ++j)
        							{
        								obj.data[i][j][1] = (frame / numFrames) * original_events[i][j][1];
        							}
        						}
        						else
        						{
        							obj.data[i][1] = (frame / numFrames) * original_events[i][1];
        						}
        					}

        					obj.reset();
        					frame++;

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




        		/**
        		 * This helps the Gantt reset colors when the reset function is called.
        		 * It handles going through the data and resetting the colors.
        		 */
        		this.resetColorsToOriginalValues = function ()
        		{
        			/**
        			 * Copy the original colors over for single-event-per-line data
        			 */
        			for (var i = 0; i < this.original_colors["data"].length; ++i)
        			{
        				if (this.original_colors["data"][i][4])
        				{
        					this.data[i][4] = RG.arrayClone(this.original_colors["data"][i][4]);
        				}

        				if (this.original_colors["data"][i][5])
        				{
        					this.data[i][5] = RG.arrayClone(this.original_colors["data"][i][5]);
        				}

        				if (typeof this.original_colors["data"][i][0] === 'object' && typeof this.original_colors["data"][i][0][0] === 'number')
        				{
        					for (var j = 0,len2 = this.original_colors["data"][i].length; j < len2; ++j)
        					{
        						this.data[i][j][4] = RG.arrayClone(this.original_colors["data"][i][j][4]);
        						this.data[i][j][5] = RG.arrayClone(this.original_colors["data"][i][j][5]);
        					}
        				}
        			}
        		};

        		/**
        		 * This function resets the object - clearing it of any previously gathered info
        		 */
        		this.reset = function ()
        		{
        			this.resetColorsToOriginalValues();

        			this.colorsParsed = false;
        			this.coordsText = [];
        			this.original_colors = [];
        			this.firstDraw = true;
        			this.coords = [];
        		};

        		this.sequentialIndex2Grouped = function ()
        		{
        			alert('[RGRAPH] Please post in the forum if you see this alert');
        		};

        		this.isAdjustable = function (shape)
        		{
        			if (RG.isNull(prop["chart.adjustable.only"]))
        			{
        				return true;
        			}
        			else if (RG.isArray(prop["chart.adjustable.only"]) && prop["chart.adjustable.only"][shape.sequentialIndex])
        			{
        				return true;
        			}

        			return false;
        		};

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
