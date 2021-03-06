//XJS=RGraph.drawing.marker2.xjs
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

        /**
         * Having this here means that the RGraph libraries can be included in any order, instead of you having
         * to include the common core library first.
         */

        // Define the RGraph global variable
        if (!nexacro.RGraph.Drawing_Marker2)
        {
        	/**
        	 * The constructor. This function sets up the object. It takes the ID (the HTML attribute) of the canvas as the
        	 * first argument and the data as the second. If you need to change this, you can.
        	 *
        	 * @param string id    The canvas tag ID
        	 * @param number x    The X position of the label
        	 * @param number y    The Y position of the label
        	 * @param number text The text used
        	 */
        	nexacro.RGraph.Drawing_Marker2 = function (RG, conf, x, y, text)
        	{
        		var id = conf.id;
        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];
        		var parseConfObjectForOptions = true;
        		this.colorsParsed = false;
        		this.canvas.__object__ = this;
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		/**
        		 * Store the properties
        		 */
        		this.x = x;
        		this.y = y;
        		this.text = text;
        		/**
        		 * This defines the type of this shape
        		 */
        		this.type = 'drawing.marker2';


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
        			'chart.strokestyle' : 'black',
        			'chart.fillstyle' : 'white',
        			'chart.text.color' : 'black',
        			'chart.text.size' : 12,
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.accessible' : false,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.events.click' : null,
        			'chart.events.mousemove' : null,
        			'chart.shadow' : true,
        			'chart.shadow.color' : 'gray',
        			'chart.shadow.offsetx' : 3,
        			'chart.shadow.offsety' : 3,
        			'chart.shadow.blur' : 5,
        			'chart.highlight.stroke' : '#00000000',
        			'chart.highlight.fill' : '#ffffff99',
        			'chart.tooltips' : null,
        			'chart.tooltips.highlight' : true,
        			'chart.tooltips.event' : 'onclick',
        			'chart.voffset' : 20,
        			'chart.clearto' : [0, 0, 0, 0]
        		};
        		/**
        		 * A simple check that the browser has canvas support
        		 */
        		if (!this.canvas)
        		{
        			alert('[DRAWING.MARKER2] No canvas support');
        			return;
        		}
        		/**
        		 * These are used to store coords
        		 */
        		this.coords = [];
        		this.coordsText = [];

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
        		 * A setter method for setting graph properties. It can be used like this: obj.Set('chart.strokestyle', '#666');
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
        		 * Draws the marker
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
        			/**
        			 * Reset the linewidth
        			 */
        			co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);
        			/**
        			 * Fire the onbeforedraw event
        			 */
        			RG.fireCustomEvent(this, 'onbeforedraw');

        			var objFont = new nexacro.Style_font();
        			objFont.set_face(prop["chart.text.font"]);
        			objFont.set_size(prop["chart.text.size"]);
        			objFont.set_type(prop["chart.text.bold"] ? "bold" : "");
        			co.setElementFont(objFont);


        			this.metrics = RG._measureText(this.text, objFont);
        			if (this.x + this.metrics[0] >= ca.width)
        			{
        				this.alignRight = true;
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
        			/***************
        			 * Draw the box *
        			 ****************/
        			var x = this.alignRight ? this.x - this.metrics[0] - 6 : this.x,y = this.y - 6 - prop["chart.voffset"] - this.metrics[1],width = this.metrics[0] + 6,height = this.metrics[1] + 6;

        			// Store these coords as the coords of the label
        			this.coords[0] = [x, y, width, height];
        			/**
        			 * Stop this growing uncntrollably
        			 */
        			this.coordsText = [];

        			// Set the linewidth
        			co.lineWidth = prop["chart.linewidth"];
        			co.setElementLineWidth(co.lineWidth);
        			/**
        			 * Draw the box that the text sits in
        			 */

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

        			co.strokeStyle = prop["chart.strokestyle"];
        			RG.setElementCommonStyle(co, co.strokeStyle, 2);
        			co.fillStyle = prop["chart.fillstyle"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			// This partcular strokeRect has 0 width and so ends up being a line
        			co.strokeRect(x + (this.alignRight ? width : 0), y, 0, height + prop["chart.voffset"] - 6);

        			co.strokeRect(x, y, width, height);
        			co.fillRect(x, y, width, height);

        			RG.noShadow(this);

        			co.fillStyle = prop["chart.text.color"];
        			RG.setElementCommonStyle(co, co.fillStyle, 1);

        			// Draw the text
        			RG.text2(this, {
        				font : prop["chart.text.font"],
        				size : prop["chart.text.size"],
        				x : ma.round(this.x) - (this.alignRight ? this.metrics[0] + 3 : -3),
        				y : this.y - 3 - prop["chart.voffset"],
        				text : this.text,
        				valign : 'bottom',
        				halign : 'left',
        				tag : 'labels'
        			});

        			this.coords[0].push([
        				x,
        				y,
        				width,
        				height
        			]);

        			// Must turn the shadow off
        			RG.noShadow(this);

        			/**
        			 * Reset the testBaseline
        			 */
        			co.textBaseline = 'alphabetic';
        			co.setElementTextBaseline(co.textBaseline);

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
        			 * Fire the ondraw event
        			 */
        			RG.fireCustomEvent(this, 'ondraw');

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
        		 * Not used by the class during creating the shape, but is used by event handlers
        		 * to get the coordinates (if any) of the selected bar
        		 *
        		 * @param object e The event object
        		 * @param object   OPTIONAL You can pass in the bar object instead of the
        		 *                          function using "this"
        		 */
        		this.getShape = function (e)
        		{
        			var mouseXY = RG.getMouseXY(e),mouseX = mouseXY[0],mouseY = mouseXY[1];

        			if (mouseX >= this.coords[0][0] && mouseX <= (this.coords[0][0] + this.coords[0][2]))
        			{
        				if (mouseY >= this.coords[0][1] && mouseY <= (this.coords[0][1] + this.coords[0][3]))
        				{
        					return {
        						0 : this,
        						1 : this.coords[0][0],
        						2 : this.coords[0][1],
        						3 : this.coords[0][2],
        						4 : this.coords[0][3],
        						5 : 0,
        						'object' : this,
        						'x' : this.coords[0][0],
        						'y' : this.coords[0][1],
        						'width' : this.coords[0][2],
        						'height' : this.coords[0][3],
        						'index' : 0,
        						'tooltip' : prop["chart.tooltips"] ? prop["chart.tooltips"][0] : null
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
        				}
        				else
        				{
        					RG.pa2(co, ['b', 'r', this.coords[0][0], this.coords[0][1], this.coords[0][2], this.coords[0][3], 'f', prop["chart.highlight.fill"], 's', prop["chart.highlight.stroke"]]);
        				}
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
        				this.original_colors["chart.fillstyle"] = RG.array_clone(prop["chart.fillstyle"]);
        				this.original_colors["chart.strokestyle"] = RG.array_clone(prop["chart.strokestyle"]);
        				this.original_colors["chart.highlight.fill"] = RG.array_clone(prop["chart.highlight.fill"]);
        				this.original_colors["chart.highlight.stroke"] = RG.array_clone(prop["chart.highlight.stroke"]);
        				this.original_colors["chart.text.color"] = RG.array_clone(prop["chart.text.color"]);
        			}

        			/**
        			 * Parse various properties for colors
        			 */
        			prop["chart.fillstyle"] = this.parseSingleColorForGradient(prop["chart.fillstyle"]);
        			prop["chart.strokestyle"] = this.parseSingleColorForGradient(prop["chart.strokestyle"]);
        			prop["chart.highlight.stroke"] = this.parseSingleColorForGradient(prop["chart.highlight.stroke"]);
        			prop["chart.highlight.fill"] = this.parseSingleColorForGradient(prop["chart.highlight.fill"]);
        			prop["chart.text.color"] = this.parseSingleColorForGradient(prop["chart.text.color"]);
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
        				var parts = RegExp.$1.split(':'),grad = RG.createLinearGradient(co,
        					this.x,
        					this.y,
        					this.x + this.metrics[0],
        					this.y,
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
        		 * Objects are now always registered so that the chart is redrawn if need be.
        		 */
        		RG.register(this);




        		/**
        		 * the number of arguments is only one and it's an
        		 * object - parse it for configuration data and return.
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
