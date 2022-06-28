//XJS=RGraph.common.dynamic.xjs
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
         * This is the canvas mouseup event listener. It installs the mouseup event for the
         * canvas. The mouseup event then checks the relevant object.
         *
         * @param object obj The chart object
         *
         * RGraph.window_mouseup_event_listener
         */
        nexacro.RGraph.prototype.CanvasMouseupListener = function (obj, objCvs, e)
        {
        	if (!this.isNull(obj) && this.tooltip)
        	{
        		var shape = obj.getShape(e);
        		if (shape && shape["tooltip"])
        		{
        			var text = shape["tooltip"];
        			if (text)
        			{
        				var type = shape["object"].type;
        				this.clear(obj.canvas);
        				this.redraw();
        				this.Registry_set('chart.tooltip.shape', shape);

        				// Note that tooltips are positioned at the pointer
        				// now; and thats done within the .tooltip() function
        				this.tooltip(obj, text, shape["x"], shape["y"], shape["index"], e);

        				obj.highlight(shape);

        				// Add the shape that triggered the tooltip
        				if (this.Registry_get('chart.tooltip'))
        				{
        					this.Registry_get('chart.tooltip').__shape__ = shape;

        					this.evaluateCursor(e);
        				}
        				e.cancelBubble = true;
        				e.stopPropagation();
        				return false;
        			}
        		}
        		else
        		{
        			this.clear(obj.canvas);
        			this.hideTooltip();
        			this.redraw();
        			obj.canvas.rgraph_mouseup_event_listener(e);
        		}
        	}
        	// =========================================================================
        	// Adjusting
        	// ========================================================================

        	if (this.Registry_get('chart.adjusting') || this.Registry_get('chart.adjusting.gantt'))
        	{
        		// If it's a line chart update the data_arr variable
        		if (obj && obj.type === 'line')
        		{
        			obj.data_arr = this.arrayLinearize(obj.data);
        		}
        		this.fireCustomEvent(this.Registry_get('chart.adjusting'), 'onadjustend');
        	}

        	this.Registry_set('chart.adjusting', null);
        	this.Registry_set('chart.adjusting.shape', null);
        	this.Registry_set('chart.adjusting.gantt', null);

        	/**
        	 * If the mouse pointer is over a "front" chart this prevents charts behind it
        	 * from firing their events.
        	 */
        };

        /**
         * This is the canvas mousemove event listener.
         *
         * @param object obj The chart object
         */
        nexacro.RGraph.prototype.CanvasMousemoveListener = function (objCvs, e)
        {
        	e = this.FixEventObject(objCvs, e);
        	this._objOrgCanvas = objCvs;
        	/**
        	 * Go through all the objects and check them to see if anything needs doing
        	 */
        	var objects = this.OR_getObjectsByXY(e);

        	// Necessary to track which objects have had the mouseover
        	// triggered on them
        	var uids = [];
        	if (objects && objects.length > 0)
        	{
        		for (var i = 0,len = objects.length; i < len; i += 1)
        		{
        			var obj = objects[i];
        			var id = obj.id;
        			// Record the uid
        			uids[obj.uid] = true;
        			if (!obj.getShape)
        			{
        				continue;
        			}
        			var shape = obj.getShape(e);
        			// Fire the onmouseout event if necessary
        			if ((!shape && typeof obj.__mouseover_shape_index__ === 'number') ||
        				(shape && typeof obj.__mouseover_shape_index__ === 'number' && shape.index !== obj.__mouseover_shape_index__))
        			{
        				this.fireCustomEvent(obj, 'onmouseout');
        			}

        			//
        			// If the mouse is over a key element add the details
        			// of it to the Registry
        			//
        			if (obj.coords && obj.coords.key && obj.coords.key.length)
        			{
        				var mouseXY = this.getMouseXY(e);
        				for (var i = 0,overkey = false; i < obj.coords.key.length; ++i)
        				{
        					if (mouseXY[0] >= obj.coords.key[i][0]
        						 && mouseXY[0] <= (obj.coords.key[i][0] + obj.coords.key[i][2])
        						 && mouseXY[1] >= obj.coords.key[i][1]
        						 && mouseXY[1] <= (obj.coords.key[i][1] + obj.coords.key[i][3]))
        					{
        						this.Registry_set('key-element', obj.coords.key[i]);
        						overkey = true;
        					}
        					if (!overkey)
        					{
        						this.Registry_set('key-element', null);
        					}
        				}
        			}
        			// ================================================================================================ //
        			// This facilitates the chart.events.mousemove option
        			// ================================================================================================ //
        			var func = obj.get('chart.events.mousemove');
        			if (!func && typeof obj.onmousemove == 'function')
        			{
        				func = obj.onmousemove;
        			}
        			/**
        			 *
        			 */
        			var func2;
        			if (shape)
        			{
        				var index = shape["object"].type == 'scatter' ? shape["index_adjusted"] : shape["index"];
        				if (typeof (obj['$' + index]) == 'object' && typeof (obj['$' + index].onmousemove) == 'function')
        				{
        					func2 = obj['$' + index].onmousemove;
        				}
        			}

        			/**
        			 * This bit saves the current pointer style if there isn't one already saved
        			 */
        			if (shape && (typeof (func) == 'function' || typeof (func2) == 'function' || typeof obj.Get('link') === 'string'))
        			{
        				if (obj.Get('chart.events.mousemove.revertto') == null)
        				{
        					obj.Set('chart.events.mousemove.revertto', e.target.style.cursor);
        				}
        				if (typeof (func) == 'function')
        				{
        					this.custom_events_mousemove_pointer = func(e, shape);
        				}
        				if (typeof (func2) == 'function')
        				{
        					this.custom_events_mousemove_pointer = this.custom_events_mousemove_pointer || func2(e, shape);
        				}

        				// Go through the RGraph.events array looking for more
        				// event listeners
        				if (typeof this.events === 'object'
        					 && typeof this.events[obj.uid] === 'object')
        				{
        					for (i in this.events[obj.uid])
        					{
        						if (typeof i === 'string'
        							 && typeof this.events[obj.uid][i] === 'object'
        							 && this.events[obj.uid][i][1] === 'onmousemove'
        							 && typeof this.events[obj.uid][i][2] === 'function')
        						{
        							(this.events[obj.uid][i][2])(obj);
        						}
        					}
        				}
        			}
        			else if (typeof (obj.Get('chart.events.mousemove.revertto')) == 'string')
        			{
        				this.cursor.push('default');
        				obj.Set('chart.events.mousemove.revertto', null);
        			}
        			// ======================================================
        			// This bit of code facilitates the onmouseover event
        			// ======================================================
        			var func = obj.properties["chart.events.mouseover"];
        			if (!func && typeof obj.onmouseover === 'function')
        			{
        				func = obj.onmouseover;
        			}
        			// Allow for individually index functions to be specified
        			if (shape)
        			{
        				var index = shape["object"].type == 'scatter' ? shape["index_adjusted"] : shape["index"];
        				if (typeof (obj['$' + index]) == 'object' && typeof (obj['$' + index].onmouseover) == 'function')
        				{
        					var func2 = obj['$' + index].onmouseover;
        				}
        			}
        			else
        			{
        				obj.__mouseover_shape_index__ = null;
        				this.__mouseover_objects__ = [];
        			}
        			if (typeof this.__mouseover_objects__ === 'undefined')
        			{
        				this.__mouseover_objects__ = [];
        			}
        			if (shape)
        			{
        				if ((obj.__mouseover_shape_index__ === shape.index) === false)
        				{
        					obj.__mouseover_shape_index__ = shape.index;
        					this.__mouseover_objects__.push(obj);

        					if (func)
        					{
        						func(e, shape);
        					}
        					if (func2)
        					{
        						func2(e, shape);
        					}

        					// Go through the RGraph.events array looking for more
        					// event listeners
        					if (typeof this.events === 'object'
        						 && typeof this.events[obj.uid] === 'object')
        					{
        						for (i in this.events[obj.uid])
        						{
        							if (typeof i === 'string'
        								 && typeof this.events[obj.uid][i] === 'object'
        								 && this.events[obj.uid][i][1] === 'onmouseover'
        								 && typeof this.events[obj.uid][i][2] === 'function')
        							{
        								(this.events[obj.uid][i][2])(obj);
        							}
        						}
        					}
        				}
        			}
        			else
        			{
        				obj.__mouseover_shape_index__ = null;
        				this.__mouseover_objects__ = [];
        			}
        			// ================================================================================================ //
        			// Tooltips
        			// ================================================================================================ //
        			var current_tooltip = this.Registry_get('chart.tooltip');
        			var tooltips = obj.get('chart.tooltips');
        			var tooltips_event = obj.Get('chart.tooltips.event');
        			if (shape
        				 && (tooltips && tooltips[shape["index"]] || shape["tooltip"])
        				 && tooltips_event.indexOf('mousemove') !== -1
        				 && (this.isNull(current_tooltip)// Is there a tooltip being shown?
        				 || (current_tooltip.__object__ && (obj.uid != current_tooltip.__object__.uid))// Same object?
        				 || (current_tooltip.__index__ != shape["index"])// Same tooltip index?
        				 || (typeof shape["dataset"] === 'number' && shape["dataset"] != current_tooltip.__shape__["dataset"])
        ))
        			{
        				this.CanvasMouseupListener(obj, objCvs.cvs, e);
        				// this.clear(obj.canvas);
        				// this.hideTooltip();
        				// this.redraw();
        				// obj.canvas.rgraph_mouseup_event_listener(e);

        				return;
        			}
        			// ================================================================================================ //
        			// Adjusting
        			// ================================================================================================ //
        			if (obj && obj.get('chart.adjustable'))
        			{
        				obj.Adjusting_mousemove(e);
        			}
        			/**
        			 * This facilitates breaking out of the loop when a shape has been found -
        			 * ie the cursor is over a shape an upper chart
        			 */
        			if (shape || (obj.overChartArea && obj.overChartArea(e)))
        			{
        				break;
        			}
        		}

        		//
        		// For all objects that are NOT mouseover'ed, reset the
        		// mouseover flag back to null
        		//
        		var objects = this.OR_getObjectsByCanvasID(e.target.id);

        		for (var i = 0; i < objects.length; ++i)
        		{
        			if (!uids[objects[i].uid])
        			{
        				objects[i].__mouseover_shape_index__ = null;
        			}
        		}
        	}
        	else
        	{
        		// Reset the mouseover flag on all of this canvas tags objects
        		var objects = this.OR_getObjectsByCanvasID(e.target.id);

        		for (var i = 0; i < objects.length; i++)
        		{
        			if (typeof objects[i].__mouseover_shape_index__ === 'number')
        			{
        				this.fireCustomEvent(objects[i], 'onmouseout');
        			}

        			objects[i].__mouseover_shape_index__ = null;
        		}

        		this.__mouseover_objects__ = [];
        	}
        	// ================================================================================================ //
        	// Crosshairs
        	// ================================================================================================ //
        	if (e.target && e.target.__object__ && e.target.__object__.get('chart.crosshairs'))
        	{
        		this.drawCrosshairs(e, e.target.__object__);
        	}
        	// ================================================================================================ //
        	// Interactive key No LONGER REQUIRED
        	// ================================================================================================ //
        	// if (typeof InteractiveKey_line_mousemove == 'function') InteractiveKey_line_mousemove(e);
        	// if (typeof InteractiveKey_pie_mousemove == 'function') InteractiveKey_pie_mousemove(e);
        	// ================================================================================================ //
        	// Annotating
        	// ================================================================================================ //
        	if (e.target.__object__ && e.target.__object__.get('chart.annotatable') && this.annotating_canvas_onmousemove)
        	{
        		this.annotating_canvas_onmousemove(e);
        	}
        	/**
        	 * Determine the pointer
        	 */
        	this.evaluateCursor(e);
        };
        /**
         * This is the canvas click event listener. Used by the pseudo event listener
         *
         * @param object obj The chart object
         */
        nexacro.RGraph.prototype.CanvasClickListener = function (objCvs, e)
        {
        	e = this.fixEventObject(objCvs, e);
        	this._objOrgCanvas = objCvs;
        	var objects = this.OR_getObjectsByXY(e);
        	for (var i = 0,len = objects.length; i < len; i += 1)
        	{
        		var obj = objects[i];
        		var id = obj.id;
        		var shape = obj.getShape(e);

        		/**
        		 * This bit saves the current pointer style if there isn't one already saved
        		 */
        		var func = obj.get('chart.events.click');
        		if (!func && typeof (obj.onclick) == 'function')
        		{
        			func = obj.onclick;
        		}
        		if (shape && typeof func == 'function')
        		{
        			func(e, shape);

        			// Go through the RGraph.events array looking for more
        			// event listeners
        			if (typeof this.events === 'object'
        				 && typeof this.events[obj.uid] === 'object')
        			{
        				for (var ii in this.events[obj.uid])
        				{
        					if (typeof i === 'string'
        						 && typeof this.events[obj.uid][ii] === 'object'
        						 && this.events[obj.uid][ii][1] === 'onclick'
        						 && typeof this.events[obj.uid][ii][2] === 'function')
        					{
        						(this.events[obj.uid][ii][2])(obj);
        					}
        				}
        			}
        			/**
        			 * If objects are layered on top of each other this return
        			 * stops objects underneath from firing once the "top"
        			 * objects user event has fired
        			 */
        			return;
        		}
        		//
        		// Handle the key click event
        		//
        		var key = this.Registry_get('key-element');
        		if (key)
        		{
        			this.fireCustomEvent(obj, 'onkeyclick');
        		}

        		/**
        		 * The property takes priority over this.
        		 */
        		if (shape)
        		{
        			var index = shape["object"].type == 'scatter' ? shape["index_adjusted"] : shape["index"];
        			if (typeof (index) == 'number' && obj['$' + index])
        			{
        				var func = obj['$' + index].onclick;
        				if (typeof (func) == 'function')
        				{
        					func(e, shape);

        					/**
        					 * If objects are layered on top of each other this return
        					 * stops objects underneath from firing once the "top"
        					 * objects user event has fired
        					 */
        					return;
        				}
        			}
        			if ((obj.Get('chart.tooltips') && obj.Get('chart.tooltips')[shape["index"]] || shape["tooltip"])
        				 && (obj.Get('chart.tooltips.event') == 'onclick'))
        			{
        				this.CanvasMouseupListener(obj, objCvs.cvs, e);
        			}
        		}

        		/**
        		 * This facilitates breaking out of the loop when a shape has been found -
        		 * ie the cursor is over a shape an upper chart
        		 */
        		if (shape || (obj.overChartArea && obj.overChartArea(e)))
        		{
        			break;
        		}
        	}
        };
        /**
         * This function evaluates the various cursor settings and if there's one for pointer, changes it to that
         */
        nexacro.RGraph.prototype.evaluateCursor =
        	nexacro.RGraph.prototype.EvaluateCursor = function (e)
        {
        	var obj = null;
        	var mouseXY = this.getMouseXY(e);
        	var mouseX = mouseXY[0];
        	var mouseY = mouseXY[1];
        	var canvas = e.target;

        	/**
        	 * Tooltips cause the mouse pointer to change
        	 */
        	var objects = this.OR_getObjectsByCanvasID(canvas.id);

        	for (var i = 0,len = objects.length; i < len; i += 1)
        	{
        		if ((objects[i].getShape && objects[i].getShape(e)) || (objects[i].overChartArea && objects[i].overChartArea(e)))
        		{
        			var obj = objects[i];
        			var id = obj.id;
        		}
        	}

        	if (!this.isNull(obj))
        	{
        		if (obj.getShape && obj.getShape(e))
        		{
        			var shape = obj.getShape(e);

        			if (obj.get('chart.tooltips'))
        			{
        				var text = this.parseTooltipText(obj.get('chart.tooltips'), shape["index"]);

        				if (!text && shape["object"].type == 'scatter' && shape["index_adjusted"])
        				{
        					text = this.parseTooltipText(obj.get('chart.tooltips'), shape["index_adjusted"]);
        				}

        				/**
        				 * This essentially makes front charts "hide" the back charts
        				 */
        				if (text)
        				{
        					var pointer = true;
        				}
        			}
        		}

        		/**
        		 * Now go through the key coords and see if it's over that.
        		 */
        		if (!this.isNull(obj) && obj.Get('chart.key.interactive'))
        		{
        			for (var j = 0; j < obj.coords.key.length; ++j)
        			{
        				if (mouseX > obj.coords.key[j][0] && mouseX < (obj.coords.key[j][0] + obj.coords.key[j][2]) && mouseY > obj.coords.key[j][1] && mouseY < (obj.coords.key[j][1] + obj.coords.key[j][3]))
        				{
        					var pointer = true;
        				}
        			}
        		}
        	}

        	/**
        	 * It can be specified in the user mousemove event - remember it can now
        	 * be specified in THREE ways
        	 */
        	if (this.custom_events_mousemove_pointer)
        	{
        		var pointer = true;
        		this.custom_events_mousemove_pointer = false;
        	}
        	/*


        	 var index = shape['object'].type == 'scatter' ? shape['index_adjusted'] : shape['index'];
        	 if (!RG.isNull(obj['$' + index]) && typeof(obj['$' + index].onmousemove) == 'function') {
        	 var str = (obj['$' + index].onmousemove).toString();
        	 if (str.match(/pointer/) && str.match(/cursor/) && str.match(/style/)) {
        	 var pointer = true;
        	 }
        	 }
        	 }
        	 */

        	/**
        	 * Is the chart resizable? Go through all the objects again
        	 */
        	var objects = this.OR.objects.byCanvasID;

        	for (var i = 0,len = objects.length; i < len; i += 1)
        	{
        		if (objects[i] && objects[i][1].Get('chart.resizable'))
        		{
        			var resizable = true;
        		}
        	}

        	if (resizable && mouseX > (e.target.width - 32) && mouseY > (e.target.height - 16))
        	{
        		pointer = true;
        	}

        	if (pointer)
        	{
        		e.target.style.cursor = 'pointer';
        	}
        	else if (e.target.style.cursor == 'pointer')
        	{
        		e.target.style.cursor = 'default';
        	}
        	else
        	{
        		e.target.style.cursor = null;
        	}
        	// =========================================================================
        	// Resize cursor - check mouseis in bottom left corner and if it is change it
        	// =========================================================================
        	if (resizable && mouseX >= (e.target.width - 15) && mouseY >= (e.target.height - 15))
        	{
        		e.target.style.cursor = 'move';
        	}
        	else if (e.target.style.cursor === 'move')
        	{
        		e.target.style.cursor = 'default';
        	}
        	// =========================================================================
        	// Interactive key
        	// =========================================================================
        	if (typeof mouse_over_key == 'boolean' && mouse_over_key)
        	{
        		e.target.style.cursor = 'pointer';
        	}
        	// =========================================================================
        	// Gantt chart adjusting
        	// =========================================================================

        	// if (obj && obj.type == 'gantt' && obj.get('chart.adjustable')) {
        	// if (obj.getShape && obj.getShape(e)) {
        	// e.target.style.cursor = 'ew-resize';
        	// } else {
        	// e.target.style.cursor = 'default';
        	// }
        	// } else if (!obj || !obj.type) {
        	// e.target.style.cursor = cursor;
        	// }
        	// =========================================================================
        	// Line chart adjusting
        	// =========================================================================
        	if (obj && obj.type == 'line' && obj.get('chart.adjustable'))
        	{
        		if (obj.getShape)
        		{
        			var shape = obj.getShape(e);

        			if (shape && obj.isAdjustable(shape))
        			{
        				e.target.style.cursor = 'ns-resize';
        			}
        		}
        		else
        		{
        			e.target.style.cursor = 'default';
        		}
        	}
        	// =========================================================================
        	// Annotatable
        	// =========================================================================
        	if (e.target.__object__ && e.target.__object__.get('chart.annotatable'))
        	{
        		e.target.style.cursor = 'crosshair';
        	}
        	// =========================================================================
        	// Drawing API link
        	// =========================================================================
        	if (obj && obj.type === 'drawing.text' && shape && typeof obj.get('link') === 'string')
        	{
        		e.target.style.cursor = 'pointer';
        	}
        };

        /**
         * This function handles the tooltip text being a string, function
         *
         * @param mixed tooltip This could be a string or a function. If it's a function it's called and
         *                       the return value is used as the tooltip text
         * @param numbr idx The index of the tooltip.
         */
        nexacro.RGraph.prototype.parseTooltipText = function (tooltips, idx)
        {
        	// No tooltips
        	if (!tooltips)
        	{
        		return null;
        	}
        	// Get the tooltip text
        	if (typeof tooltips == 'function')
        	{
        		var text = tooltips(idx);

        		// A single tooltip. Only supported by the Scatter chart
        	}
        	else if (typeof tooltips == 'string')
        	{
        		var text = tooltips;
        	}
        	else if (typeof tooltips == 'object' && typeof tooltips[idx] == 'function')
        	{
        		var text = tooltips[idx](idx);
        	}
        	else if (typeof tooltips[idx] == 'string' && tooltips[idx])
        	{
        		var text = tooltips[idx];
        	}
        	else if (typeof tooltips[idx] == 'number' && tooltips[idx])
        	{
        		var text = tooltips[idx];
        	}
        	else
        	{
        		var text = '';
        	}

        	if (text == 'undefined')
        	{
        		text = '';
        	}
        	else if (text == 'null')
        	{
        		text = '';
        	}

        	// Conditional in case the tooltip file isn't included
        	return this.getTooltipTextFromDIV(text);
        };


        /**
         * Draw crosshairs if enabled
         *
         * @param object obj The graph object (from which we can get the context and canvas as required)
         */
        nexacro.RGraph.prototype.drawCrosshairs =
        	nexacro.RGraph.prototype.DrawCrosshairs = function (e, obj)
        {
        	var e = this.fixEventObject(e),width = obj.canvas.width,height = obj.canvas.height,mouseXY = this.getMouseXY(e),x = mouseXY[0],y = mouseXY[1],gutterLeft = obj.gutterLeft,gutterRight = obj.gutterRight,gutterTop = obj.gutterTop,gutterBottom = obj.gutterBottom,Mathround = Math.round,prop = obj.properties,co = obj.context,ca = obj.canvas;

        	this.redrawCanvas(ca);

        	if (x >= gutterLeft
        		 && y >= gutterTop
        		 && x <= (width - gutterRight)
        		 && y <= (height - gutterBottom))
        	{
        		var linewidth = prop["chart.crosshairs.linewidth"] ? prop["chart.crosshairs.linewidth"] : 1;
        		co.lineWidth = linewidth ? linewidth : 1;

        		co.beginPath();
        		co.strokeStyle = prop["chart.crosshairs.color"];

        		/**
        		 * The chart.crosshairs.snap option
        		 */
        		if (prop["chart.crosshairs.snap"])
        		{
        			// Linear search for the closest point
        			var point = null;
        			var dist = null;
        			var len = null;

        			if (obj.type == 'line')
        			{
        				for (var i = 0; i < obj.coords.length; ++i)
        				{
        					var length = this.getHypLength(obj.coords[i][0], obj.coords[i][1], x, y);

        					// Check the mouse X coordinate
        					if (typeof dist != 'number' || length < dist)
        					{
        						var point = i;
        						var dist = length;
        					}
        				}

        				x = obj.coords[point][0];
        				y = obj.coords[point][1];

        				// Get the dataset
        				for (var dataset = 0; dataset < obj.coords2.length; ++dataset)
        				{
        					for (var point = 0; point < obj.coords2[dataset].length; ++point)
        					{
        						if (obj.coords2[dataset][point][0] == x && obj.coords2[dataset][point][1] == y)
        						{
        							ca.__crosshairs_snap_dataset__ = dataset;
        							ca.__crosshairs_snap_point__ = point;
        						}
        					}
        				}
        			}
        			else
        			{
        				for (var i = 0; i < obj.coords.length; ++i)
        				{
        					for (var j = 0; j < obj.coords[i].length; ++j)
        					{
        						// Check the mouse X coordinate
        						var len = this.getHypLength(obj.coords[i][j][0], obj.coords[i][j][1], x, y);

        						if (typeof (dist) != 'number' || len < dist)
        						{
        							var dataset = i;
        							var point = j;
        							var dist = len;
        						}
        					}
        				}
        				ca.__crosshairs_snap_dataset__ = dataset;
        				ca.__crosshairs_snap_point__ = point;


        				x = obj.coords[dataset][point][0];
        				y = obj.coords[dataset][point][1];
        			}
        		}

        		// Draw a top vertical line
        		if (prop["chart.crosshairs.vline"])
        		{
        			co.moveTo(Mathround(x), Mathround(gutterTop));
        			co.lineTo(Mathround(x), Mathround(height - gutterBottom));
        		}

        		// Draw a horizontal line
        		if (prop["chart.crosshairs.hline"])
        		{
        			co.moveTo(Mathround(gutterLeft), Mathround(y));
        			co.lineTo(Mathround(width - gutterRight), Mathround(y));
        		}
        		co.stroke();
        		/**
        		 * Need to show the coords?
        		 */
        		if (obj.type == 'scatter' && prop["chart.crosshairs.coords"])
        		{
        			var xCoord = (((x - gutterLeft) / (width - gutterLeft - gutterRight)) * (prop["chart.xmax"] - prop["chart.xmin"])) + prop["chart.xmin"];
        			xCoord = xCoord.toFixed(prop["chart.scale.decimals"]);
        			var yCoord = obj.max - (((y - prop["chart.gutter.top"]) / (height - gutterTop - gutterBottom)) * obj.max);

        			if (obj.type == 'scatter' && obj.properties["chart.xaxispos"] == 'center')
        			{
        				yCoord = (yCoord - (obj.max / 2)) * 2;
        			}

        			yCoord = yCoord.toFixed(prop["chart.scale.decimals"]);

        			var div = this.Registry_get('chart.coordinates.coords.div');
        			var mouseXY = this.getMouseXY(e);
        			var canvasXY = this.getCanvasXY(ca);

        			if (!div)
        			{
        				var div = document.createElement('DIV');
        				div.__object__ = obj;
        				div.style.position = 'absolute';
        				div.style.backgroundColor = 'white';
        				div.style.border = '1px solid black';
        				div.style.fontFamily = 'Arial, Verdana, sans-serif';
        				div.style.fontSize = '10pt';
        				div.style.padding = '2px';
        				div.style.opacity = 1;
        				div.style.WebkitBorderRadius = '3px';
        				div.style.borderRadius = '3px';
        				div.style.MozBorderRadius = '3px';
        				document.body.appendChild(div);

        				this.Registry_set('chart.coordinates.coords.div', div);
        			}

        			// Convert the X/Y pixel coords to correspond to the scale
        			div.style.opacity = 1;
        			div.style.display = 'inline';

        			if (!prop["chart.crosshairs.coords.fixed"])
        			{
        				div.style.left = ma.max(2, (e.pageX - div.offsetWidth - 3)) + 'px';
        				div.style.top = ma.max(2, (e.pageY - div.offsetHeight - 3)) + 'px';
        			}
        			else
        			{
        				div.style.left = canvasXY[0] + gutterLeft + 3 + 'px';
        				div.style.top = canvasXY[1] + gutterTop + 3 + 'px';
        			}

        			div.innerHTML = '<span style="color: #666">' + prop["chart.crosshairs.coords.labels.x"] + ':</span> ' + xCoord + '<br><span style="color: #666">' + prop["chart.crosshairs.coords.labels.y"] + ':</span> ' + yCoord;

        			obj.canvas.addEventListener('mouseout', this.hideCrosshairCoords, false);

        			ca.__crosshairs_labels__ = div;
        			ca.__crosshairs_x__ = xCoord;
        			ca.__crosshairs_y__ = yCoord;
        		}
        		else if (prop["chart.crosshairs.coords"])
        		{
        			alert('[RGRAPH] Showing crosshair coordinates is only supported on the Scatter chart');
        		}

        		/**
        		 * Fire the oncrosshairs custom event
        		 */
        		this.fireCustomEvent(obj, 'oncrosshairs');
        	}
        	else
        	{
        		this.hideCrosshairCoords();
        	}
        };

        //
        // Adds a mousemove event listener that highlights a segment based on th
        // mousemove event. Used in the Rose and the RScatter charts
        //
        // @param int segments The number of segments to allow
        //
        nexacro.RGraph.prototype.allowSegmentHighlight = function (opt)
        {
        	var obj = opt.object,count = opt.count,fill = opt.fill,stroke = opt.stroke;

        	if (!this.segmentHighlightFunction)
        	{
        		this.segmentHighlightFunction = function (e)
        		{
        			var mouseXY = this.getMouseXY(e);
        			var angle = this.getAngleByXY(obj.centerx, obj.centery, mouseXY[0], mouseXY[1]);

        			angle += this.HALFPI;

        			if (angle > this.TWOPI)
        			{
        				angle -= this.TWOPI;
        			}

        			this.redraw();

        			var start = 0;
        			var end = 0;
        			var a = (ma.PI * 2) / count;

        			//
        			// Radius
        			//
        			var r = obj.radius;


        			(function ()
        			{
        				for (i = 0; i < count; i += 1)
        				{
        					if (angle < (a * (i + 1)))
        					{
        						start = i * a;
        						end = (i + 1) * a;

        						return;
        					}
        				}
        			})();

        			start -= this.HALFPI;
        			end -= this.HALFPI;


        			this.path2(
        				obj.context,
        				'b m % % a % % % % % false c s % f %',
        				obj.centerx, obj.centery,
        				obj.centerx, obj.centery, r, start, end,
        				stroke,
        				fill
        			);
        		};
        		obj.canvas.addEventListener('mousemove', this.segmentHighlightFunction, false);
        	}
        };


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
