//XJS=RGraph.led.xjs
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
        if (!nexacro.RGraph.LED)
        {
        	/**
        	 * The traditional radar chart constructor
        	 *
        	 * @param string id   The ID of the canvas
        	 * @param array  data An array of data to represent
        	 */
        	nexacro.RGraph.LED = function (conf)
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
        		this.type = 'radar';
        		this.isRGraph = true;
        		this.text = conf.text;
        		this.uid = RG.CreateUID();
        		this.canvas.uid = this.canvas.uid ? this.canvas.uid : RG.CreateUID();
        		this.colorsParsed = false;
        		this.original_colors = [];

        		this.text = this.text.toLowerCase();

        		this.lights = {
        			'#' : [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
        			'-' : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        			'_' : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1]],
        			'*' : [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1], [0, 0, 0, 0]],
        			'<' : [[0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]],
        			'>' : [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0]],
        			'%' : [[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 0]],
        			// '?': [[0,0,1,0],[0,0,0,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],
        			'!' : [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 1, 0]],
        			// '?': [[0,0,1,0],[0,0,0,0],[0,0,1,0],[0,1,1,0],[1,0,0,0],[1,0,0,0],[0,1,1,1]],
        			'?' : [[1, 1, 1, 0], [0, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0]],
        			'+' : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        			'/' : [[0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        			',' : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0]],
        			'.' : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0]],
        			';' : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0]],
        			':' : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        			'"' : [[1, 0, 1, 0], [1, 0, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        			'[' : [[1, 1, 1, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 0]],
        			']' : [[0, 1, 1, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]],
        			'(' : [[0, 0, 1, 1], [0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1]],
        			')' : [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 1, 1, 0], [1, 1, 0, 0]],
        			'R' : [[1, 0, 0, 0], [1, 1, 0, 0], [1, 1, 1, 0], [1, 1, 1, 1], [1, 1, 1, 0], [1, 1, 0, 0], [1, 0, 0, 0]],
        			'L' : [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1], [0, 0, 1, 1], [0, 0, 0, 1]],
        			'a' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1]],
        			'b' : [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 0]],
        			'c' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'd' : [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 0]],
        			'e' : [[1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 1]],
        			'f' : [[1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]],
        			'g' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 0], [1, 0, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'h' : [[1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1]],
        			'i' : [[0, 1, 1, 1], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 1, 1, 1]],
        			'j' : [[0, 1, 1, 1], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 1, 0, 0]],
        			'k' : [[1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1]],
        			'l' : [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 1]],
        			'm' : [[1, 0, 0, 1], [1, 1, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1]],
        			'n' : [[1, 0, 0, 1], [1, 1, 0, 1], [1, 0, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1]],
        			'o' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'p' : [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]],
        			'q' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 1, 1], [0, 1, 1, 1]],
        			'r' : [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 0], [1, 0, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1]],
        			's' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			't' : [[1, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
        			'u' : [[1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'v' : [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0], [0, 1, 0]],
        			'w' : [[1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 1, 1, 1], [0, 1, 1, 0]],
        			'x' : [[0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 0], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1]],
        			'y' : [[0, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
        			'z' : [[1, 1, 1, 1], [0, 0, 0, 1], [0, 0, 1, 0], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0], [1, 1, 1, 1]],
        			' ' : [[], [], [], [], [], [], []],
        			'0' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'1' : [[0, 0, 1, 0], [0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 1, 1, 1]],
        			'2' : [[0, 1, 1, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 0], [0, 1], [1, 0, 0, 0], [1, 1, 1, 1]],
        			'3' : [[0, 1, 1, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'4' : [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 1], [0, 0, 1, 0], [0, 0, 1, 0]],
        			'5' : [[1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'6' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'7' : [[1, 1, 1, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
        			'8' : [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]],
        			'9' : [[0, 1, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]]
        		};

        		this.properties =
        			{
        			'chart.style.background' : null,
        			'chart.style.gradation' : null,
        			'chart.style.border' : null,
        			'chart.style.bordertype' : null,

        			'chart.dark' : '#00000022',
        			'chart.light' : '#f66f66',
        			'chart.tooltips' : null,
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
        			'chart.radius' : null,
        			'chart.clearto' : [0, 0, 0, 0]
        		};


        		// Short variable names
        		var ca = this.canvas,co = this.context,prop = this.properties,pa2 = RG.path2,ma = Math;


        		/**
        		 * A simple setter
        		 *
        		 * @param string name  The name of the property to set
        		 * @param string value The value of the property
        		 */
        		this.set =
        			this.Set = function (name, value)
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

        			if (name == 'chart.text.diameter')
        			{
        				name = 'chart.text.size';
        			}

        			/**
        			 * If the name is chart.color, set chart.colors too
        			 */
        			if (name == 'chart.color')
        			{
        				this.properties["chart.colors"] = [value];
        			}

        			prop[name] = value;

        			return this;
        		};





        		/**
        		 * A simple getter
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

        			if (name == 'chart.text.diameter')
        			{
        				name = 'chart.text.size';
        			}

        			return prop[name];
        		};




        		/**
        		 * The draw method which does all the brunt of the work
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
        			if (!this.colorsParsed)
        			{
        				this.parseColors();

        				// Don't want to do this again
        				this.colorsParsed = true;
        			}
        			for (var l = 0,len = this.text.length; l < len; l++)
        			{
        				this.DrawLetter(this.text.charAt(l), l);
        			}

        			/**
        			 * Set the title attribute on the canvas
        			 */
        			ca.title = RG.rtrim(this.text);

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
        			 * Fire the RGraph ondraw event
        			 */
        			RG.FireCustomEvent(this, 'ondraw');

        			return this;
        		};


        		/**
        		 * Draws a single letter
        		 *
        		 * @param string lights The lights to draw to draw
        		 * @param int    index  The position of the letter
        		 */
        		this.drawLetter =
        			this.DrawLetter = function (letter, index)
        		{
        			var light = prop["chart.light"];
        			var dark = prop["chart.dark"];
        			var lights = (this.lights[letter] ? this.lights[letter] : [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);


        			/**
        			 * Now allow user specified radius of the size of the lights
        			 */
        			if (typeof (prop["chart.radius"]) == 'number')
        			{
        				radius = Number(prop["chart.radius"]);
        				diameter = 2 * radius;
        				lwidth = diameter * 5;
        			}
        			else
        			{
        				var radius = ((ca.width / this.text.length) / 5) / 2;
        				var diameter = radius * 2;
        				var lwidth = diameter * 5;
        			}

        			// var lheight = diameter * 7;
        			// if (lheight > ca.height) {
        			// lheight  = ca.height;
        			// diameter = (lheight / 7);
        			// radius   = (diameter / 2);
        			// lwidth   = diameter * 5;
        			// }

        			for (var i = 0; i < 7; i++)
        			{
        				for (var j = 0; j < 5; j++)
        				{
        					var x = (j * diameter) + (index * lwidth) + radius;
        					var y = ((i * diameter)) + radius;

        					// Draw a circle
        					RG.setElementCommonStyle(co, (lights[i][j] ? light : dark), 1);
        					RG.setElementCommonStyle(co, (lights[i][j] ? '#cccccc' : [0, 0, 0, 0]), 2);
        					co.beginPath();
        					co.arc(x, y, radius, 0, RG.TWOPI, 0);

        					co.stroke();
        					co.fill();
        				}
        			}
        		};

        		/**
        		 * A place holder
        		 *
        		 * @param object e The event object
        		 */
        		this.getValue = function (e)
        		{
        			return this.text;
        		};

        		/**
        		 * This allows for easy specification of gradients
        		 */
        		this.parseColors = function ()
        		{
        			// Save the original colors so that they can be restored when the canvas is reset
        			if (this.original_colors.length === 0)
        			{
        				this.original_colors["chart.dark"] = RG.array_clone(prop["chart.dark"]);
        				this.original_colors["chart.light"] = RG.array_clone(prop["chart.light"]);
        			}

        			prop["chart.dark"] = this.parseSingleColorForGradient(prop["chart.dark"]);
        			prop["chart.light"] = this.parseSingleColorForGradient(prop["chart.light"]);
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
        				grad = R.createLinearGradient(co, 0, 0, 0, ca.height, color);
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

        			this[type] = func;

        			return this;
        		};




        		/**
        		 * A placeholder
        		 */
        		this.getObjectByXY = function ()
        		{
        		};

        		RG.Register(this);

        		return this;
        	};
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
