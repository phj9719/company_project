//XJS=RGraph.drawing.background.xjs
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
        if (!nexacro.RGraph.Drawing_Background)
        {
        	/**
        	 * The constructor. This function sets up the object. It only takes the ID (the HTML attribute) of the canvas as the
        	 * first argument - the gutters are set as properties.
        	 *
        	 * @param string id    The canvas tag ID
        	 */
        	nexacro.RGraph.Drawing_Background = function (RG, conf)
        	{
        		/**
        		 * Allow for object config style
        		 */
        		var id = conf.id;

        		var cnt = RG.createCanvas(conf.id ? conf.id : "cvs");
        		this.id = RG._ctxid[cnt];
        		this.canvas = RG._cvs[cnt];
        		this.context = RG._ctx[cnt];

        		var canvas = this.canvas;
        		var parseConfObjectForOptions = true;
        		this.canvas.__object__ = this;
        		this.original_colors = [];
        		this.firstDraw = true; //After the first draw this will be false

        		/**
        		 * This defines the type of this shape
        		 */
        		this.type = 'drawing.background';

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
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.createUID();

        		/**
        		 * Some example background properties
        		 */
        		this.properties =
        			{
        			'chart.background.barcolor1' : [255, 255, 255, 0],
        			'chart.background.barcolor2' : [255, 255, 255, 0],
        			'chart.background.grid' : true,
        			'chart.background.grid.color' : '#dddfff',
        			'chart.background.grid.width' : 1,
        			'chart.background.grid.vlines' : true,
        			'chart.background.grid.hlines' : true,
        			'chart.background.grid.border' : true,
        			'chart.background.grid.autofit' : true,
        			'chart.background.grid.autofit.numhlines' : 5,
        			'chart.background.grid.autofit.numvlines' : 20,
        			'chart.background.grid.dashed' : false,
        			'chart.background.grid.dotted' : false,

        			'chart.background.image' : null,
        			'chart.background.image.stretch' : true,
        			'chart.background.image.x' : null,
        			'chart.background.image.y' : null,
        			'chart.background.image.w' : null,
        			'chart.background.image.h' : null,
        			'chart.background.image.align' : null,
        			'chart.background.color' : null,

        			'chart.gutter.left' : 25,
        			'chart.gutter.right' : 25,
        			'chart.gutter.top' : 25,
        			'chart.gutter.bottom' : 25,

        			'chart.text.color' : 'black', // Gradients aren't supported for this color
        			'chart.text.size' : 12,
        			'chart.text.font' : 'Segoe UI, Arial, Verdana, sans-serif',
        			'chart.text.accessible' : true,
        			'chart.text.accessible.overflow' : 'visible',
        			'chart.text.accessible.pointerevents' : true,
        			'chart.events.click' : null,
        			'chart.events.mousemove' : null,

        			'chart.tooltips' : null,
        			'chart.tooltips.highlight' : true,
        			'chart.tooltips.event' : 'onclick',

        			'chart.highlight.stroke' : [0, 0, 0, 0],
        			'chart.highlight.fill' : [255, 255, 255, 0.7],

        			'chart.linewidth' : 1,

        			'chart.title' : '',
        			'chart.title.size' : null,
        			'chart.title.font' : null,
        			'chart.title.background' : null, // Gradients aren't supported for this color
        			'chart.title.hpos' : null,
        			'chart.title.vpos' : null,
        			'chart.title.bold' : true,
        			'chart.title.color' : 'black',
        			'chart.title.x' : null,
        			'chart.title.y' : null,
        			'chart.title.halign' : null,
        			'chart.title.valign' : null,

        			'chart.title.xaxis' : '',
        			'chart.title.xaxis.bold' : true,
        			'chart.title.xaxis.size' : null,
        			'chart.title.xaxis.font' : null,
        			'chart.title.xaxis.x' : null,
        			'chart.title.xaxis.y' : null,
        			'chart.title.xaxis.pos' : null,

        			'chart.title.yaxis' : '',
        			'chart.title.yaxis.bold' : true,
        			'chart.title.yaxis.size' : null,
        			'chart.title.yaxis.font' : null,
        			'chart.title.yaxis.color' : 'black', // Gradients aren't supported for this color
        			'chart.title.yaxis.x' : null,
        			'chart.title.yaxis.y' : null,
        			'chart.title.yaxis.pos' : null,
        			'chart.clearto' : [0, 0, 0, 0]
        		};

        		/**
        		 * A simple check that the browser has canvas support
        		 */
        		if (!this.canvas)
        		{
        			alert('[DRAWING.BACKGROUND] No canvas support');
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


        		// Short variable names
        		var ca = this.canvas,co = this.context,prop = this.properties,pa = RG.Path,pa2 = RG.path2,ma = Math;

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
        		 * Draws the circle
        		 */
        		this.draw =
        			this.Draw = function ()
        		{
        			/**
        			 * Fire the onbeforedraw event
        			 */
        			RG.fireCustomEvent(this, 'onbeforedraw');


        			/***********************
        			 * DRAW BACKGROUND HERE *
        			 ***********************/
        			this.gutterLeft = prop["chart.gutter.left"];
        			this.gutterRight = prop["chart.gutter.right"];
        			this.gutterTop = prop["chart.gutter.top"];
        			this.gutterBottom = prop["chart.gutter.bottom"];


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
        			 * Set the shadow
        			 */
        			RG.drawBackgroundImage(this);
        			RG.Background_draw(this);

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

        			if (mouseX >= this.gutterLeft
        				 && mouseX <= (ca.width - this.gutterRight)
        				 && mouseY >= this.gutterTop
        				 && mouseY <= (ca.height - this.gutterBottom))
        			{
        				var tooltip = prop["chart.tooltips"] ? prop["chart.tooltips"][0] : null;
        				return {
        					0 : this,
        					1 : 0,
        					2 : tooltip,
        					'object' : this,
        					'index' : 0,
        					'tooltip' : tooltip
        				};
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
        					pa2(co,
        						'b r % % % % f % s %',
        						prop["chart.gutter.left"],
        						prop["chart.gutter.top"],
        						ca.width - prop["chart.gutter.left"] - prop["chart.gutter.right"],
        						ca.height - prop["chart.gutter.top"] - prop["chart.gutter.bottom"],
        						prop["chart.highlight.fill"],
        						prop["chart.highlight.stroke"]
        					);
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
        				this.original_colors["chart.strokestyle"] = RG.arrayClone(prop["chart.strokestyle"]);
        				this.original_colors["chart.highlight.stroke"] = RG.arrayClone(prop["chart.highlight.stroke"]);
        				this.original_colors["chart.highlight.fill"] = RG.arrayClone(prop["chart.highlight.fill"]);
        			}

        			/**
        			 * Parse various properties for colors
        			 */
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
        				grad = RG.createLinearGradient(co,
        					this.gutterLeft,
        					this.gutterTop,
        					ca.width - this.gutterRight,
        					ca.height - this.gutterRight, color);
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
