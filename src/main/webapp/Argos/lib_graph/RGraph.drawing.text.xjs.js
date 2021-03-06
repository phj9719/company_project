//XJS=RGraph.drawing.text.xjs
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
        if (!nexacro.RGraph.Drawing_Text)
        {
        	/**
        	 * The constructor. This function sets up the object. It takes the ID (the HTML attribute) of the canvas as the
        	 * first argument, then th X position, the Y position and then the text to show
        	 *
        	 * @param string id    The canvas tag ID
        	 * @param number x     The X position of the text
        	 * @param number y     The Y position of the text
        	 * @param number text  The text to show
        	 */
        	nexacro.RGraph.Drawing_Text = function (RG, conf, x, y, text)
        	{
        		text = String(text);
        		var id = conf.id;
        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];
        		var parseConfObjectForOptions = true;
        		this.colorsParsed = false;
        		this.canvas.__object__ = this;
        		this.x = x;
        		this.y = y;
        		this.text = text;
        		this.coords = [];
        		this.coordsText = [];
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		/**
        		 * This defines the type of this shape
        		 */
        		this.type = 'drawing.text';

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
        			'chart.size' : 10,
        			'chart.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.bold' : false,
        			'chart.angle' : 0,
        			'chart.colors' : ['black'],
        			'chart.events.click' : null,
        			'chart.events.mousemove' : null,
        			'chart.highlight.stroke' : '#cccccc',
        			'chart.highlight.fill' : [255, 255, 255, 0.7],
        			'chart.tooltips' : null,
        			'chart.tooltips.effect' : 'fade',
        			'chart.tooltips.css.class' : 'RGraph_tooltip',
        			'chart.tooltips.event' : 'onclick',
        			'chart.tooltips.highlight' : true,
        			'chart.tooltips.coords.page' : false,
        			'chart.bounding' : false,
        			'chart.bounding.fill' : [255, 255, 255, 0.3],
        			'chart.bounding.stroke' : '#777777',
        			'chart.bounding.shadow' : false,
        			'chart.bounding.shadow.color' : '#cccccc',
        			'chart.bounding.shadow.blur' : 3,
        			'chart.bounding.shadow.offsetx' : 3,
        			'chart.bounding.shadow.offsety' : 3,
        			'chart.marker' : false,
        			'chart.halign' : 'left',
        			'chart.valign' : 'bottom',
        			'chart.link' : null,
        			'chart.link.target' : '_self',
        			'chart.link.options' : '',
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.clearto' : [0, 0, 0, 0],
        			'chart.shadow' : false,
        			'chart.shadow.color' : '#cccccc',
        			'chart.shadow.offsetx' : 2,
        			'chart.shadow.offsety' : 2,
        			'chart.shadow.blur' : 3
        		};

        		/**
        		 * A simple check that the browser has canvas support
        		 */
        		if (!this.canvas)
        		{
        			alert('[DRAWING.TEXT] No canvas support');
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

        		var ca = this.canvas,co = this.context,prop = this.properties,pa2 = RG.path2,ma = Math;

        		/**
        		 * "Decorate" the object with the generic effects if the effects library has been included
        		 */
        		if (RG.Effects && typeof RG.Effects.decorate === 'function')
        		{
        			RG.Effects.decorate(this);
        		}

        		/**
        		 * A setter method for setting properties.
        		 *
        		 * @param name  string The name of the property to set OR it can be a map
        		 *                     of name/value settings like what you set in the constructor
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
        		 * Draws the rectangle
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
        			/**
        			 * Fire the onbeforedraw event
        			 */
        			RG.fireCustomEvent(this, 'onbeforedraw');


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
        			 * Stop the coods array from growing
        			 */
        			this.coords = [];



        			/**
        			 * Stop this growing uncntrollably
        			 */
        			this.coordsText = [];




        			/**
        			 * The font, its size and whether its bold or not can be set by properties,
        			 * so now they have been (potentiall) set - measure the text
        			 */
        			/**
        			 * Measure the text and add the width/height
        			 *
        			 * text, bold, font, size
        			 *
        			 */
        			var objFont = new nexacro.Style_font();
        			objFont.set_face(prop["chart.text.font"]);
        			objFont.set_size(prop["chart.text.size"]);
        			objFont.set_type(prop["chart.text.bold"] ? "bold" : "");
        			co.setElementFont(objFont);

        			var dimensions;
        			dimensions = RG._measureText(this.text, objFont);

        			// ------------- DRAW TEXT HERE -------------
        			co.fillStyle = prop["chart.colors"][0];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			// Shadow
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

        			var ret = RG.text2(this, {
        				font : prop["chart.font"],
        				size : prop["chart.size"],
        				x : this.x,
        				y : this.y,
        				text : this.text,
        				bold : prop["chart.bold"],
        				angle : prop["chart.angle"],
        				bounding : prop["chart.bounding"],
        				'bounding.fill' : prop["chart.bounding.fill"],
        				'bounding.stroke' : prop["chart.bounding.stroke"],
        				'bounding.shadow' : prop["chart.bounding.shadow"],
        				'bounding.shadow.color' : prop["chart.bounding.shadow.color"],
        				'bounding.shadow.blur' : prop["chart.bounding.shadow.blur"],
        				'bounding.shadow.offsetx' : prop["chart.bounding.shadow.offsetx"],
        				'bounding.shadow.offsety' : prop["chart.bounding.shadow.offsety"],
        				marker : prop["chart.marker"],
        				halign : prop["chart.halign"],
        				valign : prop["chart.valign"]
        			});


        			// Shadow
        			if (prop["chart.shadow"])
        			{
        				RG.noShadow(this);
        			}



        			// store the dimensions
        			this.coords.push({
        				0 : ret.x,
        				'x' : ret.x,
        				1 : ret.y,
        				'y' : ret.y,
        				2 : ret.width,
        				'width' : ret.width,
        				3 : ret.height,
        				'height' : ret.height
        			});



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
        		 * to get the coordinates (if any) of the selected bar
        		 *
        		 * @param object e The event object
        		 */
        		this.getShape = function (e)
        		{
        			var prop = this.properties;
        			var coords = this.coords;
        			var mouseXY = RG.getMouseXY(e);
        			var mouseX = mouseXY[0];
        			var mouseY = mouseXY[1];

        			for (var i = 0,len = this.coords.length; i < len; i++)
        			{
        				var left = coords[i].x;
        				var top = coords[i].y;
        				var width = coords[i].width;
        				var height = coords[i].height;

        				if (mouseX >= left && mouseX <= (left + width) && mouseY >= top && mouseY <= (top + height))
        				{
        					return {
        						0 : this,
        						1 : left,
        						2 : top,
        						3 : width,
        						4 : height,
        						5 : 0,
        						'object' : this,
        						'x' : left,
        						'y' : top,
        						'width' : width,
        						'height' : height,
        						'index' : 0,
        						'tooltip' : prop["chart.tooltips"] ? prop["chart.tooltips"][0] : null
        					};
        				}
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
        		 var coords   = obj.coords[0];
        		 var coordX   = parseFloat(coords.x);
        		 var coordY   = parseFloat(coords.y);
        		 var coordW   = coords.width;
        		 var coordH   = coords.height;
        		 var canvasXY = RG.getCanvasXY(obj.canvas);
        		 var mouseXY  = RG.getMouseXY(window.event);
        		 var width    = tooltip.offsetWidth;
        		 var height   = tooltip.offsetHeight;

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
        			else
        			{
        				RG.Highlight.Rect(this, shape);
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
        				this.original_colors["chart.colors"] = RG.array_clone(prop["chart.colors"])[0];
        				this.original_colors["chart.fillstyle"] = RG.array_clone(prop["chart.fillstyle"]);
        				this.original_colors["chart.strokestyle"] = RG.array_clone(prop["chart.strokestyle"]);
        				this.original_colors["chart.highlight.stroke"] = RG.array_clone(prop["chart.highlight.stroke"]);
        				this.original_colors["chart.highlight.fill"] = RG.array_clone(prop["chart.highlight.fill"]);
        			}
        			/**
        			 * Parse various properties for colors
        			 */
        			prop["chart.colors"][0] = this.parseSingleColorForGradient(prop["chart.colors"][0]);
        			prop["chart.fillstyle"] = this.parseSingleColorForGradient(prop["chart.fillstyle"]);
        			prop["chart.strokestyle"] = this.parseSingleColorForGradient(prop["chart.strokestyle"]);
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
        				grad = RG.createLinearGradient(co, 0, 0, ca.width, 0, color);
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
