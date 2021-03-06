//XJS=RGraph.common.core.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        // version: 2017-02-18
            /**
            /**
            * o--------------------------------------------------------------------------------o
            * | This file is part of the nexacro.RGraph.prototyperaph package - you can learn more at:               |
            * |                                                                                |
            * |                          http://www.rgraph.net                                 |
            * |                                                                                |
            * | nexacro.RGraph.prototyperaph is licensed under the Open Source MIT license. That means that it's     |
            * | totally free to use!                                                           |
            * o--------------------------------------------------------------------------------o
            */

        if(!nexacro.RGraph)
        {
        	nexacro.RGraph = function (context,oDiv) {
        		oDiv.set_scrollbars("none");
        		this.id				= context.name + "_" + oDiv.parent.name + "_" + oDiv.name;
        		this.context  		= context;
        		this.div		 	= oDiv;
        		if(!context.RGARRAY) context.RGARRAY = [];
        		var bFind = false;
        		trace("Rg Common.core Line 23");
        		for(var i=0;i<context.RGARRAY.length;i++)
        		{
        		trace("Rg Common.core Line 26 for loop");
        		trace("context.RGARRAY[i].id : "+context.RGARRAY[i].id);
        		trace("this.id : "+this.id);
        			if(context.RGARRAY[i].id == this.id)
        			{
        				trace("Rg Common.core Line 29 if grammer");
        				trace("context : "+this.context);
        				trace("context.RGARRAY[i].id : "+context.RGARRAY[i].id);
        				trace("this.id : "+this.id);
        				trace("context.RGARRAY[i] : "+context.RGARRAY[i].name);
        				this.removeComponent(context.RGARRAY[i]);
        				context.RGARRAY[i] = this;
        				bFind = true;
        				break;
        			}
        		}
        		if(bFind == false)
        		{
        			context.RGARRAY[context.RGARRAY.length] = this;
        		}

        		this.isRGraph 		= true;
        		this.Highlight      = {};
        		this.Registry       = {};
        		this.Registry.store = [];
        		this.Registry.store['chart.event.handlers']       = [];
        		this.Registry.store['__rgraph_event_listeners__'] = []; // Used in the new system for tooltips
        		this.Background     = {};
        		this.background     = {};
        		this.objects        = [];
        		this.Resizing       = {};
        		this.events         = [];
        		this.cursor         = [];
        		this.Effects        = this.Effects || {};
        		this.cache          = [];
        		this.OR = this.ObjectRegistry          = { "_patent" : this ,
        													"objects" : {
        																"byUID" : [] , "byCanvasID" : []
        																}
        												  };
        		this.ma       = Math;
        		this.PI       = Math.PI;
        		this.HALFPI   = Math.PI / 2;
        		this.TWOPI    = Math.PI * 2;

        		this.ISRUNTIME = (nexacro.Browser == "Runtime");
        		var ua		  = "";
        		if(this.ISRUNTIME == false)
        		{
        			ua = navigator.userAgent;
        		}
        		this.ISFF     = ua.indexOf('Firefox') != -1;
        		this.ISOPERA  = ua.indexOf('Opera') != -1;
        		this.ISCHROME = ua.indexOf('Chrome') != -1;
        		this.ISSAFARI = ua.indexOf('Safari') != -1 && !this.ISCHROME;
        		this.ISWEBKIT = ua.indexOf('WebKit') != -1;

        		this.ISIE   = ua.indexOf('Trident') > 0 || ua.indexOf('MSIE') > 0;
        		this.ISIE8  = ua.indexOf('MSIE 8') > 0;
        		this.ISIE9  = ua.indexOf('MSIE 9') > 0;
        		this.ISIE10 = ua.indexOf('MSIE 10') > 0;
        		this.ISOLD  = this.ISIE8; // MUST be here

        		this.ISIE11UP = ua.indexOf('MSIE') == -1 && ua.indexOf('Trident') > 0;
        		this.ISIE10UP = this.ISIE10 || this.ISIE11UP;
        		this.ISIE9UP  = this.ISIE9 || this.ISIE10UP;

        		this._cnt = -1;
        		this._odiv = [];
        		this._cvs = [];
        		this._ctx = [];
        		this._ctxid = [];
        		this._objTimerTarget;	// tooltip
        		this._objEtcTimerTarget = [];	// etc
        		this._objOrgCanvas;
        		this._nDumMoveX = 0;
        		this._nDumMoveY = 0;
        		this._nDumUpX = 0;
        		this._nDumUpY = 0;
        		this._objAnimation = [];
        		this._objAnimationTimerID = [];
        		this._nCurrAnimationFrame = [];
        		this._nEndAnimationFrame = [];
        		this._objAnimationFunc = [];
        		this._objAnimationFunc2 = [];
        		this._objAnimationCallBack = [];
        		//this.__chartobjects = [];

        		if(bFind == false)
        		{
        			this.load(context);
        		} else {
        			this.OR_clear("",this.div);
        		}
        		this.createCanvas("cvs");

        		oDiv._RGObject = this;

        		this.tooltipStyle = {
        				animation:				true,
        				halign:					'left',
        				valign:					'top',
        				background:				'transparent',
        				border:    				'2px solid #554466',
        				bordertype:   			'round 5px 3px',
        				opacity:   				100,
        				shadow:    				'outer 3,3 2 gray',
        				contentsAlign: 			'left middle',
        				contentsBackground: 	'yellow',
        				contentsColor:   		'#444444ff',
        				contentsFont: 			'9 Tahoma,Arial',
        				contentsPadding:  		'2px 2px 2px 2px',
        				contentsOpacity:		90
        		};

        	};
        	if(!nexacro.Form._divonsize) {
        		nexacro.Form.prototype._divonsize =  function(obj, e)
        		{
        			var collect = obj.components;
        			for(var i=(collect.length-1);i>-1;i--)
        			{
        				collect[i].set_width(e.cx);
        				collect[i].set_height(e.cy);
        			}
        			if(obj._RGObject)
        			{
        				var r = obj._RGObject;
        				r.redraw();
        				/*
        				if(r.__chartobjects)
        				{
        					for(var i=0;i<r.__chartobjects.length;i++)
        					{
        						r.hideTooltip(r.__chartobjects[i].canvas);
        						r.__chartobjects[i].draw();
        					}
        				}
        				*/
        			}
        		};
        		nexacro.Form.prototype._formonbeforeclose =  function(obj, e)
        		{
        			if(obj.RGARRAY)
        			{
        				var oRG;
        				for(var i=0;i<obj.RGARRAY.length;i++)
        				{
        					oRG = obj.RGARRAY[i];
        					if(oRG && oRG.context)
        					{
        						oRG.OR_clear("",oRG.div);
        						oRG.div._RGObject = null;
        						var form = oRG.context;
        						var sid = '__rgraph_tooltipmark_';
        						var cid = sid + "canvas";
        						var objDiv = oRG.div.components[sid];
        						if(objDiv)
        						{
        							if(objDiv._cvs)
        							{
        								objDiv.removeChild(objDiv._cvs);
        								objDiv._cvs.destroy();
        							}
        							objDiv._cvs = null;
        							objDiv._ctx = null;
        							objDiv.parent.removeChild(objDiv);
        							objDiv.destroy();
        						}

        						oRG._objOrgCanvas = null;
        						for(var i=0;i<oRG._cnt;i++)
        						{
        							if(oRG._cvs[i] instanceof nexacro.CanvasComponent)
        							{
        								if(oRG._cvs[i].cvs) oRG._cvs[i].cvs = null;
        								if(oRG._cvs[i].parentDiv) oRG._cvs[i].parentDiv = null;
        							}
        							if(oRG._odiv[i] instanceof nexacro.Div)
        							{
        								form.removeChild(oRG._odiv[i]);
        								oRG._odiv[i].destroy();
        							}
        							oRG._odiv[i] = null;
        							oRG._cvs[i] = null;
        							oRG._ctx[i] = null;
        							oRG._ctxid[i] = null;
        						}

        						var cid = '__rgraph_effect_div_';
        						var objDiv = form.components[cid];
        						if(objDiv)
        						{
        							if(objDiv.canvas)
        							{
        								objDiv.canvas.csv = null;
        								objDiv.canvas.parentDiv = null;
        								objDiv.canvas = null;
        							}
        							form.removeChild(objDiv);
        							objDiv.destroy();
        						}

        						var collect = oRG.div.components;
        						for(var i=(collect.length-1);i>-1;i--)
        						{
        							oRG.div.removeChild(collect[i]);
        							collect[i].destroy();
        						}
        						oRG.ObjectRegistry._parent = oRG.OR._parent = null;
        						delete oRG.OR;
        						delete oRG.ObjectRegistry;
        						oRG.OR = null;
        						oRG.ObjectRegistry = null;

        						//oRG.__chartobjects = null;
        						oRG.div = null;
        						oRG.context = null;
        						oRG._objTimerTarget = null;
        						oRG._objTimerCanvas = null;
        					}
        					obj.RGARRAY[i] = null;
        				}
        				delete obj.RGARRAY;
        				obj.RGARRAY = null;
        			}
        		};
        	}
        	nexacro.RGraph.prototype.removeComponent =  function(oRG)
        	{
        		if(!oRG) return;
        		trace("removeComponent 255 Line");
        		trace("oRG : "+oRG);
        		trace("oRG.id : "+oRG.id);
        		trace("oRG.name : "+oRG.name);
        		var collect = oRG.div.components;
        		trace("collect : "+collect);
        		for(var i=(collect.length-1);i>-1;i--)
        		{
        			this.div.removeChild(collect[i]);
        			collect[i].destroy();
        		}

        		oRG.OR_clear("",oRG.div);
        		oRG.div._RGObject = null;
        		var form = oRG.context;
        		var sid = '__rgraph_tooltipmark_';
        		var cid = sid + "canvas";
        		var objDiv = oRG.div.components[sid];
        		if(objDiv)
        		{
        			if(objDiv._cvs)
        			{
        				objDiv.removeChild(objDiv._cvs);
        				objDiv._cvs.destroy();
        			}
        			objDiv._cvs = null;
        			objDiv._ctx = null;
        			objDiv.parent.removeChild(objDiv);
        			objDiv.destroy();
        		}

        		oRG._objOrgCanvas = null;
        		for(var i=0;i<oRG._cnt;i++)
        		{
        			if(oRG._cvs[i] instanceof nexacro.CanvasComponent)
        			{
        				if(oRG._cvs[i].cvs) oRG._cvs[i].cvs = null;
        				if(oRG._cvs[i].parentDiv) oRG._cvs[i].parentDiv = null;
        			}
        			if(oRG._odiv[i] instanceof nexacro.Div)
        			{
        				form.removeChild(oRG._odiv[i]);
        				oRG._odiv[i].destroy();
        			}
        			oRG._odiv[i] = null;
        			oRG._cvs[i] = null;
        			oRG._ctx[i] = null;
        			oRG._ctxid[i] = null;
        		}

        		var cid = '__rgraph_effect_div_';
        		var objDiv = form.components[cid];
        		if(objDiv)
        		{
        			if(objDiv.canvas)
        			{
        				objDiv.canvas.csv = null;
        				objDiv.canvas.parentDiv = null;
        				objDiv.canvas = null;
        			}
        			form.removeChild(objDiv);
        			objDiv.destroy();
        		}

        		var collect = oRG.div.components;
        		for(var i=(collect.length-1);i>-1;i--)
        		{
        			oRG.div.removeChild(collect[i]);
        			collect[i].destroy();
        		}
        		oRG.ObjectRegistry._parent = oRG.OR._parent = null;
        		delete oRG.OR;
        		delete oRG.ObjectRegistry;
        		oRG.OR = null;
        		oRG.ObjectRegistry = null;
        		//oRG.__chartobjects = null;
        		oRG.div = null;
        		oRG.context = null;
        		oRG._objTimerTarget = null;
        		oRG._objTimerCanvas = null;
        		oRG = null;
        	};
        	nexacro.RGraph.prototype.load =  function(f)
        	{
        		if(f.findEventHandler('onbeforeclose', f._formonbeforeclose, f) < 0)
        		{
        			f.addEventHandler('onbeforeclose', f._formonbeforeclose, f);
        		}
        		if(this.div.findEventHandler('onsize',  f._divonsize, f) < 0)
        		{
        			this.div.addEventHandler('onsize', f._divonsize, f.div);
        		}
        	};
        	/**
            * nexacro.RGraph.prototyperaph init
            */
        	nexacro.RGraph.prototype.addChart =  function(format,options)
        	{
        		var sImgId = "ImageViewerCanvas__" + this.div.name;
        		var img = this.div.components[sImgId];
        		if(img) img.set_visible(false);

        		var oChart;
        		format = format.toUpperCase();
        		try {
        			switch(format) {
        				case "BAR" 	: oChart = new nexacro.RGraph.Bar(options,this); break;
        				case "HBAR"	: oChart = new nexacro.RGraph.HBar(options,this); break;
        				case "LINE" : oChart = new nexacro.RGraph.Line(options,this); break;
        				case "PIE" 	: oChart = new nexacro.RGraph.Pie(options,this); break;
        				case "GAUGE" : oChart = new nexacro.RGraph.Gauge(options,this); break;
        				case "BIOPOLAR" : oChart = new nexacro.RGraph.Bipolar(options,this); break;
        				case "FUEL" : oChart = new nexacro.RGraph.Fuel(options,this); break;
        				case "FUNNEL" : oChart = new nexacro.RGraph.Funnel(options,this); break;
        				case "GANTT" : oChart = new nexacro.RGraph.Gantt(options,this); break;
        				case "HPROGRESS" : oChart = new nexacro.RGraph.HProgress(options,this); break;
        				case "VPROGRESS" : oChart = new nexacro.RGraph.VProgress(options,this); break;
        				case "METER" : oChart = new nexacro.RGraph.Meter(options,this); break;
        				case "ODOMETER" : oChart = new nexacro.RGraph.Odometer(options,this); break;
        				case "THERMOMETER" : oChart = new nexacro.RGraph.Thermometer(options,this); break;
        				case "RADAR" : oChart = new nexacro.RGraph.Radar(options,this); break;
        				case "ROSE" : oChart = new nexacro.RGraph.Rose(options,this); break;
        				case "WATERFALL" : oChart = new nexacro.RGraph.Waterfall(options,this); break;
        				case "WATERFALL" : oChart = new nexacro.RGraph.Waterfall(options,this); break;
        				case "SCATTER" : oChart = new nexacro.RGraph.Scatter(options,this); break;
        				case "RSCATTER" : oChart = new nexacro.RGraph.RScatter(options,this); break;
        				case "LED" : oChart = new nexacro.RGraph.LED(options,this); break;
        				case "CIRCULPROGRESS" : oChart = new nexacro.RGraph.SemiCircularProgress(options,this); break;
        				default :
        					trace("[Unkwown Chart code]" + format);
        					return;
        			}
        		} catch(e) {
        				trace("[Check include xjs ]" + format);
        				return;
        		}
        		oChart.canvas.style.set_background("transparent");
        		oChart.canvas.style.set_border("");
        		oChart.canvas.style.set_bordertype("");
        		oChart.canvas.style.set_opacity(100);
        		oChart.canvas.set_left(0);

        		this.hideTooltip();
        		//this.__chartobjects.push(oChart);
        		return oChart;
        	};

        	nexacro.RGraph.prototype.createCanvas = function(cid,nL,nT,nW,nH,nR,nB)
        	{
        		var oDiv = this.div;
        		if(!cid || cid == "")
        		{
        			this._cnt++;
        			var sid = "cvsDynamic_" + this._cnt.toString();
        			if(!nL) nL = 0;
        			if(!nT) nT = 0;
        			if(!nW) nW = oDiv._client_width;
        			if(!nH) nH = oDiv._client_height;
        			return this._createCanvas(oDiv, sid , 0, 0, nW,nH);
        		}
        		cid = this.context.name + "_"+ oDiv.name + "___" + cid;
        		var c = oDiv.components[cid];
        		if(!c)
        		{
        			this._cnt++;
        			if(!nL) nL = 0;
        			if(!nT) nT = 0;
        			if(!nW) nW = oDiv._client_width;
        			if(!nH) nH = oDiv._client_height;
        			return this._createCanvas(oDiv, cid , 0, 0, nW,nH);
        		} else {
        			for(var i=0;i<=this._cnt;i++)
        			{
        				if(this._ctxid[i] && this._ctxid[i] == cid)
        				{
        					return i;
        				}
        			}
        			return -1;
        		}
        	};
        	nexacro.RGraph.prototype._createCanvas = function(p, cid,nL,nT,nW,nH)
        	{
        		var TestCanvasComp = new nexacro.CanvasComponent(cid, "absolute", 0,0,nW,nH);
        		//TestCanvasComp.ondraw = this._ondraw;
        		p.addChild(cid, TestCanvasComp);
        		TestCanvasComp.show();
        		TestCanvasComp.parentDiv = p;
        		TestCanvasComp.set_enableevent(true);
        		TestCanvasComp.style.set_background("transparent");
        		if( (cid.indexOf("cvsDynamic")<0) && (cid.indexOf("cvspoint")<0) && (cid.indexOf("___csveffect")<0) )
        		{
        			TestCanvasComp.addEventHandler('onmousemove', this.Canvas_onmousemove, this);
        			TestCanvasComp.addEventHandler('onclick', this.Canvas_onclick, this);
        			TestCanvasComp.addEventHandler('onlbuttondown', this.Canvas_onlbuttondown, this);
        			TestCanvasComp.addEventHandler('onlbuttonup', this.Canvas_onlbuttonup, this);
        			TestCanvasComp.bringToFront();
        		} else {
        			if(cid.indexOf("cvspoint")<0) {
        				TestCanvasComp.sendToBack();
        			}
        		}
        		this._odiv[this._cnt] = p;
        		this._cvs[this._cnt] = TestCanvasComp;
        		this._ctx[this._cnt] = TestCanvasComp._canvas;
        		this._ctxid[this._cnt] = cid;

        		// runtime??? ?????? ???????????? ????????? ?????? over event??? clear?????? ????????? ?????? ??????.
        		if(nexacro.Browser == "Runtime") {
        			var cidEffect = cid + "_effect";
        			var TestCanvasComp2 = new nexacro.CanvasComponent(cidEffect, "absolute", 0,0,nW,nH);
        			p.addChild(cidEffect, TestCanvasComp2);
        			TestCanvasComp2.show();
        			TestCanvasComp2.set_enableevent(false);
        			TestCanvasComp2.set_visible(false);
        			TestCanvasComp2.style.set_background("transparent");
        			TestCanvasComp2.sendToBack();
        		}
        		return this._cnt;
        	};
        	nexacro.RGraph.prototype.Canvas_onmousemove = function(obj,e)
        	{
        		if(this.ISIE8) return;

        		this._div = obj.parentDiv;

        		if(this._nDumMoveX == e.clientX && this._nDumMoveY == e.clientY) return;

        		this._nDumMoveX = e.clientX;
        		this._nDumMoveY = e.clientY;

        		// clear??? event ??????. tooltip div??? ??????
        		this.CanvasMousemoveListener(obj, e);
        	};
        	nexacro.RGraph.prototype.Canvas_onclick = function(obj,e)
        	{
        		this._div = obj.parentDiv;
        		this.CanvasClickListener(obj,e)
        	};
        	nexacro.RGraph.prototype.Canvas_onlbuttondown = function(obj,e)
        	{
        		this._div = obj.parentDiv;
        		this.CanvasLButtonDownListener(obj,e)
        	};
        	nexacro.RGraph.prototype.Canvas_onlbuttonup = function(obj,e)
        	{
        		this._div = obj.parentDiv;
        		this.CanvasLButtonUpListener(obj,e)
        	};

        	nexacro.RGraph.prototype._getToolTipMark = function()
        	{
        		var sid = '__rgraph_tooltipmark_';
        		var cid = sid + "canvas";
        		var objDiv = this._div.components[sid];
        		if(!objDiv)
        		{
        			objDiv = new Div();
        			objDiv.init(sid, "absolute", 0, 0, 0, 0, null, null);
        			this._div.addChild(sid, objDiv);
        			objDiv.set_visible(false);
        			objDiv.show();
        			objDiv.style.set_background("white");
        			objDiv.style.set_border("0px solid whilte");
        			objDiv.style.set_bordertype("round 50 50");
        			objDiv.style.set_shadow("outer 3,3 2 gray") // set
        			objDiv.set_scrollbars("none");
        			objDiv.bringToFront();

        			var TestCanvasComp = new nexacro.CanvasComponent(cid, "absolute", 0,0,0,0);
        			objDiv.addChild(cid, TestCanvasComp);
        			TestCanvasComp.show();
        			TestCanvasComp.set_enableevent(true);
        			objDiv._cvs = TestCanvasComp;
        			objDiv._ctx = TestCanvasComp._canvas;
        		}
        		return objDiv;
        	};
        	nexacro.RGraph.prototype._createUID = function ()
        	{
        		return 'xxxx_xxxx_4xxx_yxxx'.replace(/[xy]/g, function(c)
        		{
        			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        			return v.toString(16);
        		});
        	};
            /**
            * Returns five values which are used as a nice scale
            *
            * @param  max int    The maximum value of the graph
            * @param  obj object The graph object
            * @return     array   An appropriate scale
            */
            nexacro.RGraph.prototype.getScale = function (max, obj)
            {
                /**
                * Special case for 0
                */
                if (max == 0) {
                    return ['0.2', '0.4', '0.6', '0.8', '1.0'];
                }

                var original_max = max;

                /**
                * Manually do decimals
                */
                if (max <= 1) {
                    if (max > 0.5) {
                        return [0.2,0.4,0.6,0.8, Number(1).toFixed(1)];

                    } else if (max >= 0.1) {
                        return obj.Get('chart.scale.round') ? [0.2,0.4,0.6,0.8,1] : [0.1,0.2,0.3,0.4,0.5];

                    } else {

                        var tmp = max;
                        var exp = 0;

                        while (tmp < 1.01) {
                            exp += 1;
                            tmp *= 10;
                        }

                        var ret = ['2e-' + exp, '4e-' + exp, '6e-' + exp, '8e-' + exp, '10e-' + exp];


                        if (max <= ('5e-' + exp)) {
                            ret = ['1e-' + exp, '2e-' + exp, '3e-' + exp, '4e-' + exp, '5e-' + exp];
                        }

                        return ret;
                    }
                }

                // Take off any decimals
                if (String(max).indexOf('.') > 0) {
                    max = String(max).replace(/\.\d+$/, '');
                }

                var interval = this.ma.pow(10, Number(String(Number(max)).length - 1));
                var topValue = interval;

                while (topValue < max) {
                    topValue += (interval / 2);
                }

                // Handles cases where the max is (for example) 50.5
                if (Number(original_max) > Number(topValue)) {
                    topValue += (interval / 2);
                }
                // Custom if the max is greater than 5 and less than 10
                if (max < 10) {
                    topValue = (Number(original_max) <= 5 ? 5 : 10);
                }
                /**
                * Added 02/11/2010 to create "nicer" scales
                */
                if (obj && typeof(obj.Get('chart.scale.round')) == 'boolean' && obj.Get('chart.scale.round')) {
                    topValue = 10 * interval;
                }

                return [topValue * 0.2, topValue * 0.4, topValue * 0.6, topValue * 0.8, topValue];
            };
            /**
            * Returns an appropriate scale. The return value is actualy an object consisting of:
            *  scale.max
            *  scale.min
            *  scale.scale
            *
            * @param  obj object  The graph object
            * @param  prop object An object consisting of configuration properties
            * @return     object  An object containg scale information
            */
            nexacro.RGraph.prototype.getScale2 = function (obj, opt)
            {
                var ca           = obj.canvas,
                    co           = obj.context,
                    prop         = obj.properties,
                    numlabels    = typeof opt['ylabels.count'] == 'number' ? opt['ylabels.count'] : 5,
                    units_pre    = typeof opt['units.pre'] == 'string' ? opt['units.pre'] : '',
                    units_post   = typeof opt['units.post'] == 'string' ? opt['units.post'] : '',
                    max          = Number(opt['max']),
                    min          = typeof opt['min'] == 'number' ? opt['min'] : 0,
                    strict       = opt['strict'],
                    decimals     = Number(opt['scale.decimals']), // Sometimes the default is null
                    point        = opt['scale.point'], // Default is a string in all chart libraries so no need to cast it
                    thousand     = opt['scale.thousand'], // Default is a string in all chart libraries so no need to cast it
                    original_max = max,
                    round        = opt['scale.round'],
                    scale        = {max:1,labels:[],values:[]}

                /**
                * Special case for 0
                *
                * ** Must be first **
                */
                if (!max) {

                    var max   = 1;

                    for (var i=0; i<numlabels; ++i) {

                        var label = ((((max - min) / numlabels) + min) * (i + 1)).toFixed(decimals);

                        scale.labels.push(units_pre + label + units_post);
                        scale.values.push(parseFloat(label))
                    }

                /**
                * Manually do decimals
                */
                } else if (max <= 1 && !strict) {

                    var arr = [
                        1,0.5,
                        0.10,0.05,
                        0.010,0.005,
                        0.0010,0.0005,
                        0.00010,0.00005,
                        0.000010,0.000005,
                        0.0000010,0.0000005,
                        0.00000010,0.00000005,
                        0.000000010,0.000000005,
                        0.0000000010,0.0000000005,
                        0.00000000010,0.00000000005,
                        0.000000000010,0.000000000005,
                        0.0000000000010,0.0000000000005
                    ], vals = [];



                    for (var i=0; i<arr.length; ++i) {
                        if (max > arr[i]) {
                            i--;
                            break;
                        }
                    }


                    scale.max = arr[i]
                    scale.labels = [];
                    scale.values = [];

                    for (var j=0; j<numlabels; ++j) {

                        var value = ((((arr[i] - min) / numlabels) * (j + 1)) + min).toFixed(decimals);

                        scale.values.push(value);
                        scale.labels.push(this.numberFormat(obj, value, units_pre, units_post));
                    }




                } else if (!strict) {

                    /**
                    * Now comes the scale handling for integer values
                    */

                    // This accomodates decimals by rounding the max up to the next integer
                    max = this.ma.ceil(max);

                    var interval = this.ma.pow(10, this.ma.max(1, Number(String(Number(max) - Number(min)).length - 1)) );

                    var topValue = interval;

                    while (topValue < max) {
                        topValue += (interval / 2);
                    }

                    // Handles cases where the max is (for example) 50.5
                    if (Number(original_max) > Number(topValue)) {
                        topValue += (interval / 2);
                    }

                    // Custom if the max is greater than 5 and less than 10
                    if (max <= 10) {
                        topValue = (Number(original_max) <= 5 ? 5 : 10);
                    }


                    // Added 02/11/2010 to create "nicer" scales
                    if (obj && typeof(round) == 'boolean' && round) {
                        topValue = 10 * interval;
                    }

                    scale.max = topValue;

                    // Now generate the scale. Temporarily set the objects chart.scale.decimal and chart.scale.point to those
                    //that we've been given as the number_format functuion looks at those instead of using argumrnts.
                    var tmp_point    = prop['chart.scale.point'];
                    var tmp_thousand = prop['chart.scale.thousand'];

                    obj.Set('chart.scale.thousand', thousand);
                    obj.Set('chart.scale.point', point);


                    for (var i=0; i<numlabels; ++i) {
                        scale.labels.push( this.number_format(obj, ((((i+1) / numlabels) * (topValue - min)) + min).toFixed(decimals), units_pre, units_post) );
                        scale.values.push(((((i+1) / numlabels) * (topValue - min)) + min).toFixed(decimals));
                    }

                    obj.Set('chart.scale.thousand', tmp_thousand);
                    obj.Set('chart.scale.point', tmp_point);

                } else if (typeof(max) == 'number' && strict) {

                    /**
                    * ymax is set and also strict
                    */
                    for (var i=0; i<numlabels; ++i) {
                        scale.labels.push(this.numberFormat(
                            obj,
                            ((((i+1) / numlabels) * (max - min)) + min).toFixed(decimals),
                            units_pre,
                            units_post
                        ));

                        scale.values.push(
                            ((((i+1) / numlabels) * (max - min)) + min).toFixed(decimals)
                        );
                    }

                    // ???
                    scale.max = max;
                }


                scale.units_pre  = units_pre;
                scale.units_post = units_post;
                scale.point      = point;
                scale.decimals   = decimals;
                scale.thousand   = thousand;
                scale.numlabels  = numlabels;
                scale.round      = Boolean(round);
                scale.min        = min;

                //
                // Convert all of the scale values to numbers
                //
                for (var i=0; i<scale.values.length; ++i) {
                    scale.values[i] = parseFloat(scale.values[i]);
                }

                return scale;
            };
            //
            // Converts an the truthy values to falsey values and vice-versa
            //
            nexacro.RGraph.prototype.arrayInvert = function (arr)
            {
                for (var i=0,len=arr.length; i<len; ++i) {
                    arr[i] = !arr[i];
                }

                return arr;
            };

            //
            // An array_trim function that removes the empty elements off
            //both ends
            //
            nexacro.RGraph.prototype.arrayTrim = function (arr)
            {
                var out = [], content = false;

                // Trim the start
                for (var i=0; i<arr.length; i++) {

                    if (arr[i]) {
                        content = true;
                    }

                    if (content) {
                        out.push(arr[i]);
                    }
                }

                // Reverse the array and trim the start again
                out = this.arrayReverse(out);

                var out2 = [], content = false ;
                for (var i=0; i<out.length; i++) {

                    if (out[i]) {
                        content = true;
                    }

                    if (content) {
                        out2.push(out[i]);
                    }
                }

                // Now reverse the array and return it
                out2 = this.arrayReverse(out2);

                return out2;
            };

            /**
            * Makes a clone of an object
            *
            * @param obj val The object to clone
            */
            nexacro.RGraph.prototype.arrayClone =
            nexacro.RGraph.prototype.array_clone = function (obj)
            {
                if(obj === null || typeof obj !== 'object') {
                    return obj;
                }

                var temp = [];

                for (var i=0,len=obj.length;i<len; ++i) {

                    if (typeof obj[i]  === 'number') {
                        temp[i] = (function (arg) {return Number(arg);})(obj[i]);

                    } else if (typeof obj[i]  === 'string') {
                        temp[i] = (function (arg) {return String(arg);})(obj[i]);

                    } else if (typeof obj[i] === 'function') {
                        temp[i] = obj[i];

                    } else {
                        temp[i] = this.arrayClone(obj[i]);
                    }
                }

                return temp;
            };

            /**
            * Returns the maximum numeric value which is in an array. This function IS NOT
            * recursive
            *
            * @param  array arr The array (can also be a number, in which case it's returned as-is)
            * @param  int       Whether to ignore signs (ie negative/positive)
            * @return int       The maximum value in the array
            */
            nexacro.RGraph.prototype.arrayMax =
            nexacro.RGraph.prototype.array_max = function (arr)
            {
                var max = null,
                    ma  = Math

                if (typeof arr === 'number') {
                    return arr;
                }

                if (this.isNull(arr)) {
                    return 0;
                }

                for (var i=0,len=arr.length; i<len; ++i) {
                    if (typeof arr[i] === 'number') {

                        var val = arguments[1] ? this.ma.abs(arr[i]) : arr[i];

                        if (typeof max === 'number') {
                            max = Math.max(max, val);
                        } else {
                            max = val;
                        }
                    }
                }

                return max;
            };


            /**
            * Returns the minimum numeric value which is in an array
            *
            * @param  array arr The array (can also be a number, in which case it's returned as-is)
            * @param  int       Whether to ignore signs (ie negative/positive)
            * @return int       The minimum value in the array
            */
            nexacro.RGraph.prototype.arrayMin = function (arr)
            {
                var max = null,
                    min = null,
                    ma  = Math;

                if (typeof arr === 'number') {
                    return arr;
                }

                if (this.isNull(arr)) {
                    return 0;
                }

                for (var i=0,len=arr.length; i<len; ++i) {
                    if (typeof arr[i] === 'number') {

                        var val = arguments[1] ? this.maabs(arr[i]) : arr[i];

                        if (typeof min === 'number') {
                            min = this.mamin(min, val);
                        } else {
                            min = val;
                        }
                    }
                }

                return min;
            };

            /**
            * Returns the maximum value which is in an array
            *
            * @param  array arr The array
            * @param  int   len The length to pad the array to
            * @param  mixed     The value to use to pad the array (optional)
            */
            nexacro.RGraph.prototype.arrayPad =
            nexacro.RGraph.prototype.array_pad = function (arr, len)
            {
                if (arr.length < len) {
                    var val = arguments[2] ? arguments[2] : null;

                    for (var i=arr.length; i<len; i+=1) {
                        arr[i] = val;
                    }
                }

                return arr;
            };

            /**
            * An array sum function
            *
            * @param  array arr The  array to calculate the total of
            * @return int       The summed total of the arrays elements
            */
            nexacro.RGraph.prototype.arraySum =
            nexacro.RGraph.prototype.array_sum = function (arr)
            {
                // Allow integers
                if (typeof arr === 'number') {
                    return arr;
                }

                // Account for null
                if (this.is_null(arr)) {
                    return 0;
                }

                var i, sum, len = arr.length;

                for(i=0,sum=0;i<len;sum+=arr[i++]);

                return sum;
            };

            /**
            * Takes any number of arguments and adds them to one big linear array
            * which is then returned
            *
            * @param ... mixed The data to linearise. You can strings, booleans, numbers or arrays
            */
            nexacro.RGraph.prototype.arrayLinearize =
            nexacro.RGraph.prototype.array_linearize = function ()
            {
                var arr  = [],
                    args = arguments

                for (var i=0,len=args.length; i<len; ++i) {

                    if (typeof args[i] === 'object' && args[i]) {
                        for (var j=0,len2=args[i].length; j<len2; ++j) {
                            var sub = nexacro.RGraph.prototype.array_linearize(args[i][j]);

                            for (var k=0,len3=sub.length; k<len3; ++k) {
                                arr.push(sub[k]);
                            }
                        }
                    } else {
                        arr.push(args[i]);
                    }
                }

                return arr;
            };

            /**
            * Takes one off the front of the given array and returns the new array.
            *
            * @param array arr The array from which to take one off the front of array
            *
            * @return array The new array
            */
            nexacro.RGraph.prototype.arrayShift =
            nexacro.RGraph.prototype.array_shift = function(arr)
            {
                var ret = [];

                for(var i=1,len=arr.length; i<len; ++i) {
                    ret.push(arr[i]);
                }

                return ret;
            };

            /**
            * Reverses the order of an array
            *
            * @param array arr The array to reverse
            */
            nexacro.RGraph.prototype.arrayReverse =
            nexacro.RGraph.prototype.array_reverse = function (arr)
            {
                if (!arr) {
                    return;
                }

                var newarr=[];

                for(var i=arr.length - 1; i>=0; i-=1) {
                    newarr.push(arr[i]);
                }

                return newarr;
            };

            /**
            * Returns the absolute value of a number. You can also pass in an
            * array and it will run the abs() function on each element. It
            * operates recursively so sub-arrays are also traversed.
            *
            * @param array arr The number or array to work on
            */
            nexacro.RGraph.prototype.abs = function (value)
            {
                if (typeof value === 'string') {
                    value = parseFloat(value) || 0;
                }

                if (typeof value === 'number') {
                    return this.maabs(value);
                }

                if (typeof value === 'object') {
                    for (i in value) {
                        if (   typeof i === 'string'
                            || typeof i === 'number'
                            || typeof i === 'object') {

                            value[i] = this.abs(value[i]);
                        }
                    }

                    return value;
                }

                return 0;
            };




            /**
            * Clears the canvas by setting the width. You can specify a colour if you wish.
            *
            * @param object canvas The canvas to clear
            * @param mixed         Usually a color string to use to clear the canvas
            *                      with - could also be a gradient object
            */
            nexacro.RGraph.prototype.clear =
            nexacro.RGraph.prototype.Clear = function (ca, col)
            {
                if (!ca) return;
                var obj   = ca.__object__;
        		var co;
        		for(var i=0;i<=this._cnt;i++)
        		{
        			if(this._cvs[i] == ca)
        			{
        				co = this._ctx[i];
        				break;
        			}
        		}
        		if(co == null) return;
                var color = col || (obj && obj.get('clearto'))

                this.fireCustomEvent(obj, 'onbeforeclear');
                /**
                * Can now clear the canvas back to fully transparent
                */
                if (   !color
                    || (color && color == '0,0,0,0' || color === 'transparent' || color == [0,0,0,0] || color == [0,0,0,0.1] || color == [0,0,0,0.01] || color == [0,0,0,0.001])
                    || (color && color == '0,0,0,0.1' || color === '0,0,0,0.01' || color == '0,0,0,0.001')
        			|| (color && color == '#00000000')
                    ) {
                    co.clearRect(-100,-100,ca.width + 200, ca.height + 200);

                    // Reset the globalCompositeOperation
                    co.globalCompositeOperation = 'source-over';

                } else if (color) {
                    this.path2(co, 'fs % fr -100 -100 % %',
                        color,
                        ca.width + 200,
                        ca.height + 200
                    );

                } else {
                    this.path2(co, 'fs % fr -100 -100 % %',
                        obj.get('clearto'),
                        ca.width + 200,
                        ca.height + 200
                    );
                }
                //if (RG.ClearAnnotations) {
                    //RG.ClearAnnotations(ca.id);
                //}


                /**
                * This hides the tooltip that is showing IF it has the same canvas ID as
                * that which is being cleared
                */
                if (this.Registry_Get('chart.tooltip') && obj && !obj.get('chart.tooltips.nohideonclear') && !this.Registry_Get('chart.adjusting.gantt')) {
                    this.HideTooltip(ca);
                    //RG.Redraw();
                }

                //
                // Hide all DOM text by positioning it outside the canvas
                //
                //for (i in nexacro.RGraph.prototype.cache) {
                //    if (typeof i === 'string' && i.indexOf('-text-') > 0) {
                //        nexacro.RGraph.prototype.cache[i].style.left = '-100px';
                //        nexacro.RGraph.prototype.cache[i].style.top  = '-100px';
                //    }
                //}

                /**
                * Set the cursor to default
                */

                this.FireCustomEvent(obj, 'onclear');
            };

            /**
            * Draws the title of the graph
            *
            * @param object  canvas The canvas object
            * @param string  text   The title to write
            * @param integer gutter The size of the gutter
            * @param integer        The center X point (optional - if not given it will be generated from the canvas width)
            * @param integer        Size of the text. If not given it will be 14
            * @param object         An optional object which has canvas and context properties to use instead of those on
            *                       the obj argument (so as to enable caching)
            */
            nexacro.RGraph.prototype.drawTitle =
            nexacro.RGraph.prototype.DrawTitle = function (obj, text, gutterTop)
            {
                var ca = canvas  = obj.canvas,
                    co = context = obj.context,
                    prop         = obj.properties
                    gutterLeft   = prop['chart.gutter.left'],
                    gutterRight  = prop['chart.gutter.right'],
                    gutterTop    = gutterTop,
                    gutterBottom = prop['chart.gutter.bottom'],
                    size         = arguments[4] ? arguments[4] : 12,
                    bold         = prop['chart.title.bold'],
                    italic       = prop['chart.title.italic'],
                    centerx      = (arguments[3] ? arguments[3] : ((ca.width - gutterLeft - gutterRight) / 2) + gutterLeft),
                    keypos       = prop['chart.key.position'],
                    vpos         = prop['chart.title.vpos'],
                    hpos         = prop['chart.title.hpos'],
                    bgcolor      = prop['chart.title.background'],
                    x            = prop['chart.title.x'],
                    y            = prop['chart.title.y'],
                    halign       = 'center',
                    valign       = 'center';

                // Account for 3D effect by faking the key position
                if (obj.type == 'bar' && prop['chart.variant'] == '3d') {
                    keypos = 'gutter';
                }

                co.beginPath();
                co.fillStyle = prop['chart.text.color'] ? prop['chart.text.color'] : 'black';
        		this.setElementCommonStyle(co,co.fillStyle,1);


                /**
                * Vertically center the text if the key is not present
                */
                if (keypos && keypos != 'gutter') {
                    var valign = 'center';

                } else if (!keypos) {
                    var valign = 'center';

               } else {
                    var valign = 'bottom';
                }





                // if chart.title.vpos is a number, use that
                if (typeof prop['chart.title.vpos'] === 'number') {
                    vpos = prop['chart.title.vpos'] * gutterTop;

                    if (prop['chart.xaxispos'] === 'top') {
                        vpos = prop['chart.title.vpos'] * gutterBottom + gutterTop + (ca.height - gutterTop - gutterBottom);
                    }

                } else {
                    vpos = gutterTop - size - 5;

                    if (prop['chart.xaxispos'] === 'top') {
                        vpos = ca.height  - gutterBottom + size + 5;
                    }
                }

                // if chart.title.hpos is a number, use that. It's multiplied with the (entire) canvas width
                if (typeof hpos === 'number') {
                    centerx = hpos * ca.width;
                }

                /**
                * Now the chart.title.x and chart.title.y settings override (is set) the above
                */
                if (typeof x === 'number') centerx = x;
                if (typeof y === 'number') vpos    = y;

                /**
                * Horizontal alignment can now (Jan 2013) be specified
                */
                if (typeof prop['chart.title.halign'] === 'string') {
                    halign = prop['chart.title.halign'];
                }

                /**
                * Vertical alignment can now (Jan 2013) be specified
                */
                if (typeof prop['chart.title.valign'] === 'string') {
                    valign = prop['chart.title.valign'];
                }

                // Set the colour
                if (typeof prop['chart.title.color'] !== null) {
                    var oldColor = co.fillStyle
                    var newColor = prop['chart.title.color'];
                    co.fillStyle = newColor ? newColor : 'black';
        			this.setElementCommonStyle(co,co.fillStyle,1);
                }
                /**
                * Default font is Arial
                */
                var font = prop['chart.text.font'];
                /**
                * Override the default font with chart.title.font
                */
                if (typeof prop['chart.title.font'] === 'string') {
                    font = prop['chart.title.font'];
                }
                /**
                * Draw the title
                */

                var ret = this.text2(obj, {
                    font:font,
                    size:size,
                    x:centerx,
                    y:vpos,
                    text:text,
                    valign:valign,
                    halign:halign,
                    bounding:bgcolor != null,
                    'bounding.fill':bgcolor,
                    'bold':bold,
                    italic: italic,
                    tag:'title',
                    marker: false
                });

                // Reset the fill colour
                co.fillStyle = oldColor;
        		this.setElementCommonStyle(co,co.fillStyle,1);
            };




            /**
            * Gets the mouse X/Y coordinates relative to the canvas
            *
            * @param object e The event object. As such this method should be used in an event listener.
            */
            nexacro.RGraph.prototype.getMouseXY = function(e)
            {
                // This is necessary foe IE9
                if (!e || !e.target) {
                    return;
                }

                var el      = e.target;
                var ca      = el;
                var caStyle = ca.style;
                var offsetX = 0;
                var offsetY = 0;
                var x;
                var y;
                var borderLeft  = 0;
                var borderTop   = 0;
                var paddingLeft = 0
                var paddingTop  = 0
                var additionalX = borderLeft + paddingLeft;
                var additionalY = borderTop + paddingTop;

                if (typeof e.offsetX === 'number' && typeof e.offsetY === 'number') {

                    if (!this.ISIE && !this.ISOPERA) {
                        x = e.offsetX - borderLeft - paddingLeft;
                        y = e.offsetY - borderTop - paddingTop;

                    } else if (this.ISIE) {
                        x = e.offsetX - paddingLeft;
                        y = e.offsetY - paddingTop;

                    } else {
                        x = e.offsetX;
                        y = e.offsetY;
                    }

                } else {

        			/*
                    if (typeof el.offsetParent !== 'undefined') {
                        do {
                            offsetX += el.offsetLeft;
                            offsetY += el.offsetTop;
                        } while ((el = el.offsetParent));
                    }
        			*/

                    x = nexacro.toNumber(e.pageX) - offsetX - additionalX;
                    y = nexacro.toNumber(e.pageY) - offsetY - additionalY;
                    //x -= (2 * (parseInt(document.body.style.borderLeftWidth) || 0));
                    //y -= (2 * (parseInt(document.body.style.borderTopWidth) || 0));

                    //x += (parseInt(caStyle.borderLeftWidth) || 0);
                    //y += (parseInt(caStyle.borderTopWidth) || 0);
                }
                // We return a javascript array with x and y defined
                return [x, y];
            };

            /**
            * This function returns a two element array of the canvas x/y position in
            * relation to the page
            *
            * @param object canvas
            */
            nexacro.RGraph.prototype.getCanvasXY = function (canvas)
            {
                var x  = 0;
                var y  = 0;
                var el = canvas; // !!!

                do {

                    x += el.offsetLeft;
                    y += el.offsetTop;

                    // ACCOUNT FOR TABLES IN wEBkIT
                    if (el.tagName.toLowerCase() == 'table' && (this.ISCHROME || this.ISSAFARI)) {
                        x += parseInt(el.border) || 0;
                        y += parseInt(el.border) || 0;
                    }

                    el = el.offsetParent;

                } while (el && el.tagName.toLowerCase() != 'body');


                var paddingLeft = canvas.style.paddingLeft ? parseInt(canvas.style.paddingLeft) : 0;
                var paddingTop  = canvas.style.paddingTop ? parseInt(canvas.style.paddingTop) : 0;
                var borderLeft  = canvas.style.borderLeftWidth ? parseInt(canvas.style.borderLeftWidth) : 0;
                var borderTop   = canvas.style.borderTopWidth  ? parseInt(canvas.style.borderTopWidth) : 0;

                if (navigator.userAgent.indexOf('Firefox') > 0) {
                    x += parseInt(document.body.style.borderLeftWidth) || 0;
                    y += parseInt(document.body.style.borderTopWidth) || 0;
                }

                return [x + paddingLeft + borderLeft, y + paddingTop + borderTop];
            };




            /**
            * This function determines whther a canvas is fixed (CSS positioning) or not. If not it returns
            * false. If it is then the element that is fixed is returned (it may be a parent of the canvas).
            *
            * @return Either false or the fixed positioned element
            */
            nexacro.RGraph.prototype.isFixed = function (canvas)
            {
                var obj = canvas;
                var i = 0;

                while (obj && obj.tagName.toLowerCase() != 'body' && i < 99) {

                    if (obj.style.position == 'fixed') {
                        return obj;
                    }

                    obj = obj.offsetParent;
                }

                return false;
            };




            /**
            * Registers a graph object (used when the canvas is redrawn)
            *
            * @param object obj The object to be registered
            */
            nexacro.RGraph.prototype.register =
            nexacro.RGraph.prototype.Register = function (obj)
            {
                // Checking this property ensures the object is only registered once
                if (!obj.Get('chart.noregister')) {
                    // As of 21st/1/2012 the object registry is now used
                    this.OR_Add(obj);
                    obj.Set('chart.noregister', true);
                }
            };




            /**
            * Causes all registered objects to be redrawn
            *
            * @param string An optional color to use to clear the canvas
            */
            nexacro.RGraph.prototype.redraw =
            nexacro.RGraph.prototype.Redraw = function ()
            {
        		if(!this.ObjectRegistry || !this.ObjectRegistry.objects) return;
                var objectRegistry = this.ObjectRegistry.objects.byCanvasID;
        		for(var i=0;i<this._cnt;i++)
        		{
        			var cvs = this._cvs[i];
        			if(cvs == null || cvs == undefined) continue;
        			if (cvs.__object__ && cvs.__object__.isRGraph) {

        				var c = cvs.__object__.canvas;
        				//c.removeEventHandler("onmousemove", this.Canvas_onmousemove, this);
        				//c.removeEventHandler("onclick", this.Canvas_onclick, this);
        				//c.set_enableevent(false);

        				if (!cvs.noclear) {
        					this.clear(cvs, arguments[0] ? arguments[0] : null);
        				}
        			}
        		}
        		for (var i=0,len=objectRegistry.length; i<len; ++i) {
        			if (objectRegistry[i]) {
        				var id = objectRegistry[i][0];

        				var c = objectRegistry[i][1].canvas;
        				objectRegistry[i][1].Draw();

        				var c = objectRegistry[i][1].canvas;
        					//c.addEventHandler('onmousemove', this.Canvas_onmousemove, this);
        					//c.addEventHandler('onclick', this.Canvas_onclick, this);
        					//c.set_enableevent(true);
        			}
        		}
                // Get all of the canvas tags on the page
        //         var tags = document.getElementsByTagName('canvas');
        //
        //         for (var i=0,len=tags.length; i<len; ++i) {
        //             if (tags[i].__object__ && tags[i].__object__.isRGraph) {
        //
        //                 // Only clear the canvas if it's not Trace'ing - this applies to the Line/Scatter Trace effects
        //                 if (!tags[i].noclear) {
        //                     this.clear(tags[i], arguments[0] ? arguments[0] : null);
        //                 }
        //             }
        //         }

                // Go through the object registry and redraw *all* of the canvas'es that have been registered
        //         for (var i=0,len=objectRegistry.length; i<len; ++i) {
        //             if (objectRegistry[i]) {
        //                 var id = objectRegistry[i][0];
        //                 objectRegistry[i][1].Draw();
        //             }
        //         }
            };


            /**
            * Causes all registered objects ON THE GIVEN CANVAS to be redrawn
            *
            * @param canvas object The canvas object to redraw
            * @param        bool   Optional boolean which defaults to true and determines whether to clear the canvas
            */
            nexacro.RGraph.prototype.redrawCanvas =
            nexacro.RGraph.prototype.RedrawCanvas = function (ca)
            {
                var objects = this.OR_getObjectsByCanvasID(ca.id);

                /**
                * First clear the canvas
                */
                if (!arguments[1] || (typeof arguments[1] === 'boolean' && !arguments[1] == false) ) {
                    var color = arguments[2] || ca.__object__.get('clearto') || 'transparent';
                    this.clear(ca, color);
                }

                /**
                * Now redraw all the charts associated with that canvas
                */
        		if(!objects) return;
                for (var i=0,len=objects.length; i<len; ++i) {
                    if (objects[i]) {
                        if (objects[i] && objects[i].isRGraph) { // Is it an nexacro.RGraph.prototyperaph object ??
                            objects[i].Draw();
                        }
                    }
                }
            };


            /**
            * This function draws the background for the bar chart, line chart and scatter chart.
            *
            * @param  object obj The graph object
            */
            nexacro.RGraph.prototype.Background_draw =
            nexacro.RGraph.prototype.background_draw =
            nexacro.RGraph.prototype.background_Draw = function (obj)
            {
                var ca   = obj.canvas,
                    co   = obj.context,
                    prop = obj.properties,
                    height       = 0,
                    gutterLeft   = obj.gutterLeft,
                    gutterRight  = obj.gutterRight,
                    gutterTop    = obj.gutterTop,
                    gutterBottom = obj.gutterBottom,
                    variant      = prop['chart.variant'];

                    co.fillStyle = prop['chart.text.color'];
        			this.setElementCommonStyle(co,co.fillStyle,1);

                    // If it's a bar and 3D variant, translate
                    if (variant == '3d') {
                        co.save();
                        co.translate(prop['chart.variant.threed.offsetx'], -1 * prop['chart.variant.threed.offsety']);
                    }

                    // X axis title
                    if (typeof prop['chart.title.xaxis'] === 'string' && prop['chart.title.xaxis'].length) {

                        var size = prop['chart.text.size'] + 2;
                        var font = prop['chart.text.font'];
                        var bold = prop['chart.title.xaxis.bold'];

                        if (typeof(prop['chart.title.xaxis.size']) == 'number') {
                            size = prop['chart.title.xaxis.size'];
                        }

                        if (typeof(prop['chart.title.xaxis.font']) == 'string') {
                            font = prop['chart.title.xaxis.font'];
                        }

                        var hpos = ((ca.width - gutterLeft - gutterRight) / 2) + gutterLeft;
                        var vpos = ca.height - gutterBottom + 25;

                        if (typeof prop['chart.title.xaxis.pos'] === 'number') {
                            vpos = ca.height - (gutterBottom * prop['chart.title.xaxis.pos']);
                        }

                        // Specifically specified X/Y positions
                        if (typeof prop['chart.title.xaxis.x'] === 'number') {
                            hpos = prop['chart.title.xaxis.x'];
                        }

                        if (typeof prop['chart.title.xaxis.y'] === 'number') {
                            vpos = prop['chart.title.xaxis.y'];
                        }

                        //this.text2(prop['chart.text.accessible'] ? obj.context : co,  {
        				this.text2(prop['chart.text.accessible'] ? obj.context : obj,  {
        					font:font,
        					size:size,
        					x:hpos,
        					y:vpos,
        					text:prop['chart.title.xaxis'],
        					halign:'center',
        					valign:'center',
        					bold:bold,
                            color: prop['chart.title.xaxis.color'] || 'black',
        					tag: 'title xaxis'
        				});
                    }
                    // Y axis title
                    if (typeof(prop['chart.title.yaxis']) == 'string' && prop['chart.title.yaxis'].length) {

                        var size  = prop['chart.text.size'] + 2;
                        var font  = prop['chart.text.font'];
                        var angle = 270;
                        var bold  = prop['chart.title.yaxis.bold'];
                        var color = prop['chart.title.yaxis.color'];

                        if (typeof(prop['chart.title.yaxis.pos']) == 'number') {
                            var yaxis_title_pos = prop['chart.title.yaxis.pos'] * gutterLeft;
                        } else {
                            var yaxis_title_pos = ((gutterLeft - 25) / gutterLeft) * gutterLeft;
                        }

                        if (typeof prop['chart.title.yaxis.size'] === 'number') {
                            size = prop['chart.title.yaxis.size'];
                        }

                        if (typeof prop['chart.title.yaxis.font'] === 'string') {
                            font = prop['chart.title.yaxis.font'];
                        }

                        if (   prop['chart.title.yaxis.align'] == 'right'
                            || prop['chart.title.yaxis.position'] == 'right'
                            || (obj.type === 'hbar' && prop['chart.yaxispos'] === 'right' && typeof prop['chart.title.yaxis.align'] === 'undefined' && typeof prop['chart.title.yaxis.position'] === 'undefined')
                           ) {

                            angle = 90;
                            yaxis_title_pos = prop['chart.title.yaxis.pos'] ? (ca.width - gutterRight) + (prop['chart.title.yaxis.pos'] * gutterRight) :
                                                                               ca.width - gutterRight + prop['chart.text.size'] + 5;
                        } else {
                            yaxis_title_pos = yaxis_title_pos;
                        }

                        var y = ((ca.height - gutterTop - gutterBottom) / 2) + gutterTop;

                        // Specifically specified X/Y positions
                        if (typeof prop['chart.title.yaxis.x'] === 'number') {
                            yaxis_title_pos = prop['chart.title.yaxis.x'];
                        }

                        if (typeof prop['chart.title.yaxis.y'] === 'number') {
                            y = prop['chart.title.yaxis.y'];
                        }
                        co.fillStyle = color;
        				this.setElementCommonStyle(co,co.fillStyle,1);
                        //this.text2(prop['chart.text.accessible'] ? obj.context : co,  {
        				this.text2(prop['chart.text.accessible'] ? obj.context : obj,  {
        					'font':font,
        					'size':size,
        					'x':yaxis_title_pos,
        					'y':y,
        					'valign':'center',
        					'halign':'center',
        					'angle':angle,
        					'bold':bold,
        					'text':prop['chart.title.yaxis'],
        					'tag':'title yaxis',
                            accessible: false
        				});
                    }
                    /**
                    * If the background color is spec ified - draw that. It's a rectangle that fills the
                    * entire area within the gutters
                    */
                    var bgcolor = prop['chart.background.color'];
                    if (bgcolor) {
                        co.fillStyle = bgcolor;
        				this.setElementCommonStyle(co,co.fillStyle,1);
                        co.fillRect(gutterLeft + 0.5, gutterTop + 0.5, ca.width - gutterLeft - gutterRight, ca.height - gutterTop - gutterBottom);
                    }
                    /**
                    * Draw horizontal background bars
                    */
                    var numbars   = (prop['chart.ylabels.count'] || 5);
                    var barHeight = (ca.height - gutterBottom - gutterTop) / numbars;
        			if(prop['chart.background.grid']) {
        				co.beginPath();
        					co.fillStyle   = prop['chart.background.barcolor1'];
        					this.setElementCommonStyle(co,co.fillStyle,1);
        					co.strokeStyle = prop['chart.background.barcolor1'];
        					this.setElementCommonStyle(co,co.strokeStyle,2);
        					height = (ca.height - gutterBottom);

        					for (var i=0; i<numbars; i+=2) {
        						co.rect(gutterLeft,
        							(i * barHeight) + gutterTop,
        							ca.width - gutterLeft - gutterRight,
        							barHeight
        						);
        					}
        				co.fill();
        				co.beginPath();
        					co.fillStyle   = prop['chart.background.barcolor2'];
        					this.setElementCommonStyle(co,co.fillStyle,1);
        					co.strokeStyle =  prop['chart.background.barcolor2'];
        					this.setElementCommonStyle(co,co.strokeStyle,2);

        					for (var i=1; i<numbars; i+=2) {
        						co.rect(
        							gutterLeft,
        							(i * barHeight) + gutterTop,
        							ca.width - gutterLeft - gutterRight,
        							barHeight
        						);
        					}

        				co.fill();

        			}
        			var bkwidth = prop['chart.background.grid.width'];
        			if(bkwidth == null || bkwidth == undefined) bkwidth = 0;

        		  // Draw the background grid
        			//if (prop['chart.background.grid'] && bkwidth>0) {
        			if (bkwidth>0) {
        				prop['chart.background.grid.autofit.numhlines'] += 0.0001;

        				// If autofit is specified, use the .numhlines and .numvlines along with the width to work
        				// out the hsize and vsize
        				if (prop['chart.background.grid.autofit']) {

        					/**
        					* Align the grid to the tickmarks
        					*/
        					if (prop['chart.background.grid.autofit.align']) {

        						// Align the horizontal lines
        						if (obj.type === 'hbar') {
        							obj.set('chart.background.grid.autofit.numhlines', obj.data.length);
        						}

        						// Align the vertical lines for the line
        						if (obj.type === 'line') {
        							if (typeof prop['chart.background.grid.autofit.numvlines'] === 'number') {
        								// Nada
        							} else if (prop['chart.labels'] && prop['chart.labels'].length) {
        								obj.Set('chart.background.grid.autofit.numvlines', prop['chart.labels'].length - 1);
        							} else {
        								obj.Set('chart.background.grid.autofit.numvlines', obj.data[0].length - 1);
        							}
        						} else if (obj.type === 'waterfall') {
        							obj.set(
        								'backgroundGridAutofitNumvlines',
        								obj.data.length + (prop['chart.total'] ? 1 : 0)
        							);

        						// Align the vertical lines for the bar, Scatter
        						} else if ( (
        							obj.type === 'bar' ||
        							obj.type === 'scatter'
        							)

        							&& (
        								   (prop['chart.labels'] && prop['chart.labels'].length)
        								|| obj.type === 'bar'
        							   )
        						) {

        							var len = (prop['chart.labels'] && prop['chart.labels'].length) || obj.data.length;


        							obj.set({
        								backgroundGridAutofitNumvlines: len
        							});

        						// Gantt
        						} else if (obj.type === 'gantt') {

        							if (typeof obj.get('chart.background.grid.autofit.numvlines') === 'number') {
        								// Nothing to do here
        							} else {
        								obj.set('chart.background.grid.autofit.numvlines', prop['chart.xmax']);
        							}

        							obj.set('chart.background.grid.autofit.numhlines', obj.data.length);

        						// HBar
        						} else if (obj.type === 'hbar' && this.isNull(prop['chart.background.grid.autofit.numhlines']) ) {
        							obj.set('chart.background.grid.autofit.numhlines', obj.data.length);
        						}
        					}

        					var vsize = ((ca.width - gutterLeft - gutterRight)) / prop['chart.background.grid.autofit.numvlines'];
        					var hsize = (ca.height - gutterTop - gutterBottom) / prop['chart.background.grid.autofit.numhlines'];

        					obj.Set('chart.background.grid.vsize', vsize);
        					obj.Set('chart.background.grid.hsize', hsize);
        				}

        				co.beginPath();
        				co.lineWidth   = prop['chart.background.grid.width'] ? prop['chart.background.grid.width'] : 1;
        				co.setElementLineWidth(co.lineWidth);
        				co.strokeStyle = prop['chart.background.grid.color'];
        				this.setElementCommonStyle(co,co.strokeStyle,2);
        				// Dashed background grid

        				if (prop['chart.background.grid.dashed']) {
        					if(co._handle && co._handle._draw_ctx) {
        						var ctx = co._handle._draw_ctx;
        						if(typeof ctx.setLineDash == 'function') {
        							ctx.setLineDash([3,5]);
        						}
        					}
        				}
        				if (prop['chart.background.grid.dotted']) {
        					if(co._handle && co._handle._draw_ctx) {
        						var ctx = co._handle._draw_ctx;
        						if(typeof ctx.setLineDash == 'function') {
        							ctx.setLineDash([1,3]);
        						}
        					}
        				}
        				/*
        				if (prop['chart.background.grid.dashed'] && typeof co.setLineDash == 'function') {
        					co.setLineDash([3,5]);
        				}
        				// Dotted background grid
        				if (prop['chart.background.grid.dotted'] && typeof co.setLineDash == 'function') {
        					co.setLineDash([1,3]);
        				}
        				*/
        				co.beginPath();
        				// Draw the horizontal lines
        				if (prop['chart.background.grid.hlines']) {
        					height = (co.height - gutterBottom)
        					var hsize = prop['chart.background.grid.hsize'];
        					for (y=gutterTop; y<=height; y+=hsize) {
        						co.moveTo(gutterLeft, this.ma.round(y));
        						co.lineTo(ca.width - gutterRight, this.ma.round(y));
        					}
        				}
        				if (prop['chart.background.grid.vlines']) {
        					// Draw the vertical lines
        					var width = (co.width - gutterRight);
        					var vsize = prop['chart.background.grid.vsize'];

        					for (x=gutterLeft; this.ma.round(x)<=width; x+=vsize) {
        						co.moveTo(this.ma.round(x), gutterTop);
        						co.lineTo(this.ma.round(x), ca.height - gutterBottom);
        					}
        				}
        				if (prop['chart.background.grid.border']) {
        					// Make sure a rectangle, the same colour as the grid goes around the graph
        					co.strokeStyle = prop['chart.background.grid.color'];
        					this.setElementCommonStyle(co,co.strokeStyle,2);
        					co.strokeRect(this.ma.round(gutterLeft), this.ma.round(gutterTop), ca.width - gutterLeft - gutterRight, ca.height - gutterTop - gutterBottom);
        				}
        			}

        			co.stroke();
        			// Ensure the grids drawn before continuing
        			co.beginPath();
        			co.closePath();

                    // If it's a bar and 3D variant, translate
                    if (variant == '3d') {
        				if (nexacro.Browser == "IE" && nexacro.BrowserVersion < 9) {
        				} else {
        					co.restore();
        				}
                    }
                    // Reset the line dash
                    if (typeof co.setLineDash == 'function') {
                        co.setLineDash([1,0]);
                    }

                    co.stroke();


                // Draw the title if one is set
                if ( typeof(obj.properties['chart.title']) == 'string') {

                    var prop = obj.properties;

                    this.drawTitle(
                        obj,
                        prop['chart.title'],
                        obj.gutterTop,
                        null,
                        prop['chart.title.size'] ? prop['chart.title.size'] : prop['chart.text.size'] + 2,
                        obj
                    );
                }

        		if(co._handle && co._handle._draw_ctx) {
        			var ctx = co._handle._draw_ctx;
        			if(typeof ctx.setLineDash == 'function') {
        				ctx.setLineDash([]);
        			}
        		}
            };


            /**
            * Formats a number with thousand seperators so it's easier to read
            *
            * @param  integer obj The chart object
            * @param  integer num The number to format
            * @param  string      The (optional) string to prepend to the string
            * @param  string      The (optional) string to append to the string
            * @return string      The formatted number
            */
            nexacro.RGraph.prototype.numberFormat =
            nexacro.RGraph.prototype.number_format = function (obj, num)
            {
        		var ca   = obj.canvas;
        		var co   = obj.context;
        		var prop = obj.properties;

        		var i;
        		var prepend = arguments[2] ? String(arguments[2]) : '';
        		var append  = arguments[3] ? String(arguments[3]) : '';
        		var output  = '';
        		var decimal2 = '';
        		var decimal_seperator  = typeof prop['chart.scale.point'] == 'string' ? prop['chart.scale.point'] : '.';
        		var thousand_seperator = typeof prop['chart.scale.thousand'] == 'string' ? prop['chart.scale.thousand'] : ',';
        		RegExp.$1   = '';
        		var i,j;

        		if (typeof prop['chart.scale.formatter'] === 'function') {
        			return prop['chart.scale.formatter'](obj, num);
        		}

        		// Ignore the preformatted version of "1e-2"
        		if (String(num).indexOf('e') > 0) {
        			return String(prepend + String(num) + append);
        		}

        		// We need then number as a string
        		num = String(num);

        		// Take off the decimal part - we re-append it later
        		if (num.indexOf('.') > 0) {
        			var tmp = num;
        			num     = num.replace(/\.(.*)/, ''); // The front part of the number
        			decimal2 = tmp.replace(/(.*)\.(.*)/, '$2'); // The decimal part of the number
        		}

        		// Thousand seperator
        		//var seperator = arguments[1] ? String(arguments[1]) : ',';
        		var seperator = thousand_seperator;

        		/**
        		* Work backwards adding the thousand seperators
        		*/
        		var foundPoint;
        		for (i=(num.length - 1),j=0; i>=0; j++,i--) {
        			var character = num.charAt(i);

        			if ( j % 3 == 0 && j != 0) {
        				output += seperator;
        			}

        			/**
        			* Build the output
        			*/
        			output += character;
        		}

        		/**
        		* Now need to reverse the string
        		*/
        		var rev = output;
        		output = '';
        		for (i=(rev.length - 1); i>=0; i--) {
        			output += rev.charAt(i);
        		}

        		// Tidy up
        		//output = output.replace(/^-,/, '-');
        		if (output.indexOf('-' + prop['chart.scale.thousand']) == 0) {
        			output = '-' + output.substr(('-' + prop['chart.scale.thousand']).length);
        		}

        		// Reappend the decimal
        		if (decimal2.length) {
        			output =  output + decimal_seperator + decimal2;
        			decimal2 = '';
        			RegExp.$1 = '';
        		}

        		// Minor bugette
        		if (output.charAt(0) == '-') {
        			output = output.replace(/-/, '');
        			prepend = '-' + prepend;
        		}

        		return prepend + output + append;
            };

            /**
            * Draws horizontal coloured bars on something like the bar, line or scatter
            */
            nexacro.RGraph.prototype.drawBars =
            nexacro.RGraph.prototype.DrawBars = function (obj)
            {
                var prop  = obj.properties;
                var co    = obj.context;
                var ca    = obj.canvas;
                var hbars = prop['chart.background.hbars'];

                if (hbars === null) {
                    return;
                }
                /**
                * Draws a horizontal bar
                */
                co.beginPath();

                for (var i=0,len=hbars.length; i<len; ++i) {

                    var start  = hbars[i][0];
                    var length = hbars[i][1];
                    var color  = hbars[i][2];


                    // Perform some bounds checking
                    if(this.is_null(start))start = obj.scale2.max
                    if (start > obj.scale2.max) start = obj.scale2.max;
                    if (this.is_null(length)) length = obj.scale2.max - start;
                    if (start + length > obj.scale2.max) length = obj.scale2.max - start;
                    if (start + length < (-1 * obj.scale2.max) ) length = (-1 * obj.scale2.max) - start;

                    if (prop['chart.xaxispos'] == 'center' && start == obj.scale2.max && length < (obj.scale2.max * -2)) {
                        length = obj.scale2.max * -2;
                    }

                    /**
                    * Draw the bar
                    */
                    var x = prop['chart.gutter.left'];
                    var y = obj.getYCoord(start);
                    var w = ca.width - prop['chart.gutter.left'] - prop['chart.gutter.right'];
                    var h = obj.getYCoord(start + length) - y;

                    // Accommodate Opera :-/
                    if (this.ISOPERA != -1 && prop['chart.xaxispos'] == 'center' && h < 0) {
                        h *= -1;
                        y = y - h;
                    }

                    /**
                    * Account for X axis at the top
                    */
                    if (prop['chart.xaxispos'] == 'top') {
                        y  = ca.height - y;
                        h *= -1;
                    }
                    co.fillStyle = color;
        			this.setElementCommonStyle(co,co.fillStyle,1);
                    co.fillRect(x, y, w, h);
                }
        /*





                    // If the X axis is at the bottom, and a negative max is given, warn the user
                    if (obj.Get('chart.xaxispos') == 'bottom' && (hbars[i][0] < 0 || (hbars[i][1] + hbars[i][1] < 0)) ) {
                        alert('[' + obj.type.toUpperCase() + ' (ID: ' + obj.id + ') BACKGROUND HBARS] You have a negative value in one of your background hbars values, whilst the X axis is in the center');
                    }

                    var ystart = (obj.grapharea - (((hbars[i][0] - obj.scale2.min) / (obj.scale2.max - obj.scale2.min)) * obj.grapharea));
                    //var height = (Math.min(hbars[i][1], obj.max - hbars[i][0]) / (obj.scale2.max - obj.scale2.min)) * obj.grapharea;
                    var height = obj.getYCoord(hbars[i][0]) - obj.getYCoord(hbars[i][1]);

                    // Account for the X axis being in the center
                    if (obj.Get('chart.xaxispos') == 'center') {
                        ystart /= 2;
                        //height /= 2;
                    }

                    ystart += obj.Get('chart.gutter.top')

                    var x = obj.Get('chart.gutter.left');
                    var y = ystart - height;
                    var w = obj.canvas.width - obj.Get('chart.gutter.left') - obj.Get('chart.gutter.right');
                    var h = height;

                    // Accommodate Opera :-/
                    if (navigator.userAgent.indexOf('Opera') != -1 && obj.Get('chart.xaxispos') == 'center' && h < 0) {
                        h *= -1;
                        y = y - h;
                    }

                    /**
                    * Account for X axis at the top
                    */
                    //if (obj.Get('chart.xaxispos') == 'top') {
                    //    y  = obj.canvas.height - y;
                    //    h *= -1;
                    //}

                    //obj.context.fillStyle = hbars[i][2];
                    //obj.context.fillRect(x, y, w, h);
                //}
            };




            /**
            * Draws in-graph labels.
            *
            * @param object obj The graph object
            */
            nexacro.RGraph.prototype.drawInGraphLabels =
            nexacro.RGraph.prototype.DrawInGraphLabels = function (obj)
            {
                var ca      = obj.canvas;
                var co      = obj.context;
                var prop    = obj.properties;
                var labels  = prop['chart.labels.ingraph'];
                var labels_processed = [];

                // Defaults
                var fgcolor   = 'black';
                var bgcolor   = 'white';
                var direction = 1;

                if (!labels) {
                    return;
                }

                /**
                * Preprocess the labels array. Numbers are expanded
                */
                for (var i=0,len=labels.length; i<len; i+=1) {
                    if (typeof labels[i] === 'number') {
                        for (var j=0; j<labels[i]; ++j) {
                            labels_processed.push(null);
                        }
                    } else if (typeof labels[i] === 'string' || typeof labels[i] === 'object') {
                        labels_processed.push(labels[i]);

                    } else {
                        labels_processed.push('');
                    }
                }

                /**
                * Turn off any shadow
                */
                this.noShadow(obj);

                if (labels_processed && labels_processed.length > 0) {

                    for (var i=0,len=labels_processed.length; i<len; i+=1) {
                        if (labels_processed[i]) {
                            var coords = obj.coords[i];

                            if (coords && coords.length > 0) {
                                var x      = (obj.type == 'bar' ? coords[0] + (coords[2] / 2) : coords[0]);
                                var y      = (obj.type == 'bar' ? coords[1] + (coords[3] / 2) : coords[1]);
                                var length = typeof labels_processed[i][4] === 'number' ? labels_processed[i][4] : 25;

                                co.beginPath();
                                co.fillStyle   = 'black';
        						this.setElementCommonStyle(co,co.fillStyle,1);
                                co.strokeStyle = 'black';
        						this.setElementCommonStyle(co,co.strokeStyle,2);


                                if (obj.type === 'bar') {

                                    /**
                                    * X axis at the top
                                    */
                                    if (obj.Get('chart.xaxispos') == 'top') {
                                        length *= -1;
                                    }

                                    if (prop['chart.variant'] == 'dot') {
                                        co.moveTo(this.ma.round(x), obj.coords[i][1] - 5);
                                        co.lineTo(this.ma.round(x), obj.coords[i][1] - 5 - length);

                                        var text_x = this.maround(x);
                                        var text_y = obj.coords[i][1] - 5 - length;

                                    } else if (prop['chart.variant'] == 'arrow') {
                                        co.moveTo(this.ma.round(x), obj.coords[i][1] - 5);
                                        co.lineTo(this.ma.round(x), obj.coords[i][1] - 5 - length);

                                        var text_x = this.maround(x);
                                        var text_y = obj.coords[i][1] - 5 - length;

                                    } else {

                                        co.arc(this.ma.round(x), y, 2.5, 0, 6.28, 0);
                                        co.moveTo(this.ma.round(x), y);
                                        co.lineTo(this.ma.round(x), y - length);

                                        var text_x = this.ma.round(x);
                                        var text_y = y - length;
                                    }

                                    co.stroke();
                                    co.fill();


                                } else {

                                    if (
                                        typeof labels_processed[i] == 'object' &&
                                        typeof labels_processed[i][3] == 'number' &&
                                        labels_processed[i][3] == -1
                                       ) {

                                        co.moveTo(this.ma.round(x), y + 5);
                                        co.lineTo(this.ma.round(x), y + 5 + length);

                                        co.stroke();
                                        co.beginPath();

                                        // This draws the arrow
                                        co.moveTo(this.ma.round(x), y + 5);
                                        co.lineTo(this.ma.round(x) - 3, y + 10);
                                        co.lineTo(this.ma.round(x) + 3, y + 10);
                                        co.closePath();

                                        var text_x = x;
                                        var text_y = y + 5 + length;

                                    } else {

                                        var text_x = x;
                                        var text_y = y - 5 - length;

                                        co.moveTo(this.ma.round(x), y - 5);
                                        co.lineTo(this.ma.round(x), y - 5 - length);

                                        co.stroke();
                                        co.beginPath();

                                        // This draws the arrow
                                        co.moveTo(this.ma.round(x), y - 5);
                                        co.lineTo(this.ma.round(x) - 3, y - 10);
                                        co.lineTo(this.ma.round(x) + 3, y - 10);
                                        co.closePath();
                                    }

                                    co.fill();
                                }

                                // Taken out on the 10th Nov 2010 - unnecessary
                                //var width = context.measureText(labels[i]).width;

                                co.beginPath();

                                    // Fore ground color
                                    co.fillStyle = (typeof labels_processed[i] === 'object' && typeof labels_processed[i][1] === 'string') ? labels_processed[i][1] : 'black';
        							this.setElementCommonStyle(co,co.fillStyle,1);
                                    this.text2(obj,{
                                        'font':prop['chart.text.font'],
                                        'size':prop['chart.text.size'],
                                        'x':text_x,
                                        'y':text_y + (obj.properties['chart.text.accessible'] ? 2 : 0),
                                        'text': (typeof labels_processed[i] === 'object' && typeof labels_processed[i][0] === 'string') ? labels_processed[i][0] : labels_processed[i],
                                        'valign': 'bottom',
                                        'halign':'center',
                                        'bounding':true,
                                        'bounding.fill': (typeof labels_processed[i] === 'object' && typeof labels_processed[i][2] === 'string') ? labels_processed[i][2] : 'white',
                                        'tag':'labels ingraph'
                                    });
                                co.fill();
                            }
                        }
                    }
                }
            };




            /**
            * This function "fills in" key missing properties that various implementations lack
            *
            * @param object e The event object
            */
            nexacro.RGraph.prototype.fixEventObject =
            nexacro.RGraph.prototype.FixEventObject = function (obj,e)
            {
        		if(e == undefined) return;
        		if(e.clientX != undefined) {
        			//var parentLeft = nexacro.toNumber(obj.parentDiv.getOffsetLeft());
        			//var parentTop = nexacro.toNumber(obj.parentDiv.getOffsetTop());
        			//e.pageX  = (e.clientX - parentLeft);
        			//e.pageY  = (e.clientY - parentTop);
        			e.pageX  = e.clientX;
        			e.pageY  = e.clientY;
        		}
        		e.target = obj;

                // Any browser that doesn't implement stopPropagation() (MSIE)
                if (this.ISIE && !e.stopPropagation) {
                    e.stopPropagation = function () {window.event.cancelBubble = true;}
                }

                return e;
            };


            /**
            * Thisz function hides the crosshairs coordinates
            */
            nexacro.RGraph.prototype.hideCrosshairCoords =
            nexacro.RGraph.prototype.HideCrosshairCoords = function ()
            {
                var div = this.Registry_Get('chart.coordinates.coords.div');

                if (   div
                    && div.style.opacity == 1
                    && div.__object__.Get('chart.crosshairs.coords.fadeout')
                   ) {

                    var style = this.Registry_Get('chart.coordinates.coords.div').style;

                    setTimeout(function() {style.opacity = 0.9;}, 25);
                    setTimeout(function() {style.opacity = 0.8;}, 50);
                    setTimeout(function() {style.opacity = 0.7;}, 75);
                    setTimeout(function() {style.opacity = 0.6;}, 100);
                    setTimeout(function() {style.opacity = 0.5;}, 125);
                    setTimeout(function() {style.opacity = 0.4;}, 150);
                    setTimeout(function() {style.opacity = 0.3;}, 175);
                    setTimeout(function() {style.opacity = 0.2;}, 200);
                    setTimeout(function() {style.opacity = 0.1;}, 225);
                    setTimeout(function() {style.opacity = 0;}, 250);
                    setTimeout(function() {style.display = 'none';}, 275);
                }
            };




            /**
            * Draws the3D axes/background
            *
            * @param object obj The chart object
            */
            nexacro.RGraph.prototype.draw3DAxes =
            nexacro.RGraph.prototype.Draw3DAxes = function (obj)
            {
                var prop = obj.properties,
                    co   = obj.context,
                    ca   = obj.canvas;

                var gutterLeft    = obj.gutterLeft,
                    gutterRight   = obj.gutterRight,
                    gutterTop     = obj.gutterTop,
                    gutterBottom  = obj.gutterBottom,
                    xaxispos      = prop['chart.xaxispos'],
                    graphArea     = ca.height - gutterTop - gutterBottom,
                    halfGraphArea = graphArea / 2,
                    offsetx       = prop['chart.variant.threed.offsetx'],
                    offsety       = prop['chart.variant.threed.offsety'],
                    xaxis         = prop['chart.variant.threed.xaxis'],
                    yaxis         = prop['chart.variant.threed.yaxis'];
                //
                // Draw the 3D Y axis
                //
                if (yaxis) {
                    this.draw3DYAxis(obj);
                }
                // X axis
                if (xaxis) {
                    if (xaxispos === 'center') {
                        this.path2(
                            co,
                            'b m % % l % % l % % l % % c s #aaaaaa f #dddddd',
                            gutterLeft,gutterTop + halfGraphArea,
                            gutterLeft + offsetx,gutterTop + halfGraphArea - offsety,
                            ca.width - gutterRight + offsetx,gutterTop + halfGraphArea - offsety,
                            ca.width - gutterRight,gutterTop + halfGraphArea
                        );
                    } else {
                        if (obj.type === 'hbar') {
                            var xaxisYCoord = obj.canvas.height - obj.properties['chart.gutter.bottom'];
                        } else {
                            var xaxisYCoord = obj.getYCoord(0);
                        }

                        this.path2(
                            co,
                            'm % % l % % l % % l % % c s #aaaaaa f #dddddd',
                            gutterLeft,xaxisYCoord,
                            gutterLeft + offsetx,xaxisYCoord - offsety,
                            ca.width - gutterRight + offsetx,xaxisYCoord - offsety,
                            ca.width - gutterRight,xaxisYCoord
                        );

                    }
                }
            };

            /**
            * Draws the3D Y axis/background
            *
            * @param object obj The chart object
            */
            nexacro.RGraph.prototype.draw3DYAxis = function (obj)
            {
                var prop = obj.properties,
                    co   = obj.context,
                    ca   = obj.canvas;

                var gutterLeft    = obj.gutterLeft,
                    gutterRight   = obj.gutterRight,
                    gutterTop     = obj.gutterTop,
                    gutterBottom  = obj.gutterBottom,
                    xaxispos      = prop['chart.xaxispos'],
                    graphArea     = ca.height - gutterTop - gutterBottom,
                    halfGraphArea = graphArea / 2,
                    offsetx       = prop['chart.variant.threed.offsetx'],
                    offsety       = prop['chart.variant.threed.offsety']

                // Y axis
                // Commented out the if condition because of drawing oddities
                //if (!prop['chart.noaxes'] && !prop['chart.noyaxis']) {

                    if ( (obj.type === 'hbar' || obj.type === 'bar') && prop['chart.yaxispos'] === 'center') {
                        var x = ((ca.width - gutterLeft - gutterRight) / 2) + gutterLeft;
                    } else if ((obj.type === 'hbar' || obj.type === 'bar') && prop['chart.yaxispos'] === 'right') {
                        var x = ca.width - gutterRight;
                    } else {
                        var x = gutterLeft;
                    }
                    this.path2(
                        co,
                        'b m % % l % % l % % l % % s #aaafff88 f #dddfff88',
                        x,gutterTop,
                        x + offsetx,gutterTop - offsety,
                        x + offsetx,ca.height - gutterBottom - offsety,
                        x,ca.height - gutterBottom
                    );
                //}
            };

            /**
            * Draws a rectangle with curvy corners
            *
            * @param co object The context
            * @param x number The X coordinate (top left of the square)
            * @param y number The Y coordinate (top left of the square)
            * @param w number The width of the rectangle
            * @param h number The height of the rectangle
            * @param   number The radius of the curved corners
            * @param   boolean Whether the top left corner is curvy
            * @param   boolean Whether the top right corner is curvy
            * @param   boolean Whether the bottom right corner is curvy
            * @param   boolean Whether the bottom left corner is curvy
            */
            nexacro.RGraph.prototype.strokedCurvyRect = function (co, x, y, w, h)
            {
                // The corner radius
                var r = arguments[5] ? arguments[5] : 3;

                // The corners
                var corner_tl = (arguments[6] || arguments[6] == null) ? true : false;
                var corner_tr = (arguments[7] || arguments[7] == null) ? true : false;
                var corner_br = (arguments[8] || arguments[8] == null) ? true : false;
                var corner_bl = (arguments[9] || arguments[9] == null) ? true : false;

                co.beginPath();

                    // Top left side
                    co.moveTo(x + (corner_tl ? r : 0), y);
                    co.lineTo(x + w - (corner_tr ? r : 0), y);

                    // Top right corner
                    if (corner_tr) {
                        co.arc(x + w - r, y + r, r, this.PI + this.HALFPI, this.TWOPI, false);
                    }

                    // Top right side
                    co.lineTo(x + w, y + h - (corner_br ? r : 0) );

                    // Bottom right corner
                    if (corner_br) {
                        co.arc(x + w - r, y - r + h, r, this.TWOPI, this.HALFPI, false);
                    }

                    // Bottom right side
                    co.lineTo(x + (corner_bl ? r : 0), y + h);

                    // Bottom left corner
                    if (corner_bl) {
                        co.arc(x + r, y - r + h, r, this.HALFPI, this.PI, false);
                    }

                    // Bottom left side
                    co.lineTo(x, y + (corner_tl ? r : 0) );

                    // Top left corner
                    if (corner_tl) {
                        co.arc(x + r, y + r, r, this.PI, this.PI + this.HALFPI, false);
                    }

                co.stroke();
            };




            /**
            * Draws a filled rectangle with curvy corners
            *
            * @param context object The context
            * @param x       number The X coordinate (top left of the square)
            * @param y       number The Y coordinate (top left of the square)
            * @param w       number The width of the rectangle
            * @param h       number The height of the rectangle
            * @param         number The radius of the curved corners
            * @param         boolean Whether the top left corner is curvy
            * @param         boolean Whether the top right corner is curvy
            * @param         boolean Whether the bottom right corner is curvy
            * @param         boolean Whether the bottom left corner is curvy
            */
            nexacro.RGraph.prototype.filledCurvyRect = function (co, x, y, w, h)
            {
                // The corner radius
                var r = arguments[5] ? arguments[5] : 3;

                // The corners
                var corner_tl = (arguments[6] || arguments[6] == null) ? true : false;
                var corner_tr = (arguments[7] || arguments[7] == null) ? true : false;
                var corner_br = (arguments[8] || arguments[8] == null) ? true : false;
                var corner_bl = (arguments[9] || arguments[9] == null) ? true : false;

                co.beginPath();

                    // First draw the corners

                    // Top left corner
                    if (corner_tl) {
                        co.moveTo(x + r, y + r);
                        co.arc(x + r, y + r, r, this.PI, this.PI + this.HALFPI, false);
                    } else {
                        co.fillRect(x, y, r, r);
                    }

                    // Top right corner
                    if (corner_tr) {
                        co.moveTo(x + w - r, y + r);
                        co.arc(x + w - r, y + r, r, this.PI + this.HALFPI, 0, false);
                    } else {
                        co.moveTo(x + w - r, y);
                        co.fillRect(x + w - r, y, r, r);
                    }


                    // Bottom right corner
                    if (corner_br) {
                        co.moveTo(x + w - r, y + h - r);
                        co.arc(x + w - r, y - r + h, r, 0, this.HALFPI, false);
                    } else {
                        co.moveTo(x + w - r, y + h - r);
                        co.fillRect(x + w - r, y + h - r, r, r);
                    }

                    // Bottom left corner
                    if (corner_bl) {
                        co.moveTo(x + r, y + h - r);
                        co.arc(x + r, y - r + h, r, this.HALFPI, this.PI, false);
                    } else {
                        co.moveTo(x, y + h - r);
                        co.fillRect(x, y + h - r, r, r);
                    }

                    // Now fill it in
                    co.fillRect(x + r, y, w - r - r, h);
                    co.fillRect(x, y + r, r + 1, h - r - r);
                    co.fillRect(x + w - r - 1, y + r, r + 1, h - r - r);

                co.fill();
            };




            /**
            * Hides the zoomed canvas
            */
            nexacro.RGraph.prototype.hideZoomedCanvas =
            nexacro.RGraph.prototype.HideZoomedCanvas = function ()
            {
                var interval = 10;
                var frames   = 15;

                if (typeof this.zoom_image === 'object') {
                    var obj  = this.zoom_image.obj;
                    var prop = obj.properties;
                } else {
                    return;
                }

                if (prop['chart.zoom.fade.out']) {
                    for (var i=frames,j=1; i>=0; --i, ++j) {
                        if (typeof this.zoom_image === 'object') {
                            setTimeout("RGraph.zoom_image.style.opacity = " + String(i / 10), j * interval);
                        }
                    }

                    if (typeof this.zoom_background === 'object') {
                        setTimeout("RGraph.zoom_background.style.opacity = " + String(i / frames), j * interval);
                    }
                }

                if (typeof this.zoom_image === 'object') {
                    setTimeout("RGraph.zoom_image.style.display = 'none'", prop['chart.zoom.fade.out'] ? (frames * interval) + 10 : 0);
                }

                if (typeof this.zoom_background === 'object') {
                    setTimeout("RGraph.zoom_background.style.display = 'none'", prop['chart.zoom.fade.out'] ? (frames * interval) + 10 : 0);
                }
            };




            /**
            * Adds an event handler
            *
            * @param object obj   The graph object
            * @param string event The name of the event, eg ontooltip
            * @param object func  The callback function
            */
            nexacro.RGraph.prototype.addCustomEventListener =
            nexacro.RGraph.prototype.AddCustomEventListener = function (obj, name, func)
            {
                // Initialise the events array if necessary
                if (typeof this.events[obj.uid] === 'undefined') {
                    this.events[obj.uid] = [];
                }

                // Prepend "on" if necessary
                if (name.substr(0, 2) !== 'on') {
                    name = 'on' + name;
                }

                this.events[obj.uid].push([obj, name, func]);

                return this.events[obj.uid].length - 1;
            };




            /**
            * Used to fire one of the nexacro.RGraph.prototyperaph custom events
            *
            * @param object obj   The graph object that fires the event
            * @param string event The name of the event to fire
            */
            nexacro.RGraph.prototype.fireCustomEvent =
            nexacro.RGraph.prototype.FireCustomEvent = function (obj, name)
            {
                if (obj && obj.isRGraph) {

                    // This allows the eventsMouseout property to work
                    // (for some reason...)
                    if (name.match(/(on)?mouseout/) && typeof obj.properties['chart.events.mouseout'] === 'function') {
                        (obj.properties['chart.events.mouseout'])(obj);
                    }

                    // DOM1 style of adding custom events
                    if (obj[name]) {
                        (obj[name])(obj);
                    }

                    var uid = obj.uid;

                    if (   typeof uid === 'string'
                        && typeof this.events === 'object'
                        && typeof this.events[uid] === 'object'
                        && this.events[uid].length > 0) {

                        for(var j=0; j<this.events[uid].length; ++j) {
                            if (this.events[uid][j] && this.events[uid][j][1] === name) {
                                this.events[uid][j][2](obj);
                            }
                        }
                    }
                }
            };




            /**
            * Clears all the custom event listeners that have been registered
            *
            * @param    string Limits the clearing to this object ID
            */
            nexacro.RGraph.prototype.removeAllCustomEventListeners =
            nexacro.RGraph.prototype.RemoveAllCustomEventListeners = function ()
            {
                var id = arguments[0];

                if (id && this.events[id]) {
                    this.events[id] = [];
                } else {
                    this.events = [];
                }
            };




            /**
            * Clears a particular custom event listener
            *
            * @param object obj The graph object
            * @param number i   This is the index that is return by .AddCustomEventListener()
            */
            nexacro.RGraph.prototype.removeCustomEventListener =
            nexacro.RGraph.prototype.RemoveCustomEventListener = function (obj, i)
            {
                if (   typeof this.events === 'object'
                    && typeof this.events[obj.id] === 'object'
                    && typeof this.events[obj.id][i] === 'object') {

                    this.events[obj.id][i] = null;
                }
            };




            /**
            * This draws the background
            *
            * @param object obj The graph object
            */
            nexacro.RGraph.prototype.drawBackgroundImage =
            nexacro.RGraph.prototype.DrawBackgroundImage = function (obj)
            {
                var prop = obj.properties;
                var ca   = obj.canvas;
                var co   = obj.context;
        		var oDiv = ca.parentDiv;
        		var img;
        		if(!oDiv) {
        			trace("[parentDiv Error]....");
        			return;
        		}

        		var sImgId = "ImageViewerCanvas__" + this.div.name;
        		var img = oDiv.components[sImgId];

                if (typeof prop['chart.background.image'] === 'string') {
        			var gutterLeft   = obj.gutterLeft;
                    var gutterRight  = obj.gutterRight;
                    var gutterTop    = obj.gutterTop;
                    var gutterBottom = obj.gutterBottom;
                    var stretch      = prop['chart.background.image.stretch'];
                    var align        = prop['chart.background.image.align'];

        			var x,y;

                    // Handle chart.background.image.align
                    if (typeof align === 'string') {
                        if (align.indexOf('right') != -1) {
                            x = ca.width - (prop['chart.background.image.w'] || oDiv.getOffsetWidth()) - gutterRight;
                        } else {
                            x = gutterLeft;
                        }

                        if (align.indexOf('bottom') != -1) {
                            y = ca.height - (prop['chart.background.image.h'] || oDiv.getOffsetHeight()) - gutterBottom;
                        } else {
                            y = gutterTop;
                        }
                    } else {
                        x = gutterLeft || 25;
                        y = gutterTop || 25;
                    }

                    // X/Y coords take precedence over the align
                    x = typeof prop['chart.background.image.x'] === 'number' ? prop['chart.background.image.x'] : x;
                    y = typeof prop['chart.background.image.y'] === 'number' ? prop['chart.background.image.y'] : y;

                    var w = stretch ? ca.width - gutterLeft - gutterRight : oDiv.getOffsetWidth();
                    var h = stretch ? ca.height - gutterTop - gutterBottom : oDiv.getOffsetHeight();

                    /**
                    * You can now specify the width and height of the image
                    */
                    if (typeof prop['chart.background.image.w'] === 'number') w  = prop['chart.background.image.w'];
                    if (typeof prop['chart.background.image.h'] === 'number') h = prop['chart.background.image.h'];

                    if (!img) {
        				img = new ImageViewer();
        				var sImgId = "ImageViewerCanvas__" + this.div.name;
        				img.init(sImgId, "absolute", 0, 0, oDiv.width, oDiv.height);
        				img.style.set_background("transparent");
        				oDiv.addChild(sImgId, img);
        				img.show();
                    }
        			var sUrl = 'url("' + prop['chart.background.image'] + '")';
        			img.set_left(x);
        			img.set_top(y);
        			img.set_text("");
        			img.set_width(w);
        			img.set_height(h);
        			img.set_imagealign(align);
        			img.style.set_border("1 none #ffffffff");
        			img.set_stretch(stretch?"fit":"none") // set
        			if(prop['chart.background.image'] != "") img.set_image(sUrl);
        			img.sendToBack();
        			img.set_visible(true);

        			if(prop['chart.background.image.background'] && prop['chart.background.image.background'] != "") {
        				if(prop['chart.background.image.gradation'] && prop['chart.background.image.gradation'] != "") {
        					img.style.set_background(prop['chart.background.image.background']);
        					img.style.set_gradation(prop['chart.background.image.gradation']);
        				}
        			}

        			if(prop['chart.background.image.alpha']) {
        				img.style.set_opacity(prop['chart.background.image.alpha']);
        			}
                } else {
        			if(img) img.set_visible(false);
        		}
            };


            /**
            * This function determines wshether an object has tooltips or not
            *
            * @param object obj The chart object
            */
            nexacro.RGraph.prototype.hasTooltips = function (obj)
            {
                var prop = obj.properties;

                if (typeof prop['chart.tooltips'] == 'object' && prop['chart.tooltips']) {
                    for (var i=0,len=prop['chart.tooltips'].length; i<len; ++i) {
                        if (!this.is_null(obj.Get('chart.tooltips')[i])) {
                            return true;
                        }
                    }
                } else if (typeof prop['chart.tooltips'] === 'function') {
                    return true;
                }

                return false;
            };




            /**
            * This function creates a (G)UID which can be used to identify objects.
            *
            * @return string (g)uid The (G)UID
            */
            nexacro.RGraph.prototype.createUID =
            nexacro.RGraph.prototype.CreateUID = function ()
            {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
                {
                    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                    return v.toString(16);
                });
            };



            /**
            * This is the new object registry, used to facilitate multiple objects per canvas.
            *
            * @param object obj The object to register
            */
            nexacro.RGraph.prototype.OR_add =
            nexacro.RGraph.prototype.OR_Add = function (obj)
            {
                var uid = obj.uid;
                var id  = obj.canvas.id;
                /**
                * Index the objects by UID
                */
                this.OR.objects.byUID.push([uid, obj]);

                /**
                * Index the objects by the canvas that they're drawn on
                */
                this.OR.objects.byCanvasID.push([id, obj]);
            };




            /**
            * Remove an object from the object registry
            *
            * @param object obj The object to remove.
            */
            nexacro.RGraph.prototype.OR_remove =
            nexacro.RGraph.prototype.OR_Remove = function (obj)
            {
                var id  = obj.id;
                var uid = obj.uid;

                for (var i=0; i<this.OR.objects.byUID.length; ++i) {
                    if (this.OR.objects.byUID[i] && this.OR.objects.byUID[i][1].uid == uid) {
                        this.OR.objects.byUID[i] = null;
                    }
                }


                for (var i=0; i<this.OR.objects.byCanvasID.length; ++i) {
                    if (   this.OR.objects.byCanvasID[i]
                        && this.OR.objects.byCanvasID[i][1]
                        && this.OR.objects.byCanvasID[i][1].uid == uid) {

                        this.OR.objects.byCanvasID[i] = null;
                    }
                }
            };




            /**
            * Removes all objects from the ObjectRegistry. If either the ID of a canvas is supplied,
            * or the canvas itself, then only objects pertaining to that canvas are cleared.
            *
            * @param mixed   Either a canvas object (as returned by document.getElementById()
            *                or the ID of a canvas (ie a string)
            */
            nexacro.RGraph.prototype.OR_clear =
            nexacro.RGraph.prototype.OR_Clear = function ()
            {
                // If an ID is supplied restrict the learing to that
                if (arguments[0]) {
                    var id      = (typeof arguments[0] === 'object' ? arguments[0].id : arguments[0]);
                    var objects = this.OR_getObjectsByCanvasID(id);
                    if(!objects) return;

                    for (var i=0,len=objects.length; i<len; ++i) {
                        this.OR_remove(objects[i]);
                    }
        		} else if (arguments[1]) {	// div
        			if(!this.objects || !this.OR.objects.byCanvasID) return;
        			var len = this.OR.objects.byCanvasID.length;
        			for (var i=(len-1); i>=0; i--) {
        				var or = this.OR.objects.byCanvasID[i];
        				if(or == null) continue;

        				var oc = or[1].canvas;	// canvas
        				var ocid = oc.id;	// canvas
        				var od = oc.parentDiv;
        				if(od == arguments[1])
        				{
        					for(var j=0;j<=this._cnt;j++)
        					{
        						if(this._odiv[j] == od)
        						{
        							this._cvs[j] = null;
        							this._ctx[j] = null;
        							this._ctxid[j] = null;
        							this._odiv[j] = null;
        						}
        					}
        					this.OR_clear(oc);
        					this.OR_remove(or[1]);
        				}
        			}
                } else {
                    this.OR.objects            = { "byUID" : [] , "byCanvasID" : [] };
        //             this.OR.objects.byUID      = [];
        //             this.OR.objects.byCanvasID = [];
                }
            };




            /**
            * Lists all objects in the ObjectRegistry
            *
            * @param boolean ret Whether to return the list or alert() it
            */
            nexacro.RGraph.prototype.OR_List = function ()
            {
                var list = [];

                for (var i=0,len=this.OR.objects.byUID.length; i<len; ++i) {
                    if (this.OR.objects.byUID[i]) {
                        list.push(this.OR.objects.byUID[i][1].type);
                    }
                }

                if (arguments[0]) {
                    return list;
                } else {
                    $p(list);
                }
            };




            /**
            * Clears the ObjectRegistry of objects that are of a certain given type
            *
            * @param type string The type to clear
            */
            nexacro.RGraph.prototype.OR_ClearByType = function (type)
            {
                var objects = this.OR.objects.byUID;

                for (var i=0,len=objects.length; i<len; ++i) {
                    if (objects[i]) {
                        var uid = objects[i][0];
                        var obj = objects[i][1];

                        if (obj && obj.type == type) {
                            this.remove(obj);
                        }
                    }
                }
            };




            /**
            * This function provides an easy way to go through all of the objects that are held in the
            * Registry
            *
            * @param func function This function is run for every object. Its passed the object as an argument
            * @param string type Optionally, you can pass a type of object to look for
            */
            nexacro.RGraph.prototype.OR_Iterate = function (func)
            {
                var objects = this.OR.objects.byUID;

                for (var i=0,len=objects.length; i<len; ++i) {

                    if (typeof arguments[1] === 'string') {

                        var types = arguments[1].split(/,/);

                        for (var j=0,len2=types.length; j<len2; ++j) {
                            if (types[j] == objects[i][1].type) {
                                func(objects[i][1]);
                            }
                        }
                    } else {
                        func(objects[i][1]);
                    }
                }
            };

            /**
            * Retrieves all objects for a given canvas id
            *
            * @patarm id string The canvas ID to get objects for.
            */
            nexacro.RGraph.prototype.OR_getObjectsByCanvasID = function (id)
            {
        		if(!this.ObjectRegistry || !this.ObjectRegistry.objects) return;
                var store = this.ObjectRegistry.objects.byCanvasID;
                if(!store) return;
                var ret = [];

                // Loop through all of the objects and return the appropriate ones
                for (var i=0,len=store.length; i<len; ++i) {
                    if (store[i] && store[i][0] == id ) {
                        ret.push(store[i][1]);
                    }
                }

                return ret;
            };

            /**
            * Retrieves the relevant object based on the X/Y position.
            *
            * @param  object e The event object
            * @return object   The applicable (if any) object
            */
            nexacro.RGraph.prototype.OR_firstbyxy =
            nexacro.RGraph.prototype.OR_getFirstObjectByXY =
            nexacro.RGraph.prototype.OR_getObjectByXY = function (e)
            {
                var canvas  = e.target;
                var ret     = null;
                var objects = this.OR_getObjectsByCanvasID(canvas.id);

                for (var i=(objects.length - 1); i>=0; --i) {

                    var obj = objects[i].getObjectByXY(e);

                    if (obj) {
                        return obj;
                    }
                }
            };


            /**
            * Retrieves the relevant objects based on the X/Y position.
            * NOTE This function returns an array of objects
            *
            * @param  object e The event object
            * @return          An array of pertinent objects. Note the there may be only one object
            */
            nexacro.RGraph.prototype.OR_getObjectsByXY = function (e)
            {
                var canvas  = e.target;
                var ret     = [];
                var objects = this.OR_getObjectsByCanvasID(canvas.id);
                // Retrieve objects "front to back"
                for (var i=(objects.length - 1); i>=0; --i) {
                    var obj = objects[i].getObjectByXY(e);
                    if (obj) {
                        ret.push(obj);
                    }
                }

                return ret;
            };

            /**
            * Retrieves the object with the corresponding UID
            *
            * @param string uid The UID to get the relevant object for
            */
            nexacro.RGraph.prototype.OR_get =
            nexacro.RGraph.prototype.OR_getObjectByUID = function (uid)
            {
                var objects = this.OR.objects.byUID;

                for (var i=0,len=objects.length; i<len; ++i) {
                    if (objects[i] && objects[i][1].uid == uid) {
                        return objects[i][1];
                    }
                }
            };

            /**
            * Brings a chart to the front of the ObjectRegistry by
            * removing it and then readding it at the end and then
            * redrawing the canvas
            *
            * @param object  obj    The object to bring to the front
            * @param boolean redraw Whether to redraw the canvas after the
            *                       object has been moved
            */
            nexacro.RGraph.prototype.OR_bringToFront = function (obj)
            {
                var redraw = typeof arguments[1] === 'undefined' ? true : arguments[1];

                this.remove(obj);
                this.add(obj);

                if (redraw) {
                    this._parent.redrawCanvas(obj.canvas);
                }
            };




            /**
            * Retrieves the objects that are the given type
            *
            * @param  mixed canvas  The canvas to check. It can either be the canvas object itself or just the ID
            * @param  string type   The type to look for
            * @return array         An array of one or more objects
            */
            nexacro.RGraph.prototype.OR_type =
            nexacro.RGraph.prototype.OR_getObjectsByType = function (type)
            {
                var objects = this.OR.objects.byUID;
                var ret     = [];

                for (var i=0,len=objects.length; i<len; ++i) {

                    if (objects[i] && objects[i][1] && objects[i][1].type && objects[i][1].type && objects[i][1].type == type) {
                        ret.push(objects[i][1]);
                    }
                }

                return ret;
            };




            /**
            * Retrieves the FIRST object that matches the given type
            *
            * @param  string type   The type of object to look for
            * @return object        The FIRST object that matches the given type
            */
            nexacro.RGraph.prototype.OR_first =
            nexacro.RGraph.prototype.OR_getFirstObjectByType = function (type)
            {
                var objects = this.OR.objects.byUID;

                for (var i=0,len=objects.length; i<len; ++i) {
                    if (objects[i] && objects[i][1] && objects[i][1].type == type) {
                        return objects[i][1];
                    }
                }

                return null;
            };




            /**
            * This takes centerx, centery, x and y coordinates and returns the
            * appropriate angle relative to the canvas angle system. Remember
            * that the canvas angle system starts at the EAST axis
            *
            * @param  number cx  The centerx coordinate
            * @param  number cy  The centery coordinate
            * @param  number x   The X coordinate (eg the mouseX if coming from a click)
            * @param  number y   The Y coordinate (eg the mouseY if coming from a click)
            * @return number     The relevant angle (measured in in RADIANS)
            */
            nexacro.RGraph.prototype.getAngleByXY = function (cx, cy, x, y)
            {
                var angle = this.ma.atan((y - cy) / (x - cx));
                    angle = this.ma.abs(angle)

                if (x >= cx && y >= cy) {
                    angle += this.TWOPI;

                } else if (x >= cx && y < cy) {
                    angle = (this.HALFPI - angle) + (this.PI + this.HALFPI);

                } else if (x < cx && y < cy) {
                    angle += this.PI;

                } else {
                    angle = this.PI - angle;
                }

                /**
                * Upper and lower limit checking
                */
                if (angle > this.TWOPI) {
                    angle -= this.TWOPI;
                }

                return angle;
            };




            /**
            * This function returns the distance between two points. In effect the
            * radius of an imaginary circle that is centered on x1 and y1. The name
            * of this function is derived from the word "Hypoteneuse", which in
            * trigonmetry is the longest side of a triangle
            *
            * @param number x1 The original X coordinate
            * @param number y1 The original Y coordinate
            * @param number x2 The target X coordinate
            * @param number y2 The target Y  coordinate
            */
            nexacro.RGraph.prototype.getHypLength = function (x1, y1, x2, y2)
            {
                var ret = this.ma.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));

                return ret;
            };




            /**
            * This function gets the end point (X/Y coordinates) of a given radius.
            * You pass it the center X/Y and the radius and this function will return
            * the endpoint X/Y coordinates.
            *
            * @param number cx The center X coord
            * @param number cy The center Y coord
            * @param number r  The lrngth of the radius
            */
            nexacro.RGraph.prototype.getRadiusEndPoint = function (cx, cy, angle, radius)
            {
                var x = cx + (this.ma.cos(angle) * radius);
                var y = cy + (this.ma.sin(angle) * radius);

                return [x, y];
            };




            /**
            * This installs all of the event listeners
            *
            * @param object obj The chart object
            */
            nexacro.RGraph.prototype.installEventListeners =
            nexacro.RGraph.prototype.InstallEventListeners = function (obj)
            {
                var prop = obj.properties;

                /**
                * Don't attempt to install event listeners for older versions of MSIE
                */
                if (this.ISOLD) {
                    return;
                }

                /**
                * If this function exists, then the dynamic file has been included.
                */
                if (this.installCanvasClickListener) {
        			/*
                    this.installWindowMousedownListener(obj);
                    this.installWindowMouseupListener(obj);
                    this.installCanvasMousemoveListener(obj);
                    this.installCanvasMouseupListener(obj);
                    this.installCanvasMousedownListener(obj);
                    this.installCanvasClickListener(obj);
        			*/
                } else if (   this.hasTooltips(obj)
                           || prop['chart.adjustable']
                           || prop['chart.annotatable']
                           || prop['chart.contextmenu']
                           || prop['chart.resizable']
                           || prop['chart.key.interactive']
                           || prop['chart.events.click']
                           || prop['chart.events.mousemove']
                           || typeof obj.onclick === 'function'
                           || typeof obj.onmousemove === 'function'
                          ) {

                   // alert('[RGRAPH] You appear to have used dynamic features but not included the file: nexacro.RGraph.prototyperaph.common.dynamic.js');
                }
            };




            /**
            * Loosly mimicks the PHP function print_r();
            */
            nexacro.RGraph.prototype.pr = function (obj)
            {
                var indent = (arguments[2] ? arguments[2] : '    ');
                var str    = '';

                var counter = typeof arguments[3] == 'number' ? arguments[3] : 0;

                if (counter >= 5) {
                    return '';
                }

                switch (typeof obj) {

                    case 'string':    str += obj + ' (' + (typeof obj) + ', ' + obj.length + ')'; break;
                    case 'number':    str += obj + ' (' + (typeof obj) + ')'; break;
                    case 'boolean':   str += obj + ' (' + (typeof obj) + ')'; break;
                    case 'function':  str += 'function () {}'; break;
                    case 'undefined': str += 'undefined'; break;
                    case 'null':      str += 'null'; break;

                    case 'object':
                        // In case of null
                        if (this.is_null(obj)) {
                            str += indent + 'null\n';
                        } else {
                            str += indent + 'Object {' + '\n'
                            for (j in obj) {
                                str += indent + '    ' + j + ' => ' + this.pr(obj[j], true, indent + '    ', counter + 1) + '\n';
                            }
                            str += indent + '}';
                        }
                        break;


                    default:
                        str += 'Unknown type: ' + typeof obj + '';
                        break;
                }


                /**
                * Finished, now either return if we're in a recursed call, or alert()
                * if we're not.
                */
                if (!arguments[1]) {
                    alert(str);
                }

                return str;
            };




            /**
            * Produces a dashed line
            *
            * @param object co The 2D context
            * @param number x1 The start X coordinate
            * @param number y1 The start Y coordinate
            * @param number x2 The end X coordinate
            * @param number y2 The end Y coordinate
            */
            nexacro.RGraph.prototype.dashedLine =
            nexacro.RGraph.prototype.DashedLine = function(co, x1, y1, x2, y2)
            {
                /**
                * This is the size of the dashes
                */
                var size = 5;

                /**
                * The optional fifth argument can be the size of the dashes
                */
                if (typeof arguments[5] === 'number') {
                    size = arguments[5];
                }

                var dx  = x2 - x1;
                var dy  = y2 - y1;
                var num = this.ma.floor(this.ma.sqrt((dx * dx) + (dy * dy)) / size);

                var xLen = dx / num;
                var yLen = dy / num;

                var count = 0;

                do {
                    (count % 2 == 0 && count > 0) ? co.lineTo(x1, y1) : co.moveTo(x1, y1);

                    x1 += xLen;
                    y1 += yLen;
                } while(count++ <= num);
            };




            /**
            * Makes an AJAX call. It calls the given callback (a function) when ready
            *
            * @param string   url      The URL to retrieve
            * @param function callback A function that is called when the response is ready, there's an example below
            *                          called "myCallback".
            */
            nexacro.RGraph.prototype.AJAX = function (url, callback)
            {
                // Mozilla, Safari, ...
                if (window.XMLHttpRequest) {
                    var httpRequest = new XMLHttpRequest();

                // MSIE
                } else if (window.ActiveXObject) {
                    var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }

                httpRequest.onreadystatechange = function ()
                {
                    if (this.readyState == 4 && this.status == 200) {
                        this.__user_callback__ = callback;

                        this.__user_callback__(this.responseText);
                    }
                }

                httpRequest.open('GET', url, true);
                httpRequest.send();
            };




            /**
            * Makes an AJAX POST request. It calls the given callback (a function) when ready
            *
            * @param string   url      The URL to retrieve
            * @param object   data     The POST data
            * @param function callback A function that is called when the response is ready, there's an example below
            *                          called "myCallback".
            */
            nexacro.RGraph.prototype.AJAX.POST = function (url, data, callback)
            {
                // Used when building the POST string
                var crumbs = [];






                // Mozilla, Safari, ...
                if (window.XMLHttpRequest) {
                    var httpRequest = new XMLHttpRequest();

                // MSIE
                } else if (window.ActiveXObject) {
                    var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }





                httpRequest.onreadystatechange = function ()
                {
                    if (this.readyState == 4 && this.status == 200) {
                        this.__user_callback__ = callback;
                        this.__user_callback__(this.responseText);
                    }
                }

                httpRequest.open('POST', url, true);
                httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");

                for (i in data) {
                    if (typeof i == 'string') {
                        crumbs.push(i + '=' + encodeURIComponent(data[i]));
                    }
                }

                httpRequest.send(crumbs.join('&'));
            };




            /**
            * Uses the above function but calls the call back passing a number as its argument
            *
            * @param url string The URL to fetch
            * @param callback function Your callback function (which is passed the number as an argument)
            */
            nexacro.RGraph.prototype.AJAX.getNumber = function (url, callback)
            {
                this.AJAX(url, function ()
                {
                    var num = parseFloat(this.responseText);

                    callback(num);
                });
            };




            /**
            * Uses the above function but calls the call back passing a string as its argument
            *
            * @param url string The URL to fetch
            * @param callback function Your callback function (which is passed the string as an argument)
            */
            nexacro.RGraph.prototype.AJAX.getString = function (url, callback)
            {
                this.AJAX(url, function ()
                {
                    var str = String(this.responseText);

                    callback(str);
                });
            };




            /**
            * Uses the above function but calls the call back passing JSON (ie a JavaScript object ) as its argument
            *
            * @param url string The URL to fetch
            * @param callback function Your callback function (which is passed the JSON object as an argument)
            */
            nexacro.RGraph.prototype.AJAX.getJSON = function (url, callback)
            {
                this.AJAX(url, function ()
                {
                    var json = eval('(' + this.responseText + ')');

                    callback(json);
                });
            };




            /**
            * Uses the above nexacro.RGraph.prototyperaph.AJAX function but calls the call back passing an array as its argument.
            * Useful if you're retrieving CSV data
            *
            * @param url string The URL to fetch
            * @param callback function Your callback function (which is passed the CSV/array as an argument)
            */
            nexacro.RGraph.prototype.AJAX.getCSV = function (url, callback)
            {
                var seperator = arguments[2] ? arguments[2] : ',';

                this.AJAX(url, function ()
                {
                    var regexp = new RegExp(seperator);
                    var arr = this.responseText.split(regexp);

                    // Convert the strings to numbers
                    for (var i=0,len=arr.length;i<len;++i) {
                        arr[i] = parseFloat(arr[i]);
                    }

                    callback(arr);
                });
            };




            /**
            * Rotates the canvas
            *
            * @param object canvas The canvas to rotate
            * @param  int   x      The X coordinate about which to rotate the canvas
            * @param  int   y      The Y coordinate about which to rotate the canvas
            * @param  int   angle  The angle(in RADIANS) to rotate the canvas by
            */
            nexacro.RGraph.prototype.rotateCanvas =
            nexacro.RGraph.prototype.RotateCanvas = function (ca, x, y, angle)
            {
        		if(this.ISIE8) return;

                var co = ca.getContext('2d');

                co.translate(x, y);
                co.rotate(angle);
                co.translate(0 - x, 0 - y);
            };




            /**
            * Measures text by creating a DIV in the document and adding the relevant text to it.
            * Then checking the .offsetWidth and .offsetHeight.
            *
            * @param  string text   The text to measure
            * @param  bool   bold   Whether the text is bold or not
            * @param  string font   The font to use
            * @param  size   number The size of the text (in pts)
            * @return array         A two element array of the width and height of the text
            */

            nexacro.RGraph.prototype.measureText =
            nexacro.RGraph.prototype.MeasureText = function (text, bold, font, size)
            {
                // Add the sizes to the cache as adding DOM elements is costly and causes slow downs
                if (typeof this.measuretext_cache === 'undefined') {
                    this.measuretext_cache = [];
                }

                var str = text + ':' + bold + ':' + font + ':' + size;
                if (typeof this.measuretext_cache == 'object' && this.measuretext_cache[str]) {
                    return this.measuretext_cache[str];
                }

                if (!this.measuretext_cache['text-div']) {
                    var div = document.createElement('DIV');
                        div.style.position = 'absolute';
                        div.style.top = '-100px';
                        div.style.left = '-100px';
                    document.body.appendChild(div);

                    // Now store the newly created DIV
                    this.measuretext_cache['text-div'] = div;

                } else if (this.measuretext_cache['text-div']) {
                    var div = this.measuretext_cache['text-div'];
                }

                div.innerHTML        = text.replace(/\r\n/g, '<br />');
                div.style.fontFamily = font;
                div.style.fontWeight = bold ? 'bold' : 'normal';
                div.style.fontSize   = (size || 12) + 'pt';

                var size = [div.offsetWidth, div.offsetHeight];

                //document.body.removeChild(div);
                this.measuretext_cache[str] = size;

                return size;
            };




            /* New text function. Accepts two arguments:
            *  o obj - The chart object
            *  o opt - An object/hash/map of properties. This can consist of:
            *          x                The X coordinate (REQUIRED)
            *          y                The Y coordinate (REQUIRED)
            *          text             The text to show (REQUIRED)
            *          font             The font to use
            *          size             The size of the text (in pt)
            *          italic           Whether the text should be italic or not
            *          bold             Whether the text shouldd be bold or not
            *          marker           Whether to show a marker that indicates the X/Y coordinates
            *          valign           The vertical alignment
            *          halign           The horizontal alignment
            *          bounding         Whether to draw a bounding box for the text
            *          boundingStroke   The strokeStyle of the bounding box
            *          boundingFill     The fillStyle of the bounding box
            *          accessible       If false this will cause the text to be
            *                           rendered as native canvas text. DOM text otherwise
            */
            nexacro.RGraph.prototype.text2 =
            nexacro.RGraph.prototype.Text2 = function (obj, opt)
            {
                /**
                * Use DOM nodes to get better quality text. This option is BETA quality
                * code and most likely and will not work if you use 3D or if you use
                * your own transformations.
                */

                /**
                * An nexacro.RGraph.prototyperaph object can be given, or a string or the 2D rendering context
                * The coords are placed on the obj.coordsText variable ONLY if it's an nexacro.RGraph.prototyperaph object. The function
                * still returns the cooords though in all cases.
                */
        		var obj = obj;
        		var co  = obj.context;
        		var ca  = obj.canvas;

                /**
                * Changed the name of boundingFill/boundingStroke - this allows you to still use those names
                */
                if (typeof opt.boundingFill === 'string')   opt['bounding.fill']   = opt.boundingFill;
                if (typeof opt.boundingStroke === 'string') opt['bounding.stroke'] = opt.boundingStroke;

        		/*
                if (obj && obj.properties['chart.text.accessible'] && opt.accessible !== false) {
                   return domtext();
                }
        		*/

                var x              = opt.x,
                    y              = opt.y,
                    originalX      = x,
                    originalY      = y,
                    text           = opt.text,
                    text_multiline = typeof text === 'string' ? text.split(/\r?\n/g) : '',
                    numlines       = text_multiline.length,
                    font           = opt.font ? opt.font : 'Arial',
                    size           = opt.size ? opt.size : 10,
                    size_pixels    = size * 1.5,
                    bold           = opt.bold,
                    italic         = opt.italic,
                    halign         = opt.halign ? opt.halign : 'left',
                    valign         = opt.valign ? opt.valign : 'bottom',
                    tag            = typeof opt.tag == 'string' && opt.tag.length > 0 ? opt.tag : '',
                    marker         = opt.marker,
                    angle          = opt.angle || 0;

                var bounding                = opt.bounding,
                    bounding_stroke         = opt['bounding.stroke'] ? opt['bounding.stroke'] : 'black',
                    bounding_fill           = opt['bounding.fill'] ? opt['bounding.fill'] : [255,255,255,0.7],
                    bounding_shadow         = opt['bounding.shadow'],
                    bounding_shadow_color   = opt['bounding.shadow.color'] || '#cccccc',
                    bounding_shadow_blur    = opt['bounding.shadow.blur'] || 3,
                    bounding_shadow_offsetx = opt['bounding.shadow.offsetx'] || 3,
                    bounding_shadow_offsety = opt['bounding.shadow.offsety'] || 3,
                    bounding_linewidth      = opt['bounding.linewidth'] || 0;

        			if(!bold) bold = false;
        			if(!italic) italic = false;
                /**
                * Initialize the return value to an empty object
                */
                var ret = {};

                //
                // Color
                //
                if (typeof opt.color === 'string') {
                    var orig_fillstyle = co.fillStyle;
                    co.fillStyle = opt.color;
        			this.setElementCommonStyle(co,co.fillStyle,1);
                }

                /**
                * The text arg must be a string or a number
                */
                if (typeof text == 'number') {
                    text = String(text);
                }

                if (typeof text !== 'string') {
                    return;
                }

                /**
                * This facilitates vertical text
                */
                if (angle != 0 && (!this.ISIE8)) {
                    co.save();
                    co.translate(x, y);
                    co.rotate((this.ma.PI / 180) * angle);
                    x = 0;
                    y = 0;
                }
                /**
                * Set the font
                */
        		if(font && font.indexOf(" bold")>=0) {
        			var arr = font.split(" ");
        			font = arr[0];
        			opt.bold = true;
        		}

        		var pt = 'px ';
        		if (this.ISIE8) {
        			size = Math.ceil((size * 72) / 96);
        			//size = -size;
        			pt = 'pt ';
        		}

        		var objFont = new nexacro.Style_font();
        		objFont.set_face(font);
        		objFont.set_size(size);
        		var stype = (italic ? 'italic ' : '') + (bold ? 'bold' : '');
        		if(!stype) stype = "";
        		stype.trim();
        		objFont.set_type(stype);
        		co.font = (italic ? 'italic ' : '') + (bold ? 'bold ' : '') + size + pt + font;
        		co.setElementFont(objFont);
                /**
                * Measure the width/height. This must be done AFTER the font has been set
                */
                var width=0;
                for (var i=0; i<numlines; ++i) {
        			//if(this.ISRUNTIME) {
        				var objFt = nexacro.getTextSize(text_multiline[i], objFont);
        				//var mt = this._measureText(text_multiline[i],objFt);
        				width = Math.max(width, objFt.nx);
        			//} else {
        			//	width = this.ma.max(width, co.measureText(text_multiline[i]).width);
        			//}
                }
                var height = size_pixels * numlines;

                /**
                * Accommodate old MSIE 7/8
                */
                //if (document.all && nexacro.RGraph.prototyperaph.ISOLD) {
                    //y += 2;
                //}

                /**
                * If marker is specified draw a marker at the X/Y coordinates
                */
                if (opt.marker) {
                    var marker_size = 10;
                    var strokestyle = co.strokeStyle;
                    co.beginPath();
                        co.strokeStyle = 'red';
        				this.setElementCommonStyle(co,co.strokeStyle,2);
                        co.moveTo(x, y - marker_size);
                        co.lineTo(x, y + marker_size);
                        co.moveTo(x - marker_size, y);
                        co.lineTo(x + marker_size, y);
                    co.stroke();
                    co.strokeStyle = strokestyle;
        			this.setElementCommonStyle(co,co.strokeStyle,2);
                }

                /**
                * Set the horizontal alignment
                */
                if (halign == 'center') {
                    co.textAlign = 'center';
                    var boundingX = x - 2 - (width / 2);
                } else if (halign == 'right') {
                    co.textAlign = 'right';
                    var boundingX = x - 2 - width;
                } else {
                    co.textAlign = 'left';
                    var boundingX = x - 2;
                }
        		co.setElementTextAlign(co.textAlign);

                /**
                * Set the vertical alignment
                */
                if (valign == 'center') {
                    co.textBaseline = 'middle';
                    // Move the text slightly
                    y -= 1;

                    y -= ((numlines - 1) / 2) * size_pixels;
                    var boundingY = y - (size_pixels / 2) - 2;

                } else if (valign == 'top') {
                    co.textBaseline = 'top';
                    var boundingY = y+4;

                } else {
                    co.textBaseline = 'bottom';
                    // Move the Y coord if multiline text
                    if (numlines > 1) {
                        y -= ((numlines - 1) * size_pixels);
                    }

                    var boundingY = y - size_pixels - 2;
                }
                co.setElementTextBaseline(co.textBaseline);
                var boundingW = width + 4;
                var boundingH = height + 4;
                /**
                * Draw a bounding box if required
                */
                if (bounding) {
                    var pre_bounding_linewidth     = co.lineWidth;
                    var pre_bounding_strokestyle   = co.strokeStyle;
                    var pre_bounding_fillstyle     = co.fillStyle;
                    var pre_bounding_shadowcolor   = co.shadowColor;
                    var pre_bounding_shadowblur    = co.shadowBlur;
                    var pre_bounding_shadowoffsetx = co.shadowOffsetX;
                    var pre_bounding_shadowoffsety = co.shadowOffsetY;

                    co.lineWidth   = bounding_linewidth;
        			co.setElementLineWidth(co.lineWidth);
                    co.strokeStyle = bounding_stroke;
        			this.setElementCommonStyle(co,co.strokeStyle,2);
                    co.fillStyle   = bounding_fill;
        			this.setElementCommonStyle(co,co.fillStyle,1);

                    if (!this.ISIE8 && bounding_shadow) {
                        co.shadowColor   = bounding_shadow_color;
        				this.setElementCommonStyle(co,co.shadowColor,3);
                        co.shadowBlur    = bounding_shadow_blur;
        				co.setElementShadowBlur(co.shadowBlur);
                        co.shadowOffsetX = bounding_shadow_offsetx;
        				co.setElementShadowOffsetX(co.shadowOffsetX);
                        co.shadowOffsetY = bounding_shadow_offsety;
        				co.setElementShadowOffsetY(co.shadowOffsetY);
                    }

                    //obj.context.strokeRect(boundingX, boundingY, width + 6, (size_pixels * numlines) + 4);
                    //obj.context.fillRect(boundingX, boundingY, width + 6, (size_pixels * numlines) + 4);
        			if(tag != "labels.above" || (tag == "labels.above" && opt['aboveborder']) ) {
        				co.strokeRect(boundingX, boundingY, boundingW, boundingH);
        				co.fillRect(boundingX, boundingY, boundingW, boundingH);
        			}

                    // Reset the linewidth,colors and shadow to it's original setting
                    co.lineWidth     = pre_bounding_linewidth;
        			co.setElementLineWidth(co.lineWidth);
                    co.strokeStyle   = pre_bounding_strokestyle;
        			this.setElementCommonStyle(co,co.strokeStyle,2);
                    co.fillStyle     = pre_bounding_fillstyle;
        			this.setElementCommonStyle(co,co.fillStyle,1);
                    co.shadowColor   = pre_bounding_shadowcolor;
        			this.setElementCommonStyle(co,co.shadowColor,3);
                    co.shadowBlur    = pre_bounding_shadowblur;
        			co.setElementShadowBlur(co.shadowBlur);
                    co.shadowOffsetX = pre_bounding_shadowoffsetx;
        			co.setElementShadowOffsetX(co.shadowOffsetX);
                    co.shadowOffsetY = pre_bounding_shadowoffsety;
        			co.setElementShadowOffsetY(co.shadowOffsetY);
                }
                /**
                * Draw the text
                */
                if (numlines > 1) {
                    for (var i=0; i<numlines; ++i) {
                        co.fillText(text_multiline[i], x, y + (size_pixels * i));
                    }
                } else {
                    co.fillText(text, x + 0.5, y + 0.5);
                }
                /**
                * If the text is at 90 degrees restore() the canvas - getting rid of the rotation
                * and the translate that we did
                */

                if (angle != 0 && (!this.ISIE8)) {
                    if (angle == 90) {
                        if (halign == 'left') {
                            if (valign == 'bottom') {boundingX = originalX - 2; boundingY = originalY - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'center') {boundingX = originalX - (height / 2) - 2; boundingY = originalY - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'top')    {boundingX = originalX - height - 2; boundingY = originalY - 2; boundingW = height + 4; boundingH = width + 4;}

                        } else if (halign == 'center') {
                            if (valign == 'bottom') {boundingX = originalX - 2; boundingY = originalY - (width / 2) - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'center') {boundingX = originalX - (height / 2) -  2; boundingY = originalY - (width / 2) - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'top')    {boundingX = originalX - height -  2; boundingY = originalY - (width / 2) - 2; boundingW = height + 4; boundingH = width + 4;}

                        } else if (halign == 'right') {
                            if (valign == 'bottom') {boundingX = originalX - 2; boundingY = originalY - width - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'center') {boundingX = originalX - (height / 2) - 2; boundingY = originalY - width - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'top')    {boundingX = originalX - height - 2; boundingY = originalY - width - 2; boundingW = height + 4; boundingH = width + 4;}
                        }

                    } else if (angle == 180) {

                        if (halign == 'left') {
                            if (valign == 'bottom') {boundingX = originalX - width - 2; boundingY = originalY - 2; boundingW = width + 4; boundingH = height + 4;}
                            if (valign == 'center') {boundingX = originalX - width - 2; boundingY = originalY - (height / 2) - 2; boundingW = width + 4; boundingH = height + 4;}
                            if (valign == 'top')    {boundingX = originalX - width - 2; boundingY = originalY - height - 2; boundingW = width + 4; boundingH = height + 4;}

                        } else if (halign == 'center') {
                            if (valign == 'bottom') {boundingX = originalX - (width / 2) - 2; boundingY = originalY - 2; boundingW = width + 4; boundingH = height + 4;}
                            if (valign == 'center') {boundingX = originalX - (width / 2) - 2; boundingY = originalY - (height / 2) - 2; boundingW = width + 4; boundingH = height + 4;}
                            if (valign == 'top')    {boundingX = originalX - (width / 2) - 2; boundingY = originalY - height - 2; boundingW = width + 4; boundingH = height + 4;}

                        } else if (halign == 'right') {
                            if (valign == 'bottom') {boundingX = originalX - 2; boundingY = originalY - 2; boundingW = width + 4; boundingH = height + 4;}
                            if (valign == 'center') {boundingX = originalX - 2; boundingY = originalY - (height / 2) - 2; boundingW = width + 4; boundingH = height + 4;}
                            if (valign == 'top')    {boundingX = originalX - 2; boundingY = originalY - height - 2; boundingW = width + 4; boundingH = height + 4;}
                        }

                    } else if (angle == 270) {

                        if (halign == 'left') {
                            if (valign == 'bottom') {boundingX = originalX - height - 2; boundingY = originalY - width - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'center') {boundingX = originalX - (height / 2) - 4; boundingY = originalY - width - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'top')    {boundingX = originalX - 2; boundingY = originalY - width - 2; boundingW = height + 4; boundingH = width + 4;}

                        } else if (halign == 'center') {
                            if (valign == 'bottom') {boundingX = originalX - height - 2; boundingY = originalY - (width/2) - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'center') {boundingX = originalX - (height/2) - 4; boundingY = originalY - (width/2) - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'top')    {boundingX = originalX - 2; boundingY = originalY - (width/2) - 2; boundingW = height + 4; boundingH = width + 4;}

                        } else if (halign == 'right') {
                            if (valign == 'bottom') {boundingX = originalX - height - 2; boundingY = originalY - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'center') {boundingX = originalX - (height/2) - 2; boundingY = originalY - 2; boundingW = height + 4; boundingH = width + 4;}
                            if (valign == 'top')    {boundingX = originalX - 2; boundingY = originalY - 2; boundingW = height + 4; boundingH = width + 4;}
                        }
                    }
        			co.restore();
                }


                /**
                * Reset the text alignment so that text rendered after this text function is not affected
                */
                co.textBaseline = 'alphabetic';
        		co.setElementTextBaseline(co.textBaseline);
                co.textAlign    = 'left';
        		co.setElementTextAlign(co.textAlign);

                /**
                * Fill the ret variable with details of the text
                */
                ret.x      = boundingX;
                ret.y      = boundingY;
                ret.width  = boundingW;
                ret.height = boundingH
                ret.object = obj;
                ret.text   = text;
                ret.tag    = tag;

                /**
                * Save and then return the details of the text (but oly
                * if it's an nexacro.RGraph.prototyperaph object that was given)
                */
                if (obj && obj.isRGraph && obj.coordsText) {
                    obj.coordsText.push(ret);
                }

                //
                // Restore the original fillstyle
                //
                if (typeof orig_fillstyle === 'string') {
                    co.fillStyle = orig_fillstyle;
        			this.setElementCommonStyle(co,co.fillStyle,1);
                }

                return ret;
            };




            /**
            * Takes a sequential index abd returns the group/index variation of it. Eg if you have a
            * sequential index from a grouped bar chart this function can be used to convert that into
            * an appropriate group/index combination
            *
            * @param nindex number The sequential index
            * @param data   array  The original data (which is grouped)
            * @return              The group/index information
            */
            nexacro.RGraph.prototype.sequentialIndexToGrouped = function (index, data)
            {
                var group         = 0;
                var grouped_index = 0;

                while (--index >= 0) {

                    if (this.is_null(data[group])) {
                        group++;
                        grouped_index = 0;
                        continue;
                    }

                    // Allow for numbers as well as arrays in the dataset
                    if (typeof data[group] == 'number') {
                        group++
                        grouped_index = 0;
                        continue;
                    }


                    grouped_index++;

                    if (grouped_index >= data[group].length) {
                        group++;
                        grouped_index = 0;
                    }
                }

                return [group, grouped_index];
            };




            /**
            * This function highlights a rectangle
            *
            * @param object obj    The chart object
            * @param number shape  The coordinates of the rect to highlight
            */
            nexacro.RGraph.prototype.Highlight_Rect = function (obj, shape)
            {
                var ca   = obj.canvas;
                var co   = obj.context;
                var prop = obj.properties;
                if (prop['chart.tooltips.highlight']) {
                    // Safari seems to need this
                    co.lineWidth = 1;
        			co.setElementLineWidth(co.lineWidth);

                    /**
                    * Draw a rectangle on the canvas to highlight the appropriate area
                    */
                    co.beginPath();

                        co.strokeStyle = prop['chart.highlight.stroke'];
        				this.setElementCommonStyle(co,co.strokeStyle,2);
                        co.fillStyle   = prop['chart.highlight.fill'];
        				this.setElementCommonStyle(co,co.fillStyle,1);
                        co.rect(shape['x'],shape['y'],shape['width'],shape['height']);
                        //co.fillRect(shape['x'],shape['y'],shape['width'],shape['height']);
                    co.stroke();
                    co.fill();
                }
            };




            /**
            * This function highlights a point
            *
            * @param object obj    The chart object
            * @param number shape  The coordinates of the rect to highlight
            */
            nexacro.RGraph.prototype.Highlight_Point = function (obj, shape)
            {
                var prop = obj.properties;
                var ca   = obj.canvas;
        		var co   = obj.context;

                if (prop['chart.tooltips.highlight']) {

                    /**
                    * Draw a rectangle on the canvas to highlight the appropriate area
                    */
                    co.beginPath();
                        co.strokeStyle = prop['chart.highlight.stroke'];
        				this.setElementCommonStyle(co,co.strokeStyle,2);
                        co.fillStyle   = prop['chart.highlight.fill'];
        				this.setElementCommonStyle(co,co.fillStyle,1);
                        var radius   = prop['chart.highlight.point.radius'] || 2;
                        co.arc(shape['x'],shape['y'],radius, 0, this.TWOPI, 0);
                    co.stroke();
                    co.fill();
                }
            };




            /**
            * This is the same as Date.parse - though a little more flexible.
            *
            * @param string str The date string to parse
            * @return Returns the same thing as Date.parse
            */
            nexacro.RGraph.prototype.parseDate = function (str)
            {
                str = this.trim(str);
                // Allow for: now (just the word "now")
                if (str === 'now') {
                    str = (new Date()).toString();
                }


                // Allow for: 22-11-2013
                // Allow for: 22/11/2013
                // Allow for: 22-11-2013 12:09:09
                // Allow for: 22/11/2013 12:09:09
                if (str.match(/^(\d\d)(?:-|\/)(\d\d)(?:-|\/)(\d\d\d\d)(.*)$/)) {
                    str = '{1}/{2}/{3}{4}'.format(
                        RegExp.$3,
                        RegExp.$2,
                        RegExp.$1,
                        RegExp.$4
                    );
                }

                // Allow for: 2013-11-22 12:12:12 or  2013/11/22 12:12:12
                if (str.match(/^(\d\d\d\d)(-|\/)(\d\d)(-|\/)(\d\d)( |T)(\d\d):(\d\d):(\d\d)$/)) {
                    str = RegExp.$1 + '-' + RegExp.$3 + '-' + RegExp.$5 + 'T' + RegExp.$7 + ':' + RegExp.$8 + ':' + RegExp.$9;
                }

                // Allow for: 2013-11-22
                if (str.match(/^\d\d\d\d-\d\d-\d\d$/)) {
                    str = str.replace(/-/g, '/');
                }


                // Allow for: 12:09:44 (time only using todays date)
                if (str.match(/^\d\d:\d\d:\d\d$/)) {

                    var dateObj  = new Date();
                    var date     = dateObj.getDate();
                    var month    = dateObj.getMonth() + 1;
                    var year     = dateObj.getFullYear();

                    // Pad the date/month with a zero if it's not two characters
                    if (String(month).length === 1) month = '0' + month;
                    if (String(date).length === 1) date = '0' + date;

                    str = (year + '/' + month + '/' + date) + ' ' + str;
                }

                return Date.parse(str);
            };




            /**
            * Reset all of the color values to their original values
            *
            * @param object
            */
            nexacro.RGraph.prototype.resetColorsToOriginalValues = function (obj)
            {
                if (obj.original_colors) {
                    // Reset the colors to their original values
                    for (var j in obj.original_colors) {
                        if (typeof j === 'string' && j.substr(0,6) === 'chart.') {
                            obj.properties[j] = this.arrayClone(obj.original_colors[j]);
                        }
                    }
                }



                /**
                * If the function is present on the object to reset specific colors - use that
                */
                if (typeof obj.resetColorsToOriginalValues === 'function') {
                    obj.resetColorsToOriginalValues();
                }



                // Reset the colorsParsed flag so that they're parsed for gradients again
                obj.colorsParsed = false;
            };




            /**
            * Creates a Linear gradient
            *
            * @param object obj The chart object
            * @param number x1 The start X coordinate
            * @param number x2 The end X coordinate
            * @param number y1 The start Y coordinate
            * @param number y2 The end Y coordinate
            * @param string color1 The start color
            * @param string color2 The end color
            */
            nexacro.RGraph.prototype.linearGradient =
            nexacro.RGraph.prototype.LinearGradient = function (obj, x1, y1, x2, y2, color1, color2)
            {
        		trace("LinearGradient=================>>>>>>");
            };

            /**
            * Creates a Radial gradient
            *
            * @param object obj The chart object
            * @param number x1 The start X coordinate
            * @param number x2 The end X coordinate
            * @param number y1 The start Y coordinate
            * @param number y2 The end Y coordinate
            * @param string color1 The start color
            * @param string color2 The end color
            */
            nexacro.RGraph.prototype.radialGradient =
            nexacro.RGraph.prototype.RadialGradient = function(obj, x1, y1, r1, x2, y2, r2, color1, color2)
            {
        		if(this.ISRUNTIME) return;
                var gradient  = obj.context.createRadialGradient(x1, y1, r1, x2, y2, r2);
                var numColors = arguments.length-7;

                for(var i=7; i<arguments.length; ++i) {

                    var color = arguments[i];
                    var stop  = (i-7) / (numColors-1);

                    gradient.addColorStop(stop, color);
                }

                return gradient;
            };

            /**
            * Adds an event listener to nexacro.RGraph.prototyperaphs internal array so that nexacro.RGraph.prototyperaph can track them.
            * This DOESN'T add the event listener to the canvas/window.
            *
            * 5/1/14 TODO Used in the tooltips file, but is it necessary any more?
            */
            nexacro.RGraph.prototype.addEventListener =
            nexacro.RGraph.prototype.AddEventListener = function (id, e, func)
            {
                var type = arguments[3] ? arguments[3] : 'unknown';

                this.Registry_get('chart.event.handlers').push([id,e,func,type]);
            };

            /**
            * Clears event listeners that have been installed by nexacro.RGraph.prototyperaph
            *
            * @param string id The ID of the canvas to clear event listeners for - or 'window' to clear
            *                  the event listeners attached to the window
            */
            nexacro.RGraph.prototype.clearEventListeners =
            nexacro.RGraph.prototype.ClearEventListeners = function(id)
            {
        		/*
                if (id && id == 'window') {

                    window.removeEventListener('mousedown', window.__rgraph_mousedown_event_listener_installed__, false);
                    window.removeEventListener('mouseup', window.__rgraph_mouseup_event_listener_installed__, false);

                } else {

                    var canvas = document.getElementById(id);

                    canvas.removeEventListener('mouseup', canvas.__rgraph_mouseup_event_listener_installed__, false);
                    canvas.removeEventListener('mousemove', canvas.__rgraph_mousemove_event_listener_installed__, false);
                    canvas.removeEventListener('mousedown', canvas.__rgraph_mousedown_event_listener_installed__, false);
                    canvas.removeEventListener('click', canvas.__rgraph_click_event_listener_installed__, false);
                }
        		*/
            };


            /**
            * Hides the annotating palette. It's here because it can be called
            * from code other than the annotating code.
            */
            nexacro.RGraph.prototype.hidePalette =
            nexacro.RGraph.prototype.HidePalette = function ()
            {
                var div = this.Registry_get('palette');

                if(typeof div == 'object' && div) {

                    div.style.visibility = 'hidden';
                    div.style.display = 'none';

                    this.Registry_set('palette', null);
                }
            };




            /**
            * Generates a random number between the minimum and maximum
            *
            * @param number min The minimum value
            * @param number max The maximum value
            * @param number     OPTIONAL Number of decimal places
            */
            nexacro.RGraph.prototype.random = function (min, max)
            {
                var dp = arguments[2] ? arguments[2] : 0;
                var r  = this.ma.random();

                return Number((((max - min) * r) + min).toFixed(dp));
            };




            /**
            *
            */
            nexacro.RGraph.prototype.arrayRand =
            nexacro.RGraph.prototype.arrayRandom =
            nexacro.RGraph.prototype.random.array = function (num, min, max)
            {
                for(var i=0,arr=[]; i<num; i+=1) {
                    arr.push(this.random(min,max, arguments[3]));
                }

                return arr;
            };




            /**
            * Turns off shadow by setting blur to zero, the offsets to zero and the color to transparent black.
            *
            * @param object obj The chart object
            */
            nexacro.RGraph.prototype.noShadow =
            nexacro.RGraph.prototype.NoShadow = function (obj)
            {
                var co = obj.context;

                co.shadowColor   = [0,0,0,0.01];
        		this.setElementCommonStyle(co,co.shadowColor,3);
                co.shadowBlur    = 0;
        		co.setElementShadowBlur(co.shadowBlur);
                co.shadowOffsetX = 0;
                co.shadowOffsetY = 0;
        		co.setElementShadowOffsetX(co.shadowOffsetX);
        		co.setElementShadowOffsetY(co.shadowOffsetY);
            };




            /**
            * Sets the various shadow properties
            *
            * @param object obj     The chart object
            * @param string color   The color of the shadow
            * @param number offsetx The offsetX value for the shadow
            * @param number offsety The offsetY value for the shadow
            * @param number blur    The blurring value for the shadow
            */
            nexacro.RGraph.prototype.setShadow =
            nexacro.RGraph.prototype.SetShadow = function (obj, color, offsetx, offsety, blur)
            {
                var co = obj.context;

                co.shadowColor   = color;
        		this.setElementCommonStyle(co,co.shadowColor,3);
                co.shadowOffsetX = offsetx;
                co.shadowOffsetY = offsety;
        		co.setElementShadowOffsetX(co.shadowOffsetX);
        		co.setElementShadowOffsetY(co.shadowOffsetY);
                co.shadowBlur    = blur;
        		co.setElementShadowBlur(co.shadowBlur);

            };




            /**
            * Sets an object in the nexacro.RGraph.prototyperaph registry
            *
            * @param string name The name of the value to set
            */
            nexacro.RGraph.prototype.Registry_set =
            nexacro.RGraph.prototype.Registry_Set = function (name, value)
            {
                // Convert uppercase letters to dot+lower case letter
                name = name.replace(/([A-Z])/g, function (str)
                {
                    return '.' + String(RegExp.$1).toLowerCase();
                });

                // Ensure there is the chart. prefix
                if (name.substr(0,6) !== 'chart.') {
                    name = 'chart.' + name;
                }

                this.Registry.store[name] = value;

                return value;
            };




            /**
            * Gets an object from the nexacro.RGraph.prototyperaph registry
            *
            * @param string name The name of the value to fetch
            */
            nexacro.RGraph.prototype.Registry_get =
            nexacro.RGraph.prototype.Registry_Get = function (name)
            {
                // Convert uppercase letters to dot+lower case letter
                name = name.replace(/([A-Z])/g, function (str)
                {
                    return '.' + String(RegExp.$1).toLowerCase();
                });

                // Ensure there is the chart. prefix
                if (name.substr(0,6) !== 'chart.') {
                    name = 'chart.' + name;
                }


                return this.Registry.store[name];
            };




            /**
            * Converts the given number of degrees to radians. Angles in canvas are measured in radians
            *
            * @param number deg The value to convert
            */
            nexacro.RGraph.prototype.degrees2Radians = function (deg)
            {
                return deg * (this.PI / 180);
            };




            /**
            * Generates logs for... log charts
            *
            * @param number n    The number to generate the log for
            * @param number base The base to use
            */
            nexacro.RGraph.prototype.log = function (n,base)
            {
                return this.ma.log(n) / (base ? this.ma.log(base) : 1);
            };




            /**
            * Determines if the given object is an array or not
            *
            * @param mixed obj The variable to test
            */
            nexacro.RGraph.prototype.isArray =
            nexacro.RGraph.prototype.is_array = function (obj)
            {
                if (obj && obj.constructor) {
                    var pos = obj.constructor.toString().indexOf('Array');
                } else {
                    return false;
                }

                return obj != null &&
                       typeof pos === 'number' &&
                       pos > 0 &&
                       pos < 20;
            };




            /**
            * Removes white-space from the start aqnd end of a string
            *
            * @param string str The string to trim
            */
            nexacro.RGraph.prototype.trim = function (str)
            {
                return this.ltrim(this.rtrim(str));
            };




            /**
            * Trims the white-space from the start of a string
            *
            * @param string str The string to trim
            */
            nexacro.RGraph.prototype.ltrim = function (str)
            {
                return str.replace(/^(\s|\0)+/, '');
            };




            /**
            * Trims the white-space off of the end of a string
            *
            * @param string str The string to trim
            */
            nexacro.RGraph.prototype.rtrim = function (str)
            {
        		if(!str) str = "";
        		str = String(str);
                return str.replace(/(\s|\0)+$/, '');
            };



            /**
            * Returns true/false as to whether the given variable is null or not
            *
            * @param mixed arg The argument to check
            */
            nexacro.RGraph.prototype.isNull =
            nexacro.RGraph.prototype.is_null = function (arg)
            {
                // must BE DOUBLE EQUALS - NOT TRIPLE
                if (arg == null || typeof arg === 'object' && !arg) {
                    return true;
                }

                return false;
            };




            /**
            * This function facilitates a very limited way of making your charts
            * whilst letting the rest of page continue - using  the setTimeout function
            *
            * @param function func The function to run that creates the chart
            */
            nexacro.RGraph.prototype.async =
            nexacro.RGraph.prototype.Async = function (func)
            {
                return setTimeout(func, arguments[1] ? arguments[1] : 1);
            };




            /**
            * Resets (more than just clears) the canvas and clears any pertinent objects
            * from the ObjectRegistry
            *
            * @param object ca The canvas object (as returned by document.getElementById() ).
            */
            nexacro.RGraph.prototype.reset =
            nexacro.RGraph.prototype.Reset = function (ca)
            {
                ca.width = ca.width;

                this.OR_clear(ca);

                ca.__rgraph_aa_translated__ = false;

        		/*
                if (this.text2.domNodeCache && this.text2.domNodeCache.reset) {
                    this.text2.domNodeCache.reset(ca);
                }

                // Create the node and dimension caches if they don't already exist
                if (!this.text2.domNodeCache)          { this.text2.domNodeCache          = []; }
                if (!this.text2.domNodeDimensionCache) { this.text2.domNodeDimensionCache = []; }

                // Create/reset the specific canvas arrays in the caches
                this.text2.domNodeCache[ca.id]          = [];
                this.text2.domNodeDimensionCache[ca.id] = [];
        		*/
            };




            /**
            * NOT USED ANY MORE
            */
            nexacro.RGraph.prototype.att = function (ca){}



            /**
            * This function is due to be removed.
            *
            * @param string id The ID of what can be either the canvas tag or a DIV tag
            */
            nexacro.RGraph.prototype.getCanvasTag = function (id)
            {
                id = typeof id === 'object' ? id.id : id;
                var canvas = doc.getElementById(id);

                return [id, canvas];
            };




            /**
            * A wrapper function that encapsulate requestAnimationFrame
            *
            * @param function func The animation function
            */
        	nexacro.RGraph.prototype.Effects_updateCanvas =
            nexacro.RGraph.prototype.Effects_UpdateCanvas = function (func)
            {
        		if(this.ISRUNTIME) {
        			if(this.context && func) {
        				nexacro.OnceCallbackTimer.callonce(this.context, func, 16.666);
        			}
        		} else {
        			var win = window;
        			win.requestAnimationFrame =    win.requestAnimationFrame
        										|| win.webkitRequestAnimationFrame
        										|| win.msRequestAnimationFrame
        										|| win.mozRequestAnimationFrame
        										|| (function (func){setTimeout(func, 16.666);});

        			win.requestAnimationFrame(func);
        		}
            };

            /**
            * This function returns an easing multiplier for effects so they eas out towards the
            * end of the effect.
            *
            * @param number frames The total number of frames
            * @param number frame  The frame number
            */
            nexacro.RGraph.prototype.Effects_getEasingMultiplier = function (frames, frame)
            {
                return this.ma.pow(this.ma.sin((frame / frames) * this.HALFPI), 3);
            };




            /**
            * This function converts an array of strings to an array of numbers. Its used by the meter/gauge
            * style charts so that if you want you can pass in a string. It supports various formats:
            *
            * '45.2'
            * '-45.2'
            * ['45.2']
            * ['-45.2']
            * '45.2,45.2,45.2' // A CSV style string
            *
            * @param number frames The string or array to parse
            */
            nexacro.RGraph.prototype.stringsToNumbers = function (str)
            {
                // An optional seperator to use intead of a comma
                var sep = arguments[1] || ',';


                // If it's already a number just return it
                if (typeof str === 'number') {
                    return str;
                }

                if (typeof str === 'string') {
                    if (str.indexOf(sep) != -1) {
                        str = str.split(sep);
                    } else {
                        str = parseFloat(str);
                    }
                }

        		if (str instanceof nexacro.Decimal) {
        			return str.valueOf();
        		}

                if (typeof str === 'object') {
                    for (var i=0,len=str.length; i<len; i+=1) {
        				if (str[i] instanceof nexacro.Decimal) {
        					str[i] = parseFloat(str[i].valueOf());
        				} else {
        					str[i] = parseFloat(str[i]);
        				}
                    }
                }

                return str;
            };

            /**
            * The function that runs through the supplied configuration and
            * converts it to the nexacro.RGraph.prototyperaph stylee.
            *
            * @param object conf The config
            * @param object      The settings for the object
            */
            nexacro.RGraph.prototype.parseObjectStyleConfig = function (obj, config)
            {
                /**
                * The recursion function
                */
                var recurse = function (obj, config, name, settings)
                {
                    var i;

                    for (key in config) {

                        // Allow for functions in the configuration. Run them immediately
                        if (key.match(/^exec[0-9]*$/)) {
                            (config[key])(obj, settings);
                            continue;
                        }

                        var isObject = false; // Default value
                        var isArray  = false; // Default value
                        var value    = config[key];

                        // Change caps to dots. Eg textSize => text.size
                        while(key.match(/([A-Z])/)) {
                            key = key.replace(/([A-Z])/, '.' + RegExp.$1.toLowerCase());
                        }

                        if (!(value == null || typeof value === 'object' && !value) && value.constructor) {
                            isObject = value.constructor.toString().indexOf('Object') > 0;
                            isArray  = value.constructor.toString().indexOf('Array') > 0;
                        }

                        if (isObject && !isArray) {
                            recurse(obj, config[key], name + '.' + key, settings);

                        } else if (key === 'self') {
                            settings[name] = value;

                        } else {
                            settings[name + '.' + key] = value;
                        }
                    }

                    return settings;
                };

                /**
                * Go through the settings that we've been given
                */
                var settings = recurse(obj, config, 'chart', {});

                /**
                * Go through the settings and set them on the object
                */
                for (key in settings) {
                    if (typeof key === 'string') {
                        obj.set(key, settings[key]);
                    }
                }

            };

        	nexacro.RGraph.prototype.convertDataset = function (data) {
        		if(data && data.length>0) {
        			for(var i=0;i<data.length;i++) {
        				if (data[i] instanceof nexacro.Decimal) {
        					data[i] = data[i].valueOf();
        				} else if (Array.isArray(data[i])) {
        					var dt1 = data[i];
        					for(var j=0;j<dt1.length;j++) {
        						if (dt1[j] instanceof nexacro.Decimal) {
        							dt1[j] = dt1[j].valueOf();
        						} else if (Array.isArray(dt1[j])) {
        							var dt2 = dt1[j];
        							for(var k=0;k<dt2.length;k++) {
        								if (dt2[k] instanceof nexacro.Decimal) {
        									dt2[k] = dt2[k].valueOf();
        								} else if (Array.isArray(dt2[k])) {
        									var dt3 = dt2[k];
        									for(var l=0;l<dt3.length;l++) {
        										if (dt3[l] instanceof nexacro.Decimal) {
        											dt3[l] = dt3[l].valueOf();
        										}
        									}
        								}
        							}

        						}
        					}

        				}
        			}
        		}
        		return data;
        	};

            /**
            * This function is a short-cut for the canvas path syntax (which can be rather
            * verbose). You can read a description of it (which details all of the
            * various options) on the nexacro.RGraph.prototyperaph blog (www.rgraph.net/blog). The function is
            * added to the CanvasRenderingContext2D object so it becomes a context function.
            *
            * So you can use it like these examples show:
            *
            * 1. nexacro.RGraph.prototype.path2(context, 'b r 0 0 50 50 f red');
            * 2. nexacro.RGraph.prototype.path2(context, 'b a 50 50 50 0 3.14 false f red');
            * 3. nexacro.RGraph.prototype.path2(context, 'b m 5 100 bc 5 0 100 0 100 100 s red');
            * 4. nexacro.RGraph.prototype.path2(context, 'b m 5 100 at 50 0 95 100 50 s red');
            * 5. nexacro.RGraph.prototype.path2(context, 'sa b r 0 0 50 50 c b r 5 5 590 240 f red rs');
            * 6. nexacro.RGraph.prototype.path2(context, 'ld [2,6] ldo 4 b r 5 5 590 240 f red');
            * 7. nexacro.RGraph.prototype.path2(context, 'ga 0.25 b r 5 5 590 240 f red');
            *
            * @param   array p  The path details
            */
        	nexacro.RGraph.prototype.pa2 =
            nexacro.RGraph.prototype.path2 = function (co, p)
            {
                // Save this functions arguments
                var args = arguments;


                // If the path was a string - split it then collapse quoted bits together
                if (typeof p === 'string') {
                    p = splitstring(p);
                }
                // Store the last path on the nexacro.RGraph.prototyperaph object
                //this.path2.last = this.arrayClone(p);

        		if(this.ISRUNTIME == undefined) return;
                // Go through the path information.
                for (var i=0,len=p.length; i<len; i+=1) {
                    switch (p[i]) {
                        case 'b':co.beginPath();break;
                        case 'c':co.closePath();break;
                        case 'm':co.moveTo(parseFloat(p[i+1]),parseFloat(p[i+2]));i+=2;break;
                        case 'l':co.lineTo(parseFloat(p[i+1]),parseFloat(p[i+2]));i+=2;break;
                        case 's':if(p[i+1])co.strokeStyle=p[i+1];this.setElementCommonStyle(co,co.strokeStyle,2);co.stroke();i++;break;
                        case 'f':if(p[i+1]){co.fillStyle=p[i+1];this.setElementCommonStyle(co,co.fillStyle,1);}co.fill();i++;break;
                        case 'qc':co.quadraticCurveTo(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]));i+=4;break;
                        case 'bc':co.bezierCurveTo(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]),parseFloat(p[i+5]),parseFloat(p[i+6]));i+=6;break;
                        case 'r':co.rect(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]));i+=4;break;
                        case 'a':co.arc(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]),parseFloat(p[i+5]),p[i+6]==='true'||p[i+6]===true||p[i+6]===1||p[i+6]==='1'?true:false);i+=6;break;
                        case 'at':co.arcTo(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]),parseFloat(p[i+5]));i+=5;break;
                        case 'lw':co.lineWidth=parseFloat(p[i+1]);co.setElementLineWidth(co.lineWidth);i++;break;
                        case 'e':co.ellipse(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]),parseFloat(p[i+5]),parseFloat(p[i+6]),parseFloat(p[i+7]),p[i+8] === 'true' ? true : false);i+=8;break;
                        case 'lj':co.lineJoin=p[i+1];co.setElementLineJoin(co.lineJoin);i++;break;
                        case 'lc':co.lineCap=p[i+1];co.setElementLineCap(co.lineCap);i++;break;
                        case 'sc':co.shadowColor=p[i+1];this.setElementCommonStyle(co,co.shadowColor,3);i++;break;
                        case 'sb':co.shadowBlur=parseFloat(p[i+1]);co.setElementShadowBlur(co.shadowBlur);i++;break;
                        case 'sx':co.shadowOffsetX=parseFloat(p[i+1]);co.setElementShadowOffsetX(co.shadowOffsetX);i++;break;
                        case 'sy':co.shadowOffsetY=parseFloat(p[i+1]);co.setElementShadowOffsetY(co.shadowOffsetY);i++;break;
                        case 'fs':co.fillStyle=p[i+1];this.setElementCommonStyle(co,co.fillStyle,1);i++;break;
                        case 'ss':co.strokeStyle=p[i+1];this.setElementCommonStyle(co,co.strokeStyle,2);i++;break;
                        case 'fr':co.fillRect(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]));i+=4;break;
                        case 'sr':co.strokeRect(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]));i+=4;break;
                        case 'cl':co.clip();break;
                        case 'sa':co.save();break;
                        case 'rs':co.restore();break;
                        case 'tr':co.translate(parseFloat(p[i+1]),parseFloat(p[i+2]));i+=2;break;
                        case 'sl':co.scale(parseFloat(p[i+1]), parseFloat(p[i+2]));i+=2;break;
                        case 'ro':
        						if(!this.ISIE8) {co.rotate(parseFloat(p[i+1]));} i++;break;
                        case 'tf':co.transform(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]),parseFloat(p[i+5]),parseFloat(p[i+6]));i+=6;break;
                        case 'stf':co.setTransform(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]),parseFloat(p[i+5]),parseFloat(p[i+6]));i+=6;break;
                        case 'cr':co.clearRect(parseFloat(p[i+1]),parseFloat(p[i+2]),parseFloat(p[i+3]),parseFloat(p[i+4]));i+=4;break;
                        case 'ld':var parts = p[i+1];co.setLineDash(parts);i+=1;break;
                        case 'ldo':co.lineDashOffset=p[i+1];i++;break;
                        case 'fo':co.font=p[i+1];i++;break;
                        case 'ft':co.fillText(p[i+1], parseFloat(p[i+2]), parseFloat(p[i+3]));i+=3;break;
                        case 'st':co.strokeText(p[i+1], parseFloat(p[i+2]), parseFloat(p[i+3]));i+=3;break;
                        case 'ta':co.textAlign=p[i+1];co.setElementTextAlign(co.textAlign);i++;break;
                        case 'tbl':co.textBaseline=p[i+1];co.setElementTextBaseline(co.textBaseline);i++;break;
                        case 'ga':co.globalAlpha=parseFloat(p[i+1]);co.setElementGlobalAlpha(co.globalAlpha);i++;break;
                        case 'gco':co.globalCompositeOperation=p[i+1];i++;break;
                        case 'fu':(p[i+1])(co.canvas.__object__);i++;break;

                        // Empty option - ignore it
                        case '':break;

                        // Unknown option
                        default: alert('[ERROR] Unknown option: ' + p[i]);
                    }
                }

                function splitstring (p)
                {
                    var ret = [], buffer = '', inquote = false, quote = '', substitutionIndex = 2;

                    for (var i=0; i<p.length; i+=1) {

                        var chr = p[i],
                            isWS = chr.match(/ /);

                        if (isWS) {
                            if (!inquote) {

                                // Get rid of any enclosing quotes
                                if (buffer[0] === '"' || buffer[0] === "'") {
                                    buffer = buffer.substr(1, buffer.length - 2);
                                }
        						if(!buffer) buffer = "";
                                // String substitution
                                if (buffer.trim() === '%' && typeof args[substitutionIndex] !== 'undefined') {
                                    buffer = args[substitutionIndex++];
                                }
                                ret.push(buffer);
                                buffer = '';
                            } else {
                                buffer += chr;
                            }
                        } else {
                            if (chr === "'" || chr === '"') {
                                inquote = !inquote;
                            }

                            buffer += chr;
                        }
                    }
        			if(!buffer) buffer = "";
                    // Do the last bit (including substitution)
                    if (buffer.trim() === '%' && args[substitutionIndex]) {
                        buffer = args[substitutionIndex++];
                    }
                    ret.push(buffer);

                    return ret;
                }
            };

            //
            // Wraps the canvas in a DIV to allow DOM text to be used
            //
            // NOT USED ANY MORE
            //
            nexacro.RGraph.prototype.wrap = function () {};
        	nexacro.RGraph.prototype.hexstr =	function (number)
        	{
        			number = nexacro.toNumber(number);
        			var chars = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
        			var low = number & 0xf;
        			var high = (number >> 4) & 0xf;
        			return "" + chars[high] + chars[low];
        	};
        	nexacro.RGraph.prototype.hex2rgb = function (hex)
        	{
        		if(!hex || hex.length == 0) return;
        		if(typeof hex == "object") {
        			r = hex[0];
        			g = hex[1];
        			b = hex[2];
        			if(hex[3]) return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        			else return "rgb(" + r + ", " + g + ", " + b + ")";
        		} else {
        			if(hex.indexOf("rgb")>=0) return hex;
        			var r,g,b,a;
        			if(hex.substr(0,1) == "#") {
        				r = parseInt(hex.slice(1, 3), 16),
        				g = parseInt(hex.slice(3, 5), 16),
        				b = parseInt(hex.slice(5, 7), 16);

        				if(String(hex).length > 7) {
        					a = (parseInt(hex.slice(7, 9), 16) / 255).toString();
        					return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        				} else {
        					return "rgb(" + r + ", " + g + ", " + b + ")";
        				}
        			} else {
        				return hex;
        			}
        		}
        	};
        	nexacro.RGraph.prototype.rgba2hex = function (acolor)
        	{
        		if(nexacro.Browser == "Runtime")
        		{
        			var str = this.hexstr(acolor[0]);
        			str += this.hexstr(acolor[1]);
        			str += this.hexstr(acolor[2]);
        			if(acolor[3]) str += this.hexstr(acolor[3]*255.0);
        			return "#" + str;
        		} else {
        			var str = "rgba(" + acolor[0] + "," + acolor[1] + "," + acolor[2] + "," + acolor[3] + ")";
        			return str;
        		}
        	};
        	nexacro.RGraph.prototype.setElementCommonStyle = function (co,acolor,gb)
        	{
        		if(!acolor) return;
        		var str = "";
        		var c = null;
        		var a = 1;
        		if (typeof acolor != "object")
        		{
        			c = new nexacro.Style_color(acolor);
        			if (acolor.substring(0, 1) == '#')
        			{
        				if(acolor.length == 9) {
        					var aa = acolor.substring(7);
        					a = (parseInt(aa, 16) / 255).toString();
        				}
        			} else {
        				if(acolor.length == 8) {
        					var aa = acolor.substring(6);
        					a = (parseInt(aa, 16) / 255).toString();
        				}
        			}
        		} else {
        			if(acolor.length == undefined &&  acolor.value == undefined) // gradient
        			{
        				if(!this.ISRUNTIME) {
        					var dtx = co._handle._draw_ctx;
        					if(gb == 1) dtx.fillStyle = acolor;
        					else if(gb == 2) dtx.strokeStyle = acolor;
        					else if(gb == 3) dtx.shadowColor = acolor;

        					return;
        				}
        			}

        			if(acolor.length == 1) // gradient
        			{
        				acolor = acolor.toString();
        				c = new nexacro.Style_color(acolor);
        				if(!co._handle) return;
        				var dtx = co._handle._draw_ctx;
        				if(gb == 1) dtx.fillStyle = acolor;
        				else if(gb == 2) dtx.strokeStyle = acolor;
        				else if(gb == 3) dtx.shadowColor = acolor;
        			} else {
        				if(acolor[3] != 0 && !acolor[3]) acolor[3] = 1;
        				str = "#" + this.hexstr(acolor[0]);
        				str += this.hexstr(acolor[1]).toString();
        				str += this.hexstr(acolor[2]).toString();
        				a = acolor[3];
        				c = new nexacro.Style_color(str);
        			}
        		}

        		if(a != "") co.setElementGlobalAlpha(a);

        		if(gb == 1) co.setElementFillStyle(c);
        		else if(gb == 2) co.setElementStrokeStyle(c);
        		else if(gb == 3) co.setElementShadowColor(c);

        	};

        	nexacro.RGraph.prototype._measureText = function (text, font)
        	{
        		if (!font)
        		{
        			font = new nexacro.Style_font();
        		}
        		var obj = nexacro.getTextSize(text, font);
        		return [ obj.nx ,obj.ny ];
        	};

            /**
            * Draws the graph key (used by various graphs)
            *
            * @param object obj The graph object
            * @param array  key An array of the texts to be listed in the key
            * @param colors An array of the colors to be used
            */
            nexacro.RGraph.prototype.drawKey =
            nexacro.RGraph.prototype.DrawKey = function (obj, key, colors)
            {
                if (!key) {
                    return;
                }

                var ca   = obj.canvas,
                    co   = obj.context,
                    prop = obj.properties,

                    // Key positioned in the gutter
                    keypos   = prop['chart.key.position'],
                    textsize = prop['chart.text.size'],
                    key_non_null    = [],
                    colors_non_null = [];

                co.lineWidth = 1;
                co.setElementLineWidth(co.lineWidth);

                co.beginPath();

                /**
                * Change the older chart.key.vpos to chart.key.position.y
                */
                if (typeof(prop['chart.key.vpos']) == 'number') {
                    obj.Set('chart.key.position.y', prop['chart.key.vpos'] * prop['chart.gutter.top']);
                }

                /**
                * Account for null values in the key
                */
                for (var i=0; i<key.length; ++i) {
                    if (key[i] != null) {
                        colors_non_null.push(colors[i]);
                        key_non_null.push(key[i]);
                    }
                }

                key    = key_non_null;
                colors = colors_non_null;

                /**
                * This does the actual drawing of the key when it's in the graph
                *
                * @param object obj The graph object
                * @param array  key The key items to draw
                * @param array colors An aray of colors that the key will use
                */
                function DrawKey_graph (tmpRG, obj, key, colors)
                {
                    var text_size   = typeof(prop['chart.key.text.size']) == 'number' ? prop['chart.key.text.size'] : prop['chart.text.size'];
                    var text_italic = prop['chart.key.text.italic'] ?  true : false;
                    var text_bold   = prop['chart.key.text.bold'] ?  true : false;
                    var text_font   = prop['chart.key.text.font'] || prop['chart.key.font'] || prop['chart.text.font'];

                    var gutterLeft   = obj.gutterLeft;
                    var gutterRight  = obj.gutterRight;
                    var gutterTop    = obj.gutterTop;
                    var gutterBottom = obj.gutterBottom;
        			var ca			 = obj.canvas;
                    var hpos         = prop['chart.yaxispos'] == 'right' ? gutterLeft + 10 : ca.width - gutterRight - 10;
                    var vpos         = gutterTop + 10;
                    var title        = prop['chart.title'];
                    var blob_size    = text_size; // The blob of color
                    var hmargin      = 8; // This is the size of the gaps between the blob of color and the text
                    var vmargin      = 4; // This is the vertical margin of the key
                    var fillstyle    = prop['chart.key.background'];
                    var text_color   = prop['chart.key.text.color'];
                    var strokestyle  = '#333333';
                    var height       = 0;
                    var width        = 0;

                    if (!obj.coords) obj.coords = {};
                    obj.coords.key = [];

        			var objFont = new nexacro.Style_font();
        			objFont.set_face(prop['chart.text.font']);
        			objFont.set_size(text_size);
                    // Need to set this so that measuring the text works out OK
                    co.font = text_size + 'px ' + prop['chart.text.font'];
        			co.setElementFont(objFont);

                    // Work out the longest bit of text
                    for (i=0; i<key.length; ++i) {
        				if(tmpRG.ISIE8) {
        					width = Math.max(width, tmpRG._measureText(key[i],objFont)[0]);
        				} else {
        					width = Math.max(width, co.measureText(key[i]).width);
        				}
                    }

                    width += 5;
                    width += blob_size;
                    width += 5;
                    width += 5;
                    width += 5;

                    /**
                    * Now we know the width, we can move the key left more accurately
                    */
                    if (   prop['chart.yaxispos'] == 'left'
                        || (obj.type === 'pie' && !prop['chart.yaxispos'])
                        || (obj.type === 'hbar' && !prop['chart.yaxispos'])
                        || (obj.type === 'hbar' && prop['chart.yaxispos'] === 'center')
                        || (obj.type === 'hbar' && prop['chart.yaxispos'] === 'right')
                        || (obj.type === 'rscatter' && !prop['chart.yaxispos'])
                        || (obj.type === 'radar' && !prop['chart.yaxispos'])
                        || (obj.type === 'rose' && !prop['chart.yaxispos'])
                        || (obj.type === 'funnel' && !prop['chart.yaxispos'])
                        || (obj.type === 'vprogress' && !prop['chart.yaxispos'])
                        || (obj.type === 'hprogress' && !prop['chart.yaxispos'])
                       ) {

                        hpos -= width;
                    }

                    /**
                    * Horizontal alignment
                    */
                    if (typeof(prop['chart.key.halign']) == 'string') {
                        if (prop['chart.key.halign'] == 'left') {
                            hpos = gutterLeft + 10;
                        } else if (prop['chart.key.halign'] == 'right') {
                            hpos = ca.width - gutterRight  - width;
                        }
                    }

                    /**
                    * Specific location coordinates
                    */
                    if (typeof(prop['chart.key.position.x']) == 'number') {
                        hpos = prop['chart.key.position.x'];
                    }

                    if (typeof(prop['chart.key.position.y']) == 'number') {
                        vpos = prop['chart.key.position.y'];
                    }


                    // Stipulate the shadow for the key box
                    if (prop['chart.key.shadow']) {
                        co.shadowColor   = prop['chart.key.shadow.color'];
                        tmpRG.setElementCommonStyle(co,co.shadowColor,3);
                        co.shadowBlur    = prop['chart.key.shadow.blur'];
                        co.setElementShadowBlur(co.shadowBlur);
                        co.shadowOffsetX = prop['chart.key.shadow.offsetx'];
                        co.shadowOffsetY = prop['chart.key.shadow.offsety'];
                        co.setElementShadowOffsetX(co.shadowOffsetX);
        				co.setElementShadowOffsetY(co.shadowOffsetY);
                    }

                    // Draw the box that the key resides in
                    co.beginPath();
                        co.fillStyle   = prop['chart.key.background'];
                        tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                        co.strokeStyle = 'black';
                        tmpRG.setElementCommonStyle(co,co.strokeStyle,2);

                    if (typeof(prop['chart.key.position.graph.boxed']) == 'undefined' || (typeof(prop['chart.key.position.graph.boxed']) == 'boolean' && prop['chart.key.position.graph.boxed']) ) {
                        if (arguments[3] != false) {
                            co.lineWidth = typeof(prop['chart.key.linewidth']) == 'number' ? prop['chart.key.linewidth'] : 1;
                            co.setElementLineWidth(co.lineWidth);

                            // The older square rectangled key
                            if (prop['chart.key.rounded'] == true) {
                                co.beginPath();
                                    co.strokeStyle = strokestyle;
                                    tmpRG.setElementCommonStyle(co,co.strokeStyle,2);
                                    tmpRG.strokedCurvyRect(co, Math.round(hpos), Math.round(vpos), width - 5, 5 + ( (text_size + 5) * tmpRG.getKeyLength(key)),4);
                                co.stroke();
                                co.fill();

                                tmpRG.NoShadow(obj);

                            } else {
                                co.strokeRect(Math.round(hpos), Math.round(vpos), width - 5, 5 + ( (text_size + 5) * tmpRG.getKeyLength(key)));
                                co.fillRect(Math.round(hpos), Math.round(vpos), width - 5, 5 + ( (text_size + 5) * tmpRG.getKeyLength(key)));
                            }
                        }
                    }

                    tmpRG.NoShadow(obj);

                    co.beginPath();

                        /**
                        * Custom colors for the key
                        */
                        if (prop['chart.key.colors']) {
                            colors = prop['chart.key.colors'];
                        }

                        // Draw the labels given
                        for (var i=key.length - 1; i>=0; i--) {

                            var j = Number(i) + 1;

                            /**
                            * Draw the blob of color
                            */
                            if (typeof(prop['chart.key.color.shape']) == 'object' && typeof(prop['chart.key.color.shape'][i]) == 'string') {
                                var blob_shape = prop['chart.key.color.shape'][i];

                            } else if (typeof(prop['chart.key.color.shape']) == 'string') {
                                var blob_shape = prop['chart.key.color.shape'];
                            } else {
                                var blob_shape = 'square';
                            }

                            if (blob_shape == 'circle') {
                                co.beginPath();
                                    co.fillStyle = colors[i];
                                    tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                                    co.arc(hpos + 5 + (blob_size / 2), vpos + (5 * j) + (text_size * j) - text_size + (blob_size / 2), blob_size / 2, 0, 6.26, 0);
                                co.fill();

                            } else if (blob_shape == 'line') {
                                co.beginPath();
                                    co.strokeStyle = colors[i];
                                    tmpRG.setElementCommonStyle(co,co.strokeStyle,2);
                                    co.moveTo(hpos + 5, vpos + (5 * j) + (text_size * j) - text_size + (blob_size / 2));
                                    co.lineTo(hpos + blob_size + 5, vpos + (5 * j) + (text_size * j) - text_size + (blob_size / 2));
                                co.stroke();

                            } else if (blob_shape == 'triangle') {
                                co.beginPath();
                                    co.strokeStyle = colors[i];
                                    tmpRG.setElementCommonStyle(co,co.strokeStyle,2);
                                    co.moveTo(hpos + 5, vpos + (5 * j) + (text_size * j) - text_size + blob_size);
                                    co.lineTo(hpos + (blob_size / 2) + 5, vpos + (5 * j) + (text_size * j) - text_size );
                                    co.lineTo(hpos + blob_size + 5, vpos + (5 * j) + (text_size * j) - text_size + blob_size);
                                co.closePath();
                                co.fillStyle =  colors[i];
                                tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                                co.fill();

                            } else {
                                co.fillStyle =  colors[i];

                                tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                                co.fillRect(hpos + 5, vpos + (5 * j) + (text_size * j) - text_size, text_size, text_size + 1);
                            }

                            co.beginPath();
                            co.fillStyle = typeof text_color == 'object' ? text_color[i] : text_color;
                            tmpRG.setElementCommonStyle(co,co.fillStyle,1);

                            ret = tmpRG.Text2(obj, {
                                'font': text_font,
                                'size': text_size,
                                'bold': text_bold,
                                'italic': text_italic,
                                'x': hpos + blob_size + 5 + 5,
                                'y': vpos + (5 * j) + (text_size * j) + 3,
                                'text': key[i],
                                'accessible': !obj.properties['chart.key.interactive']
                            });

                            obj.coords.key[i] = [
                                ret.x,
                                ret.y,
                                ret.width,
                                ret.height,
                                key[i],
                                colors[i],
                                obj
                            ];
                        }
                    co.fill();
                }

                /**
                * This does the actual drawing of the key when it's in the gutter
                *
                * @param object obj The graph object
                * @param array  key The key items to draw
                * @param array colors An aray of colors that the key will use
                */
                function DrawKey_gutter (tmpRG, obj, key, colors)
                {
                    var text_size    = typeof(prop['chart.key.text.size']) == 'number' ? prop['chart.key.text.size'] : prop['chart.text.size'],
                        text_bold    = prop['chart.key.text.bold'],
                        text_italic  = prop['chart.key.text.italic'],
                        text_font    = prop['chart.key.text.font'] || prop['chart.key.font'] || prop['chart.text.font'],
                        text_color   = prop['chart.key.text.color'],
                        gutterLeft   = obj.gutterLeft,
                        gutterRight  = obj.gutterRight,
                        gutterTop    = obj.gutterTop,
                        gutterBottom = obj.gutterBottom,
        				ca			 = obj.canvas,
                        hpos         = ((ca.width - gutterLeft - gutterRight) / 2) + obj.gutterLeft,
                        vpos         = gutterTop - text_size - 5,
                        title        = prop['chart.title'],
                        blob_size    = text_size, // The blob of color
                        hmargin      = 8, // This is the size of the gaps between the blob of color and the text
                        vmargin      = 4, // This is the vertical margin of the key
                        fillstyle    = prop['chart.key.background'],
                        strokestyle  = '#999999',
                        length       = 0;

                    if (!obj.coords) obj.coords = {};
                    obj.coords.key = [];



                    // Need to work out the length of the key first
        			var objFont = new nexacro.Style_font();
        			objFont.set_face(text_font);
        			objFont.set_size(text_size);
        			var stype = obj.properties['chart.key.text.italic']?"italic ":" " + obj.properties['chart.key.text.bold']?"bold ":" ";
        			if(!stype) stype = "";
        			stype.trim();
        			objFont.set_type(stype);
                    co.font = (obj.properties['chart.key.text.italic'] ? 'italic ' : '') + (obj.properties['chart.key.text.bold'] ? 'bold ' : '') + text_size + 'px ' + text_font;
        			co.setElementFont(objFont);
                    for (i=0; i<key.length; ++i) {
                        length += hmargin;
                        length += blob_size;
                        length += hmargin;
        				if(tmpRG.ISIE8) {
        					length += tmpRG._measureText(key[i],objFont)[0];
        				} else {
        					length += co.measureText(key[i]).width;
        				}
                    }
                    length += hmargin;

                    /**
                    * Work out hpos since in the Pie it isn't necessarily dead center
                    */
                    if (obj.type == 'pie') {
                        if (prop['chart.align'] == 'left') {
                            var hpos = obj.radius + gutterLeft;

                        } else if (prop['chart.align'] == 'right') {
                            var hpos = ca.width - obj.radius - gutterRight;

                        } else {
                            hpos = ca.width / 2;
                        }
                    }

                    /**
                    * This makes the key centered
                    */
                    hpos -= (length / 2);

                    /**
                    * Override the horizontal/vertical positioning
                    */
                    if (typeof(prop['chart.key.position.x']) == 'number') {
                        hpos = prop['chart.key.position.x'];
                    }
                    if (typeof(prop['chart.key.position.y']) == 'number') {
                        vpos = prop['chart.key.position.y'];
                    }

                    /**
                    * Draw the box that the key sits in
                    */
                    if (obj.Get('chart.key.position.gutter.boxed')) {

                        if (prop['chart.key.shadow']) {
                            co.shadowColor   = prop['chart.key.shadow.color'];
        					tmpRG.setElementCommonStyle(co,co.shadowColor,3);
                            co.shadowBlur    = prop['chart.key.shadow.blur'];
        					co.setElementShadowBlur(co.shadowBlur);
                            co.shadowOffsetX = prop['chart.key.shadow.offsetx'];
                            co.shadowOffsetY = prop['chart.key.shadow.offsety'];
        					co.setElementShadowOffsetX(co.shadowOffsetX);
        					co.setElementShadowOffsetY(co.shadowOffsetY);
                        }

                        co.beginPath();
                            co.fillStyle = fillstyle;
                            tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                            co.strokeStyle = strokestyle;
                            tmpRG.setElementCommonStyle(co,co.strokeStyle,2);

                            if (prop['chart.key.rounded']) {
                                tmpRG.strokedCurvyRect(co, hpos, vpos - vmargin, length, text_size + vmargin + vmargin)
                                // Odd... RG.filledCurvyRect(co, hpos, vpos - vmargin, length, text_size + vmargin + vmargin);
                            } else {
                                co.rect(hpos, vpos - vmargin, length, text_size + vmargin + vmargin);
                            }

                        co.stroke();
                        co.fill();


                        tmpRG.NoShadow(obj);
                    }


                    /**
                    * Draw the blobs of color and the text
                    */

                    // Custom colors for the key
                    if (prop['chart.key.colors']) {
                        colors = prop['chart.key.colors'];
                    }

                    for (var i=0, pos=hpos; i<key.length; ++i) {
                        pos += hmargin;

                        // Draw the blob of color
                        if (typeof(prop['chart.key.color.shape']) == 'object' && typeof(prop['chart.key.color.shape'][i]) == 'string') {
                            var blob_shape = prop['chart.key.color.shape'][i];

                        } else if (typeof(prop['chart.key.color.shape']) == 'string') {
                            var blob_shape = prop['chart.key.color.shape'];

                        } else {
                            var blob_shape = 'square';
                        }


                        /**
                        * Draw the blob of color - line
                        */
                        if (blob_shape =='line') {

                            co.beginPath();
                                co.strokeStyle = colors[i];
                                tmpRG.setElementCommonStyle(co,co.strokeStyle,2);
                                co.moveTo(pos, vpos + (blob_size / 2));
                                co.lineTo(pos + blob_size, vpos + (blob_size / 2));
                            co.stroke();

                        // Circle
                        } else if (blob_shape == 'circle') {

                            co.beginPath();
                                co.fillStyle = colors[i];
                                tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                                co.moveTo(pos, vpos + (blob_size / 2));
                                co.arc(pos + (blob_size / 2), vpos + (blob_size / 2), (blob_size / 2), 0, 6.28, 0);
                            co.fill();

                        } else if (blob_shape == 'triangle') {

                            co.fillStyle = colors[i];
                            tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                            co.beginPath();
                                co.strokeStyle = colors[i];
                                tmpRG.setElementCommonStyle(co,co.strokeStyle,2);
                                co.moveTo(pos, vpos + blob_size);
                                co.lineTo(pos + (blob_size / 2), vpos);
                                co.lineTo(pos + blob_size, vpos + blob_size);
                            co.closePath();
                            co.fill();

                        } else {

                            co.beginPath();
                                co.fillStyle = colors[i];
                                tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                                co.rect(pos, vpos, blob_size, blob_size);
                            co.fill();
                        }

                        pos += blob_size;

                        pos += hmargin;

                        co.beginPath();
                            co.fillStyle = (typeof text_color === 'object') ? text_color[i] : text_color;
                            tmpRG.setElementCommonStyle(co,co.fillStyle,1);

                            var ret = tmpRG.Text2(obj, {
                                'font':text_font,
                                'bold':text_bold,
                                'size':text_size,
                                'italic': text_italic,
                                'x':pos,
                                'y': tmpRG.ISIE8?(vpos + text_size):(vpos + text_size + 3),
                                'text': key[i],
                                accessible: !obj.properties['chart.key.interactive']
                            });
                        co.fill();
        				if(tmpRG.ISIE8) {
        					pos += tmpRG._measureText(key[i],objFont)[0];
        				} else {
        					pos += co.measureText(key[i]).width;
        				}

                        obj.coords.key[i] = [
                            ret.x,
                            ret.y,
                            ret.width,
                            ret.height,
                            key[i],
                            colors[i],
                            obj
                        ];
                    }
                }
                if (keypos && keypos == 'gutter') {
                    DrawKey_gutter(this, obj, key, colors);
                } else if (keypos && keypos == 'graph') {
                    DrawKey_graph(this, obj, key, colors);
                } else {
                    alert('[COMMON] (' + obj.id + ') Unknown key position: ' + keypos);
                }
                if (prop['chart.key.interactive']) {
                    // Determine the maximum width of the labels
                    for (var i=0,len=obj.coords.key.length,maxlen=0; i<len; i+=1) {
                        maxlen = Math.max(maxlen, obj.coords.key[i][2]);
                    }

                    //obj.coords.key.forEach(function (value, index, arr)
                    //{
                    var tmpRG = this;
                    for (var i=0,len=obj.coords.key.length; i<len; i+=1) {

                        // Because the loop would have finished when the i variable is needed - put
                        // the onclick function inside a new context so that the value of the i
                        // variable is what we expect when the key has been clicked
                        (function (idx)
                        {
                            var arr   = obj.coords.key;
                            var value = obj.coords.key[idx];
                            var index = idx;

                            var rect = new nexacro.RGraph.Drawing_Rect(tmpRG, obj,value[0], value[1], prop['chart.key.position'] == 'gutter' ? value[2] : maxlen, value[3]);
        					if(prop["chart.key.interactive.background.color"]) {
        						rect.Set('fillstyle', null);
        					}
        					if(prop["chart.key.interactive.stroke.color"]) {
        						rect.Set('strokestyle', prop["chart.key.interactive.stroke.color"]);
        					}
        					rect._key = true;

                            rect.Draw();

                            rect.onclick = function (e, shape)
                            {
                                var co  = rect.context;

                                co.fillStyle = prop['chart.key.interactive.highlight.label'];
                                tmpRG.setElementCommonStyle(co,co.fillStyle,1);
                                co.fillRect(shape.x, shape.y, shape.width, shape.height);

                                if (typeof obj.interactiveKeyHighlight == 'function') {

                                    obj.Set('chart.key.interactive.index', idx);

                                    tmpRG.FireCustomEvent(obj, 'onbeforeinteractivekey');
                                    obj.interactiveKeyHighlight(index);
                                    tmpRG.FireCustomEvent(obj, 'onafterinteractivekey');
                                }

        						tmpRG.Registry_set('chart.key.interactive.rect', rect);
                            }

                            rect.onmousemove = function (e, shape)
                            {
                                return true;
                            }
                        })(i);
                    }
                }
            };

            /**
            * Returns the key length, but accounts for null values
            *
            * @param array key The key elements
            */
            nexacro.RGraph.prototype.getKeyLength = function (key)
            {
                var length = 0;

                for (var i=0,len=key.length; i<len; i+=1) {
                    if (key[i] != null) {
                        ++length;
                    }
                }

                return length;
            };

            /**
            * Shows a tooltip next to the mouse pointer
            *
            * @param canvas object The canvas element object
            * @param text   string The tooltip text
            * @param int     x      The X position that the tooltip should appear at. Combined with the canvases offsetLeft
            *                       gives the absolute X position
            * @param int     y      The Y position the tooltip should appear at. Combined with the canvases offsetTop
            *                       gives the absolute Y position
            * @param int     idx    The index of the tooltip in the graph objects tooltip array
            * @param object  e      The event object
            */
            nexacro.RGraph.prototype.tooltip =
            nexacro.RGraph.prototype.Tooltip = function (obj, text, x, y, idx, e)
            {
        		x = Math.ceil(x);
        		y = Math.ceil(y);
                if (!text || this.trim(text).length === 0) {
                    return;
                }
                /**
                * Fire the beforetooltip event
                */
                this.fireCustomEvent(obj, 'onbeforetooltip');

                /**
                * chart.tooltip.override allows you to totally take control of rendering the tooltip yourself
                */
                if (typeof(obj.get('chart.tooltips.override')) == 'function') {
                    return obj.get('chart.tooltips.override')(obj, text, x, y, idx);
                }

                /**
                * Save the X/Y coords
                */
                var originalX = x;
                var originalY = y;

                /**
                * This facilitates the "id:xxx" format
                */
                text = this.getTooltipTextFromDIV(text);
        		if(!text) text = "";
        		text = String(text);

                /**
                * First clear any exising timers
                */
                var timers = this.Registry_Get('chart.tooltip.timers');

                if (timers && timers.length) {
                    for (i=0; i<timers.length; ++i) {
                        clearTimeout(timers[i]);
                    }
                }
                this.Registry_Set('chart.tooltip.timers', []);

                /**
                * Hide the context menu if it's currently shown
                */
                if (obj.get('chart.contextmenu')) {
                    this.hideContext();
                }
                /**
                * Show a tool tip
                */
                var sid = '__rgraph_tooltip_';
        		var objDiv = this.context.components[sid];
        		if(!objDiv)
        		{
        			objDiv = new Div();
        			objDiv.init(sid, "absolute", 0, 0, 0, 0, null, null);
        			this.context.addChild(sid, objDiv);
        			objDiv.set_visible(false);
        			objDiv.show();

        			objDiv.style.set_background(this.tooltipStyle.background);
        			objDiv.style.set_border(this.tooltipStyle.border);
        			objDiv.style.set_bordertype(this.tooltipStyle.bordertype);
        			objDiv.style.set_shadow(this.tooltipStyle.shadow);

        			objDiv.set_scrollbars("none");

        			var objStatic = new Static();
        			objStatic.init("st_" + sid, "absolute", 0, 0, 0, 0, null, null);
        			objDiv.addChild("st_" + sid, objStatic);
        			objStatic.show();
        			objStatic.style.set_align(this.tooltipStyle.contentsAlign);
        			objStatic.style.set_background(this.tooltipStyle.contentsBackground);
        			objStatic.style.set_color(this.tooltipStyle.contentsColor);
        			objStatic.style.set_font(this.tooltipStyle.contentsFont);
        			objStatic.style.set_padding(this.tooltipStyle.contentsPadding);
        			objStatic.style.set_opacity(this.tooltipStyle.contentsOpacity);
        			objStatic.set_wordwrap(true);
        			objStatic.set_usedecorate(true);
        		}
        		objDiv.bringToFront();
        		objDiv.set_visible(false);

        		var divstatic = objDiv.components["st_" + objDiv.name];
        		divstatic.set_top(0);
        		divstatic.set_left(0);
        		var objFont = divstatic.style.font || divstatic.currentstyle.font;
        		var a = text.split("\n");	// ???????????? ???????????? ????????? ??????
        		var nMaxW = 0;
        		var nH = 0;
        		var nTop = 0;
        		var objFt;
        		var nCnt = 0;
        		for(var i=0;i<=a.length;i++) {
        			if(a[i] && String(a[i]).length > 0) {
        				divstatic.set_text(String(a[i]));
        				var txt = divstatic._parse_decoratetext(String(a[i]));
        				objFt = nexacro.getTextSize(txt, objFont);
        				if(nMaxW < objFt.nx) nMaxW = objFt.nx;
        				nH += objFt.ny + 5;
        				nCnt++;
        			}
        		}
        		divstatic.set_text(text);
        		divstatic.set_width(nMaxW + 20);
        		divstatic.set_height(nH+10);
        		objDiv.set_width(nMaxW + 20);
        		objDiv.set_height(nH+10);

        		//var nL = nexacro.toNumber(obj.canvas.parentDiv.left) + nexacro.toNumber(x);
        		var nL = nexacro.toNumber(obj.canvas.parentDiv.getOffsetLeft()) + nexacro.toNumber(x);
        		//var nT = nexacro.toNumber(obj.canvas.parentDiv.top) + nexacro.toNumber(y) - nexacro.toNumber(objDiv.height) - 2;
        		var nT = nexacro.toNumber(obj.canvas.parentDiv.getOffsetTop()) + nexacro.toNumber(y) - nexacro.toNumber(objDiv.height) - 2;
        		if(nexacro.toNumber(this.context.width) < (nL + nexacro.toNumber(objDiv.width)))
        		{
        			nL = nexacro.toNumber(this.context.width) - nexacro.toNumber(objDiv.width);
        		}
        		objDiv.style.set_opacity(0);
        		objDiv.set_left(nL);
        		objDiv.set_top(nT);
        		objDiv.set_visible(true);

                objDiv.__canvas__  = obj.canvas;
                objDiv.__object__  = obj;

                if (typeof(idx) == 'number') {
                    objDiv.__index__ = idx;
                    origIdx = idx;
                }

                if (obj.type === 'line' || obj.type === 'radar') {
        			var ds;
                    for (ds=0; ds<obj.data.length; ++ds) {
                        if (idx >= obj.data[ds].length) {
                            idx -= obj.data[ds].length;
                        } else {
                            break;
                        }
                    }

                    objDiv.__dataset__ = ds;
                    objDiv.__index2__  = idx;
                }

        		if(this.tooltipStyle.animation == true && !this.Registry_get('chart.adjusting.gantt'))
        		{
        			var pThis = this;
        			var frame = 0;
        			var frames = 20;
        			var opacity = 0;
        			var curopacity = pThis.tooltipStyle.opacity;

        			var iterator = function () {
        				var nGap = Math.ceil(curopacity/frames) + 5;
        					if (frame < frames) {
        						frame += 1;
        						opacity += nGap;
        						objDiv.style.set_opacity(opacity);
        						if(opacity<pThis.tooltipStyle.opacity) {
        							pThis.Effects_UpdateCanvas(iterator);
        						} else {
        							objDiv.style.set_opacity(curopacity);
        						}
        					} else {
        						objDiv.set_opacity(pThis.tooltipStyle.opacity);
        					}
        			};
        			iterator();
        		} else {
        			objDiv.style.set_opacity(100);
        		}

                // If the effect is fade:
                // Increase the opacity from its default 0 up to 1 - fading the tooltip in
        		/*
                if (obj.get('chart.tooltips.effect') === 'fade') {
                    for (var i=1; i<=10; ++i) {
                        (function (index)
                        {
                            setTimeout(function ()
                            {
                                tooltipObj.style.opacity = index / 10;
                            }, index * 25);
                        })(i);
                    }
                } else {
                    tooltipObj.style.opacity = 1;
                }
        		*/

                /**
                * If the tooltip it self is clicked, cancel it
                */
                //tooltipObj.onmousedown = function (e){e.stopPropagation();}
                //tooltipObj.onmouseup   = function (e){e.stopPropagation();}
                //tooltipObj.onclick     = function (e){if (e.button == 0) {e.stopPropagation();}}
                /**
                * Keep a reference to the tooltip in the registry
                */
                this.Registry_Set('chart.tooltip', objDiv);

                /**
                * Fire the tooltip event
                */
                this.fireCustomEvent(obj, 'ontooltip');
            };

            /**
            *
            */
            nexacro.RGraph.prototype.getTooltipTextFromDIV = function (text)
            {
                var result = /^id:(.*)/.exec(text);
                if (result && result[1]) {
                    text = '';
                }
                return text;
            };

            /**
            * Hides the currently shown tooltip
            */
            nexacro.RGraph.prototype.hideTooltip =
            nexacro.RGraph.prototype.HideTooltip = function ()
            {
                var tooltip =this.Registry_Get('chart.tooltip');
        		/*
                var uid     = arguments[0] && arguments[0].uid ? arguments[0].uid : null;

                if (tooltip && (!uid || uid == tooltip.__canvas__.uid)) {
                    tooltip.set_visible(false);
                    this.Registry_Set('chart.tooltip', null);
                }
        		*/

                var sid = '__rgraph_tooltip_';
        		var objDiv = this.context.components[sid];
        		if(objDiv) objDiv.set_visible(false);
        		this.Registry_Set('chart.tooltip', null);
            };
        	// runtime??? ?????? clear??? ???????????????
            nexacro.RGraph.prototype.effectCanvasShow = function (ca,bShow,nMs)
            {
        		if(!ca) return;
        		if(nexacro.Browser == "Runtime") {
        			if(!nMs) nMs = 100;
        			var p = ca.parentDiv;
        			var ca_name = ca.name;
        			if(p) {
        				var ca_effect_name = ca.name + "_effect";
        				oEffect = p.components[ca_effect_name];
        				if(oEffect) {
        					if(bShow) {
        						oEffect.set_left(ca.left);
        						oEffect.set_top(ca.top);
        						oEffect.set_width(ca.width);
        						oEffect.set_height(ca.height);
        						var coEffect = oEffect._canvas;
        						try {
        						if(coEffect) coEffect.drawImage(ca._canvas,0,0);
        						} catch(e) {}
        						oEffect.bringToFront();
        						oEffect.set_visible(true);
        						if(this.context) {
        							this.context.sleep(10);
        							ca.set_enableevent(false);
        						} else {
        							if(oEffect) oEffect.set_visible(false);
        						}
        					} else {
        						oEffect.sendToBack();
        						oEffect.set_visible(false);
        						if(this.context) {
        							this.context.sleep(nMs);
        						}
        						ca.set_enableevent(true);
        					}
        				}
        			}
        		}
        		return;
        	};
            /**
            * This is the canvas mouseup event listener. It installs the mouseup event for the
            * canvas. The mouseup event then checks the relevant object.
            *
            * @param object obj The chart object
            *
            * RGraph.window_mouseup_event_listener
            */
            nexacro.RGraph.prototype.CanvasMouseupListener = function (obj,objCvs,e)
            {
        		if (!this.isNull(obj) && this.tooltip) {
        			var shape = obj.getShape(e);
        			if (shape && shape['tooltip']) {
        				var text = shape['tooltip'];
        				if (text) {
        					var type = shape['object'].type;
        					this.effectCanvasShow(obj.canvas,true);
        					this.clear(obj.canvas);
        					this.redraw();
        					this.Registry_set('chart.tooltip.shape', shape);
        					// Note that tooltips are positioned at the pointer
        					// now; and thats done within the .tooltip() function

        					var xx = nexacro.toNumber(shape['width']);
        					var yy = nexacro.toNumber(shape['height']);
        					var shapex = nexacro.toNumber(shape['x']);
        					var shapey = nexacro.toNumber(shape['y']);

        					if(this.tooltipStyle.halign == "left") xx = shapex;
        					else if(this.tooltipStyle.halign == "center") xx = shapex + Math.ceil(xx/2) - 10;
        					else if(this.tooltipStyle.halign == "right") xx = shapex + xx - 10;
        					if(this.tooltipStyle.valign == "top") yy = shapey;
        					else if(this.tooltipStyle.halign == "middle") yy = shapey + Math.ceil(yy/2) - 10;
        					else if(this.tooltipStyle.halign == "bottom") yy = shapey + yy - 10;

        					//this.tooltip(obj, text, shape['x'], shape['y'], shape['index'], e);
        					if(obj.type == "pie" || obj.type == "rose") {
        						this.tooltip(obj, text, shape['x1'], shape['y1'], shape['index'], e);
        					} else if(obj.type == "funnel") {
        						//this.tooltip(obj, text, shape['coords'][0], shape['coords'][1], shape['index'], e);
        						this.tooltip(obj, text, shape['x'], shape['y'], shape['index'], e);
        					} else {
        						this.tooltip(obj, text, xx, yy, shape['index'], e);
        					}

        					obj.highlight(shape);

        					this.effectCanvasShow(obj.canvas,false);

        					// Add the shape that triggered the tooltip
        					if (this.Registry_get('chart.tooltip')) {
        						this.Registry_get('chart.tooltip').__shape__ = shape;
        						this.evaluateCursor(e);
        					}
        					e.cancelBubble = true;
        					e.stopPropagation();
        					return false;
        				}
        			} else {
        				/*
        				this.clear(obj.canvas);
        				this.hideTooltip();
        				this.redraw();
        				*/
        				//obj.canvas.rgraph_mouseup_event_listener(e);
        			}
        		}
        		// =========================================================================
        		// Adjusting
        		// ========================================================================

        		if (this.Registry_get('chart.adjusting') || this.Registry_get('chart.adjusting.gantt')) {

        		// If it's a line chart update the data_arr variable
        			if (obj && obj.type === 'line') {
        				obj.data_arr = this.arrayLinearize(obj.data);
        			}
        			this.fireCustomEvent(this.Registry_get('chart.adjusting'), 'onadjustend');
        		}

        		this.Registry_set('chart.adjusting', null);
        		this.Registry_set('chart.adjusting.shape', null);
        		this.Registry_set('chart.adjusting.gantt', null);
        		if(objCvs) objCvs.style.set_cursor("auto");

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
            nexacro.RGraph.prototype.CanvasMousemoveListener = function (objCvs,e)
            {
        		e = this.FixEventObject(objCvs,e);
        		this._objOrgCanvas = objCvs;
        		/**
        		* Go through all the objects and check them to see if anything needs doing
        		*/
        		var objects = this.OR_getObjectsByXY(e);

        		// Necessary to track which objects have had the mouseover
        		// triggered on them
        		var uids = [];
        		if (objects && objects.length > 0) {
        			for (var i=0,len=objects.length; i<len; i+=1) {

        				var obj = objects[i];
        				var id  = obj.id;
        				// Record the uid
        				uids[obj.uid] = true;
        				if (!obj.getShape) {
        					continue;
        				}
        				var shape = obj.getShape(e);

        				// Fire the onmouseout event if necessary
        				if (
        					(!shape && typeof obj.__mouseover_shape_index__ === 'number') ||
        					(shape && typeof obj.__mouseover_shape_index__ === 'number' && shape.index !== obj.__mouseover_shape_index__)
        					) {
        					this.fireCustomEvent(obj, 'onmouseout');
        				}

        				//
        				// If the mouse is over a key element add the details
        				// of it to the Registry
        				//
        				if (obj.coords && obj.coords.key && obj.coords.key.length) {
        					var mouseXY = this.getMouseXY(e);
        					for (var i=0,overkey=false; i<obj.coords.key.length; ++i) {
        						if (
        							   mouseXY[0] >= obj.coords.key[i][0]
        							&& mouseXY[0] <= (obj.coords.key[i][0] + obj.coords.key[i][2])
        							&& mouseXY[1] >= obj.coords.key[i][1]
        							&& mouseXY[1] <= (obj.coords.key[i][1] + obj.coords.key[i][3])
        						   ) {

        							this.Registry_set('key-element', obj.coords.key[i]);
        							overkey = true;
        						}
        						if (!overkey) {
        							this.Registry_set('key-element', null);
        						}
        					}
        				}
        				// ================================================================================================ //
        				// This facilitates the chart.events.mousemove option
        				// ================================================================================================ //
        				var func = obj.get('chart.events.mousemove');
        				if (!func && typeof obj.onmousemove == 'function') {
        					func = obj.onmousemove;
        				}
        				/**
        				*
        				*/
        				var func2;
        				if (shape) {
        					var index = shape['object'].type == 'scatter' ? shape['index_adjusted'] : shape['index'];
        					if (typeof(obj['$' + index]) == 'object' && typeof(obj['$' + index].onmousemove) == 'function') {
        						func2 = obj['$' + index].onmousemove;
        					}
        				}

        				/**
        				* This bit saves the current pointer style if there isn't one already saved
        				*/
        				if (shape && (typeof(func) == 'function' || typeof(func2) == 'function' || typeof obj.Get('link') === 'string')) {
        					if (obj.Get('chart.events.mousemove.revertto') == null) {
        						obj.Set('chart.events.mousemove.revertto', e.target.style.cursor);
        					}
        					if (typeof(func)  == 'function')  this.custom_events_mousemove_pointer = func(e, shape);
        					if (typeof(func2) == 'function') this.custom_events_mousemove_pointer  = this.custom_events_mousemove_pointer || func2(e, shape);

        					// Go through the RGraph.events array looking for more
        					// event listeners
        					if (   typeof this.events === 'object'
        						&& typeof this.events[obj.uid] === 'object') {

        						for (i in this.events[obj.uid]) {

        							if (   typeof i === 'string'
        								&& typeof this.events[obj.uid][i] === 'object'
        								&& this.events[obj.uid][i][1] === 'onmousemove'
        								&& typeof this.events[obj.uid][i][2] === 'function') {

        								(this.events[obj.uid][i][2])(obj);
        							}
        						}
        					}
        				} else if (typeof(obj.Get('chart.events.mousemove.revertto')) == 'string') {
        					this.cursor.push('default');
        					obj.Set('chart.events.mousemove.revertto', null);
        				}
        				// ======================================================
        				// This bit of code facilitates the onmouseover event
        				// ======================================================
        				var func = obj.properties['chart.events.mouseover'];
        				if (!func && typeof obj.onmouseover === 'function') {
        					func = obj.onmouseover;
        				}
        				// Allow for individually index functions to be specified
        				if (shape) {
        					var index = shape['object'].type == 'scatter' ? shape['index_adjusted'] : shape['index'];
        					if (typeof(obj['$' + index]) == 'object' && typeof(obj['$' + index].onmouseover) == 'function') {
        						var func2 = obj['$' + index].onmouseover;
        					}
        				} else {
        					obj.__mouseover_shape_index__ = null;
        					this.__mouseover_objects__      = [];
        				}
        				if (typeof this.__mouseover_objects__ === 'undefined') {
        					this.__mouseover_objects__ = [];
        				}
        				if (shape) {
        					if ((obj.__mouseover_shape_index__ === shape.index) === false) {
        						obj.__mouseover_shape_index__ = shape.index;
        						this.__mouseover_objects__.push(obj);

        						if (func) func(e, shape);
        						if (func2) func2(e, shape);

        						// Go through the RGraph.events array looking for more
        						// event listeners
        						if (   typeof this.events === 'object'
        							&& typeof this.events[obj.uid] === 'object') {

        							for (i in this.events[obj.uid]) {

        								if (   typeof i === 'string'
        									&& typeof this.events[obj.uid][i] === 'object'
        									&& this.events[obj.uid][i][1] === 'onmouseover'
        									&& typeof this.events[obj.uid][i][2] === 'function') {

        									(this.events[obj.uid][i][2])(obj);
        								}
        							}
        						}
        					}
        				} else {
        					obj.__mouseover_shape_index__ = null;
        					this.__mouseover_objects__      = [];
        				}
        				// ================================================================================================ //
        				// Tooltips
        				// ================================================================================================ //
        				var current_tooltip = this.Registry_get('chart.tooltip');
        				var tooltips        = obj.get('chart.tooltips');
        				var tooltips_event  = obj.Get('chart.tooltips.event');
        				if (   shape
        					&& (tooltips && tooltips[shape['index']] || shape['tooltip'])
        					&& tooltips_event.indexOf('mousemove')  !== -1
        					&& (   this.isNull(current_tooltip) // Is there a tooltip being shown?
        						|| (current_tooltip.__object__ && (obj.uid != current_tooltip.__object__.uid)) // Same object?
        						|| (current_tooltip.__index__ != shape['index']) // Same tooltip index?
        						|| (typeof shape['dataset'] === 'number' && shape['dataset'] != current_tooltip.__shape__['dataset'])
        						)
        				   ) {
        					if(!this.Registry_get('chart.adjusting.gantt')) {
        						this.CanvasMouseupListener(obj,objCvs.cvs,e);
        					}
        					return;
        				} else {
        					/*
        					if(obj && obj.type == "gantt") {
        						if (   shape
        							&& (tooltips && tooltips[shape['index']] || shape['tooltip'])
        							&& tooltips_event.indexOf('mousemove')  !== -1
        							&& this.Registry_get('chart.adjusting.gantt') ) {
        							this.CanvasMouseupListener(obj,objCvs.cvs,e);
        						}
        					}
        					*/
        				}
        				// ================================================================================================ //
        				// Adjusting
        				// ================================================================================================ //

        				if (shape && obj && obj.type == "gantt" && obj.get('chart.adjustable') && this.Registry_get('chart.adjusting.gantt') && obj.isAdjustable(shape)) {
        					this.Registry_Set('chart.adjusting', obj);
        					var mouseXY = this.getMouseXY(e);
        					var data = typeof shape.subindex === 'number' ?  obj.data[shape.index][shape.subindex] : obj.data[shape.index];
        					var gantt_sv = this.Registry_get('chart.adjusting.gantt');
        					var sv_oldx,sv_oldy;
        					if(gantt_sv) {
        							sv_oldx = gantt_sv.mousex;
        							sv_oldy = gantt_sv.mousey;

        							//gantt_sv.index = shape.index,
        							//gantt_sv.subindex = shape.subindex,
        							gantt_sv.object = obj,
        							gantt_sv.mousex = mouseXY[0];
        							gantt_sv.mousey = mouseXY[1];
        							//if(gantt_sv.differ != 0) gantt_sv.mousex_s = sv_oldx;
        							//gantt_sv.mousey_s = sv_oldy,
        							gantt_sv.event = data,
        							//gantt_sv.event_start = data[0],
        							//gantt_sv.event_duration = data[1],
        							//gantt_sv.mode = (mouseXY[0] > (shape['x'] + shape['width'] - 5) ? 'resize' : 'move'),
        							gantt_sv.shape = shape;

        						obj.Adjusting_mousemove(e);
        					}
        				} else if (!shape && obj && obj.type == "gantt" && obj.get('chart.adjustable') && this.Registry_get('chart.adjusting.gantt')) {
        					this.Registry_Set('chart.adjusting', obj);
        					var mouseXY = this.getMouseXY(e);
        					var gantt_sv = this.Registry_get('chart.adjusting.gantt');
        					var sv_oldx,sv_oldy;
        					if(gantt_sv) {
        						var ev_start = typeof gantt_sv.subindex === 'number' ?  obj.data[gantt_sv.index][gantt_sv.subindex][0] : obj.data[gantt_sv.index][0];
        						var data = gantt_sv.event;
        						sv_oldx = gantt_sv.mousex;
        						sv_oldy = gantt_sv.mousey;

        						//gantt_sv.mode = 'move';
        						gantt_sv.mousex = mouseXY[0];
        						gantt_sv.mousey = mouseXY[1];
        						//if(gantt_sv.differ != 0) gantt_sv.mousex_s = sv_oldx;
        						//gantt_sv.mousey_s = sv_oldy;
        						//gantt_sv.event_start = ev_start;	//data[0];
        						//gantt_sv.event_duration = data[1];


        						obj.Adjusting_mousemove(e);
        					}

        				}
        				/**
        				* This facilitates breaking out of the loop when a shape has been found -
        				* ie the cursor is over a shape an upper chart
        				*/
        				if (shape || (obj.overChartArea && obj.overChartArea(e) )) {
        					break;
        				}
        			}

        			//
        			// For all objects that are NOT mouseover'ed, reset the
        			// mouseover flag back to null
        			//
        			var objects = this.OR_getObjectsByCanvasID(e.target.id);

        			for (var i=0; i<objects.length; ++i) {
        				if (!uids[objects[i].uid]) {
        					objects[i].__mouseover_shape_index__ = null;
        				}
        			}

        		} else {
        			// Reset the mouseover flag on all of this canvas tags objects
        			var objects = this.OR_getObjectsByCanvasID(e.target.id);

        			for (var i=0; i<objects.length; i++) {

        				if (typeof objects[i].__mouseover_shape_index__ === 'number') {
        					this.fireCustomEvent(objects[i], 'onmouseout');
        				}

        				objects[i].__mouseover_shape_index__ = null;
        			}

        			this.__mouseover_objects__ = [];

        		}
        		// ================================================================================================ //
        		// Crosshairs
        		// ================================================================================================ //
        		if (e.target && e.target.__object__ && e.target.__object__.get('chart.crosshairs')) {
        			this.effectCanvasShow(e.target.__object__.canvas,true);
        			this.drawCrosshairs(e, e.target.__object__);
        			this.effectCanvasShow(e.target.__object__.canvas,false);
        		}
        		// ================================================================================================ //
        		// Interactive key No LONGER REQUIRED
        		// ================================================================================================ //
        		//if (typeof InteractiveKey_line_mousemove == 'function') InteractiveKey_line_mousemove(e);
        		//if (typeof InteractiveKey_pie_mousemove == 'function') InteractiveKey_pie_mousemove(e);
        		// ================================================================================================ //
        		// Annotating
        		// ================================================================================================ //
        		if (e.target.__object__ && e.target.__object__.get('chart.annotatable') && this.annotating_canvas_onmousemove) {
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
            nexacro.RGraph.prototype.CanvasClickListener = function (objCvs,e)
            {
        		e = this.fixEventObject(objCvs,e);
        		this._objOrgCanvas = objCvs;
        		var objects = this.OR_getObjectsByXY(e);
        		var nCnt = 0;
        		for (var i=0,len=objects.length; i<len; i+=1) {

        			var obj   = objects[i];
        			var id    = obj.id;
        			var shape = obj.getShape(e);

        			if(shape) nCnt++;

        			/**
        			* This bit saves the current pointer style if there isn't one already saved
        			*/
        			var func = obj.get('chart.events.click');

        			if (!func && typeof(obj.onclick) == 'function') {
        				func = obj.onclick;
        			}
        			if (shape && typeof func == 'function') {
        				// ???????????? ---- rect.onclick
        				if(obj.type == "drawing.rect" && obj._key) {
        					this.clear(obj.canvas);
        					this.redraw();
        				}

        				func(e, shape);

        				// Go through the RGraph.events array looking for more
        				// event listeners
        				if (   typeof this.events === 'object'
        					&& typeof this.events[obj.uid] === 'object' ) {

        					for (var ii in this.events[obj.uid]) {

        						if (   typeof i === 'string'
        							&& typeof this.events[obj.uid][ii] === 'object'
        							&& this.events[obj.uid][ii][1] === 'onclick'
        							&& typeof this.events[obj.uid][ii][2] === 'function') {

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
        			} else if(obj && obj.type == "gauge" && !shape) {
        				if(func) {
        					func(e);
        					return;
        				}
        			} else if(obj && obj.type == "fuel" && !shape) {
        				var func = obj.get('chart.events.click');
        				if(func) {
        					func(e);
        					return;
        				} else {
        					if (obj && obj.get('chart.adjustable')) {
        						this.Registry_Set('chart.adjusting', obj);
        						obj.Adjusting_mousemove(e);
        					}
        				}
        			}
        			//
        			// Handle the key click event
        			//
        			var key = this.Registry_get('key-element');
        			if (key) {
        				this.fireCustomEvent(obj, 'onkeyclick');
        			}

        			/**
        			* The property takes priority over this.
        			*/
        			if (shape) {
        				var index = shape['object'].type == 'scatter' ? shape['index_adjusted'] : shape['index'];
        				if (typeof(index) == 'number' && obj['$' + index]) {
        					var func = obj['$' + index].onclick;
        					if (typeof(func) == 'function') {
        						func(e, shape);

        						/**
        						* If objects are layered on top of each other this return
        						* stops objects underneath from firing once the "top"
        						* objects user event has fired
        						*/
        						return;
        					}
        				}
        				if ((obj.Get('chart.tooltips') && obj.Get('chart.tooltips')[shape['index']] || shape['tooltip'])
        					&& (obj.Get('chart.tooltips.event') == 'onclick') ) {
        					this.CanvasMouseupListener(obj,objCvs.cvs,e);
        				}
        			} else {
        				if(obj.type == "radar") {
        					var func = obj.onclick;
        					if (typeof(func) == 'function' && obj.get('chart.fill.tooltips')) {
        						func(e, shape);
        						return;
        					}
        				} else if(obj.type == "vprogress" || obj.type == "hprogress" || obj.type == "meter") {
        					var func = obj.onclick;
        					if (typeof(func) == 'function') {
        						func(e, shape);
        						return;
        					}
        				}
        			}

        			/**
        			* This facilitates breaking out of the loop when a shape has been found -
        			* ie the cursor is over a shape an upper chart
        			*/
        			if (shape || (obj.overChartArea && obj.overChartArea(e)) ) {
        				break;
        			}
        		}
        		if(objects && objects.length>0 && nCnt == 0) {
        			if (this.Registry_get('chart.tooltip') || this.Registry_get('chart.key.interactive.rect')) {
        				this.clear(objCvs);
        				if(this.Registry_get('chart.tooltip')) this.hideTooltip();
        				if(this.Registry_get('chart.key.interactive.rect')) this.Registry_set('chart.key.interactive.rect',"");
        				this.redraw();

        				this.Registry_set('chart.adjusting', null);
        				this.Registry_set('chart.adjusting.shape', null);
        				this.Registry_set('chart.adjusting.gantt', null);
        			}
        		} else if(objects && objects.length==0 && nCnt == 0) {
        			this.clear(objCvs);
        			if(this.Registry_get('chart.tooltip')) this.hideTooltip();
        			if(this.Registry_get('chart.key.interactive.rect')) this.Registry_set('chart.key.interactive.rect',"");
        			this.redraw();
        		}
        		this.Registry_Set('chart.adjusting', null);
        		this.Registry_set('chart.adjusting.gantt', null);

            };

            /**
            * This is the canvas lbuttondown event listener. Used by the pseudo event listener -gantt chart
            *
            * @param object obj The chart object
            */
            nexacro.RGraph.prototype.CanvasLButtonDownListener = function (objCvs,e)
            {
        		e = this.fixEventObject(objCvs,e);
        		this._objOrgCanvas = objCvs;
        		var objects = this.OR_getObjectsByXY(e);
        		var nCnt = 0;
        		for (var i=0,len=objects.length; i<len; i+=1) {

        			var obj   = objects[i];
        			var id    = obj.id;
        			var shape = obj.getShape(e);

        			if (shape && obj && obj.type == "gantt" && obj.get('chart.adjustable') && obj.isAdjustable(shape)) {
        				if(this.Registry_get('chart.tooltip')) this.hideTooltip(obj.canvas);

        				// click??? ????????? ?????? ???????????? ????????? ?????????.
        				this.Registry_Set('chart.adjusting', obj);
        				var mouseXY = this.getMouseXY(e);
        				var data = typeof shape.subindex === 'number' ?  obj.data[shape.index][shape.subindex] : obj.data[shape.index];
        				var modetype = (mouseXY[0] > (shape['x'] + shape['width'] - 5) ? 'resize' : 'move');
        				if(modetype == "resize") obj.canvas.style.set_cursor("e-resize");
        				else if(modetype == "resize") obj.canvas.style.set_cursor("move");

        				this.Registry_set('chart.adjusting.gantt', {
        					index: shape.index,
        					subindex: shape.subindex,
        					object: obj,
        					mousex: mouseXY[0],
        					mousey: mouseXY[1],
        					mousex_s: mouseXY[0],
        					mousey_s: mouseXY[1],
        					event: data,
        					event_start: data[0],
        					event_duration: data[1],
        					mode: modetype,
        					//mode: null,
        					shape: shape,
        					differ : 0
        				});
        			}
        		}
            };
            /**
            * This is the canvas lbuttonup event listener. Used by the pseudo event listener
            *
            * @param object obj The chart object
            */
            nexacro.RGraph.prototype.CanvasLButtonUpListener = function (objCvs,e)
            {
        		e = this.fixEventObject(objCvs,e);
        		this._objOrgCanvas = objCvs;
        		var objects = this.OR_getObjectsByXY(e);
        		var nCnt = 0;
        		for (var i=0,len=objects.length; i<len; i+=1) {
        			var obj   = objects[i];
        			var id    = obj.id;
        			var shape = obj.getShape(e);
        			if (shape && obj && obj.type == "gantt" && obj.get('chart.adjustable')) {
        				// click??? ????????? ?????? ???????????? ????????? ?????????.
        				this.HideTooltip(obj.canvas);
        				this.Registry_Set('chart.adjusting', null);
        				this.Registry_set('chart.adjusting.gantt', null);
        				obj.canvas.style.set_cursor("auto");
        			}
        		}
            };
            /**
            * This function evaluates the various cursor settings and if there's one for pointer, changes it to that
            */
            nexacro.RGraph.prototype.evaluateCursor =
            nexacro.RGraph.prototype.EvaluateCursor = function (e)
            {
                var obj     = null;
                var mouseXY = this.getMouseXY(e);
                var mouseX  = mouseXY[0];
                var mouseY  = mouseXY[1];
                var canvas  = e.target;

                /**
                * Tooltips cause the mouse pointer to change
                */
                var objects = this.OR_getObjectsByCanvasID(canvas.id);

                for (var i=0,len=objects.length; i<len; i+=1) {
                    if ((objects[i].getShape && objects[i].getShape(e)) || (objects[i].overChartArea && objects[i].overChartArea(e))) {
                        var obj = objects[i];
                        var id  = obj.id;
                    }
                }

                if (!this.isNull(obj)) {
                    if (obj.getShape && obj.getShape(e)) {

                        var shape = obj.getShape(e);

                        if (obj.get('chart.tooltips')) {

                            var text = this.parseTooltipText(obj.get('chart.tooltips'), shape['index']);

                            if (!text && shape['object'].type == 'scatter' && shape['index_adjusted']) {
                                text = this.parseTooltipText(obj.get('chart.tooltips'), shape['index_adjusted']);
                            }

                            /**
                            * This essentially makes front charts "hide" the back charts
                            */
                            if (text) {
                                var pointer = true;
                            }
                        }
                    }

                    /**
                    * Now go through the key coords and see if it's over that.
                    */
                    if (!this.isNull(obj) && obj.Get('chart.key.interactive')) {
                        for (var j=0; j<obj.coords.key.length; ++j) {
                            if (mouseX > obj.coords.key[j][0] && mouseX < (obj.coords.key[j][0] + obj.coords.key[j][2]) && mouseY > obj.coords.key[j][1] && mouseY < (obj.coords.key[j][1] + obj.coords.key[j][3])) {
                                var pointer = true;
                            }
                        }
                    }
                }

                /**
                * It can be specified in the user mousemove event - remember it can now
                * be specified in THREE ways
                */
                if (this.custom_events_mousemove_pointer) {
                    var pointer = true;
                    this.custom_events_mousemove_pointer = false;
                }
                /*


                    var index = shape['object'].type == 'scatter' ? shape['index_adjusted'] : shape['index'];
                    if (!this.isNull(obj['$' + index]) && typeof(obj['$' + index].onmousemove) == 'function') {
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

                for (var i=0,len=objects.length; i<len; i+=1) {
                    if (objects[i] && objects[i][1].Get('chart.resizable')) {
                        var resizable = true;
                    }
                }

                if (resizable && mouseX > (e.target.width - 32) && mouseY > (e.target.height - 16)) {
                    pointer = true;
                }

                if (pointer) {
                    //e.target.style.cursor = 'pointer';
                } else if (e.target.style.cursor == 'pointer') {
                    //e.target.style.cursor = 'default';
                } else {
                    //e.target.style.cursor = null;
                }
                // =========================================================================
                // Resize cursor - check mouseis in bottom left corner and if it is change it
                // =========================================================================
                if (resizable && mouseX >= (e.target.width - 15) && mouseY >= (e.target.height - 15)) {
                    //e.target.style.cursor = 'move';

                } else if (e.target.style.cursor === 'move') {
                    //e.target.style.cursor = 'default';
                }
                // =========================================================================
                // Interactive key
                // =========================================================================
                if (typeof mouse_over_key == 'boolean' && mouse_over_key) {
                   // e.target.style.cursor = 'pointer';
                }
                // =========================================================================
                // Gantt chart adjusting
                // =========================================================================

                //if (obj && obj.type == 'gantt' && obj.get('chart.adjustable')) {
                //    if (obj.getShape && obj.getShape(e)) {
                //        e.target.style.cursor = 'ew-resize';
                //    } else {
                //        e.target.style.cursor = 'default';
                //    }
                //} else if (!obj || !obj.type) {
                //    e.target.style.cursor = cursor;
                //}
                // =========================================================================
                // Line chart adjusting
                // =========================================================================
                if (obj && obj.type == 'line' && obj.get('chart.adjustable')) {
                    if (obj.getShape) {

                        var shape = obj.getShape(e);

                        if (shape && obj.isAdjustable(shape)) {
                           // e.target.style.cursor = 'ns-resize';
                        }
                    } else {
                       // e.target.style.cursor = 'default';
                    }
                }
                // =========================================================================
                // Annotatable
                // =========================================================================
                if (e.target.__object__ && e.target.__object__.get('chart.annotatable')) {
                   // e.target.style.cursor = 'crosshair';
                }
                // =========================================================================
                // Drawing API link
                // =========================================================================
                if (obj && obj.type === 'drawing.text' && shape && typeof obj.get('link') === 'string') {
                   // e.target.style.cursor = 'pointer';
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
                if (!tooltips) {
                    return null;
                }
                // Get the tooltip text
        		var text = "";
                if (typeof tooltips == 'function') {
                    text = tooltips(idx);

                // A single tooltip. Only supported by the Scatter chart
                } else if (typeof tooltips == 'string') {
                    text = tooltips;

                } else if (typeof tooltips == 'object' && typeof tooltips[idx] == 'function') {
                    text = tooltips[idx](idx);
                } else if (typeof tooltips == 'object' && tooltips[idx] && typeof tooltips[idx] == 'object') {
                    text = tooltips[idx](idx);
                } else if (tooltips[idx] && typeof tooltips[idx] == 'string') {
                    text = tooltips[idx];
                } else if (tooltips[idx] && typeof tooltips[idx] == 'number') {
                    text = tooltips[idx];
                } else {
                    text = '';
                }

                if (text == 'undefined') {
                    text = '';
                } else if (text == 'null') {
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
                //var e            = this.fixEventObject(e),
                var width        = obj.canvas.width,
                    height       = obj.canvas.height;
                var mouseXY      = this.getMouseXY(e);
                var x            = mouseXY[0],
                    y            = mouseXY[1],
                    gutterLeft   = obj.gutterLeft,
                    gutterRight  = obj.gutterRight,
                    gutterTop    = obj.gutterTop,
                    gutterBottom = obj.gutterBottom,
                    Mathround    = Math.round,
                    prop         = obj.properties,
                    co           = obj.context,
                    ca           = obj.canvas;

                this.redrawCanvas(ca);

                if (   x >= gutterLeft
                    && y >= gutterTop
                    && x <= (width - gutterRight)
                    && y <= (height - gutterBottom)
                   ) {
                    var linewidth = prop['chart.crosshairs.linewidth'] ? prop['chart.crosshairs.linewidth'] : 1;
                    co.lineWidth = linewidth ? linewidth : 1;
        			co.setElementLineWidth(co.lineWidth);

                    co.beginPath();
                    co.strokeStyle = prop['chart.crosshairs.color'];
        			this.setElementCommonStyle(co,co.strokeStyle,2);

                    /**
                    * The chart.crosshairs.snap option
                    */
                    if (prop['chart.crosshairs.snap']) {

                        // Linear search for the closest point
                        var point = null;
                        var dist  = null;
                        var len   = null;

                        if (obj.type == 'line') {

                            for (var i=0; i<obj.coords.length; ++i) {

                                var length = this.getHypLength(obj.coords[i][0], obj.coords[i][1], x, y);

                                // Check the mouse X coordinate
                                if (typeof dist != 'number' || length < dist) {
                                    var point = i;
                                    var dist = length;
                                }
                            }

                            x = obj.coords[point][0];
                            y = obj.coords[point][1];

                            // Get the dataset
                            for (var dataset=0; dataset<obj.coords2.length; ++dataset) {
                                for (var point=0; point<obj.coords2[dataset].length; ++point) {
                                    if (obj.coords2[dataset][point][0] == x && obj.coords2[dataset][point][1] == y) {
                                        ca.__crosshairs_snap_dataset__ = dataset;
                                        ca.__crosshairs_snap_point__   = point;
                                    }
                                }
                            }

                        } else {

                            for (var i=0; i<obj.coords.length; ++i) {
                                for (var j=0; j<obj.coords[i].length; ++j) {

                                    // Check the mouse X coordinate
                                    var len = this.getHypLength(obj.coords[i][j][0], obj.coords[i][j][1], x, y);

                                    if (typeof(dist) != 'number' || len < dist) {

                                        var dataset = i;
                                        var point   = j;
                                        var dist   = len;
                                    }
                                }
                            }
                            ca.__crosshairs_snap_dataset__ = dataset;
                            ca.__crosshairs_snap_point__   = point;


                            x = obj.coords[dataset][point][0];
                            y = obj.coords[dataset][point][1];
                        }
                    }

                    // Draw a top vertical line
                    if (prop['chart.crosshairs.vline']) {
                        co.moveTo(Mathround(x), Mathround(gutterTop));
                        co.lineTo(Mathround(x), Mathround(height - gutterBottom));
                    }

                    // Draw a horizontal line
                    if (prop['chart.crosshairs.hline']) {
                        co.moveTo(Mathround(gutterLeft), Mathround(y));
                        co.lineTo(Mathround(width - gutterRight), Mathround(y));
                    }
                    co.stroke();
                    /**
                    * Need to show the coords?
                    */
                    if (obj.type == 'scatter' && prop['chart.crosshairs.coords']) {

                        var xCoord = (((x - gutterLeft) / (width - gutterLeft - gutterRight)) * (prop['chart.xmax'] - prop['chart.xmin'])) + prop['chart.xmin'];
                            xCoord = xCoord.toFixed(prop['chart.scale.decimals']);
                        var yCoord = obj.max - (((y - prop['chart.gutter.top']) / (height - gutterTop - gutterBottom)) * obj.max);

                        if (obj.type == 'scatter' && obj.properties['chart.xaxispos'] == 'center') {
                            yCoord = (yCoord - (obj.max / 2)) * 2;
                        }

                        yCoord = yCoord.toFixed(prop['chart.scale.decimals']);

                        var div      = this.Registry_get('chart.coordinates.coords.div');
                        var mouseXY  = this.getMouseXY(e);
                        var canvasXY = this.getCanvasXY(ca);

                        if (!div) {
                            var div = document.createElement('DIV');
                                div.__object__               = obj;
                                div.style.position           = 'absolute';
                                div.style.backgroundColor    = 'white';
                                div.style.border             = '1px solid black';
                                div.style.fontFamily         = 'Arial, Verdana, sans-serif';
                                div.style.fontSize           = '10pt'
                                div.style.padding            = '2px';
                                div.style.opacity            = 1;
                                div.style.WebkitBorderRadius = '3px';
                                div.style.borderRadius       = '3px';
                                div.style.MozBorderRadius    = '3px';
                            document.body.appendChild(div);

                            this.Registry_set('chart.coordinates.coords.div', div);
                        }

                        // Convert the X/Y pixel coords to correspond to the scale
                        div.style.opacity = 1;
                        div.style.display = 'inline';

                        if (!prop['chart.crosshairs.coords.fixed']) {
                            div.style.left = ma.max(2, (e.pageX - div.offsetWidth - 3)) + 'px';
                            div.style.top = ma.max(2, (e.pageY - div.offsetHeight - 3))  + 'px';
                        } else {
                            div.style.left = canvasXY[0] + gutterLeft + 3 + 'px';
                            div.style.top  = canvasXY[1] + gutterTop + 3 + 'px';
                        }

                        div.innerHTML = '<span style="color: #666">' + prop['chart.crosshairs.coords.labels.x'] + ':</span> ' + xCoord + '<br><span style="color: #666">' + prop['chart.crosshairs.coords.labels.y'] + ':</span> ' + yCoord;

                        obj.canvas.addEventListener('mouseout', this.hideCrosshairCoords, false);

                        ca.__crosshairs_labels__ = div;
                        ca.__crosshairs_x__ = xCoord;
                        ca.__crosshairs_y__ = yCoord;

                    } else if (prop['chart.crosshairs.coords']) {
                        trace('[RGRAPH] Showing crosshair coordinates is only supported on the Scatter chart');
                    }

                    /**
                    * Fire the oncrosshairs custom event
                    */
                    this.fireCustomEvent(obj, 'oncrosshairs');

                } else {
                    this.hideCrosshairCoords();
                }
            };

            //
            // Adds a mousemove event listener that highlights a segment based on th
            // mousemove event. Used in the Rose and the RScatter charts
            //
            //@param int segments The number of segments to allow
            //
            nexacro.RGraph.prototype.allowSegmentHighlight = function (opt)
            {
                var obj    = opt.object,
                    count  = opt.count,
                    fill   = opt.fill,
                    stroke = opt.stroke

                if (!this.segmentHighlightFunction) {

                    this.segmentHighlightFunction = function (e)
                    {
                        var mouseXY = this.getMouseXY(e);
                        var angle   = this.getAngleByXY(obj.centerx, obj.centery, mouseXY[0], mouseXY[1]);

                        angle += this.HALFPI;

                        if (angle > this.TWOPI) {
                            angle -= this.TWOPI;
                        }

                        this.redraw();

                        var start = 0;
                        var end   = 0;
                        var a     = (ma.PI * 2) / count;

                        //
                        // Radius
                        //
                        var r = obj.radius;


                        (function ()
                        {
                            for (i=0; i<count; i+=1) {
                                if (angle < (a * (i + 1))) {
                                    start = i * a;
                                    end   = (i + 1) * a;

                                    return;
                                }
                            }
                        })();

                        start -= this.HALFPI;
                        end   -= this.HALFPI;


                        this.path2(
                            obj.context,
                            'b m % % a % % % % % false c s % f %',
                            obj.centerx, obj.centery,
                            obj.centerx,obj.centery,r,start,end,
                            stroke,
                            fill
                        );

                    };
                    obj.canvas.addEventListener('mousemove', this.segmentHighlightFunction, false);
                }
            };
        	nexacro.RGraph.prototype.effect_fadeIn =
            nexacro.RGraph.prototype.effect_fadein = function (obj)
            {
                var opt      = arguments[1] || {};
                var frames   = opt.frames || 30;
                var duration = (100 / frames);
                var frame    = 0;
                var callback = arguments[2] || function () {};
        		var opacity  = 0;

                // Initially the opacity should be zero
                obj.canvas.style.set_opacity(opacity);

                // Draw the chart
                this.redrawCanvas(obj.canvas);

        		var pThis = this;
        		var iterator = function ()
        		{
        			if (frame < frames) {
        				frame += 1;
        				opacity += duration;
        				if(opacity>=100) {
        					obj.canvas.style.set_opacity(100);
        					obj.canvas.set_enableevent(true);
        					callback(obj);
        				}
        				obj.canvas.style.set_opacity(opacity);
        				pThis.Effects_UpdateCanvas(iterator);
        			} else {
        				obj.canvas.style.set_opacity(100);
        				obj.canvas.set_enableevent(true);
        				callback(obj);
        			}
        		};
        		obj.canvas.set_enableevent(false);
        		iterator();

        		return obj;
         	};
        	nexacro.RGraph.prototype.effect_fadeOut =
        	nexacro.RGraph.prototype.effect_fadeout = function (obj)
            {
                var opt      = arguments[1] || {};
                var frames   = opt.frames || 30;
                var duration = (100 / frames);
                var frame    = 0;
                var callback = arguments[2] || function () {};
        		var opacity  = 100;

        		if(this.ISIE8) {
        			callback(obj);
        			return;
        		}

                // Initially the opacity should be zero
                obj.canvas.style.set_opacity(opacity);

                // Draw the chart
                this.redrawCanvas(obj.canvas);
        		var pThis = this;
        		var iterator = function ()
        		{
        			if (frame < frames) {
        				frame += 1;
        				opacity -= duration;
        				if(opacity <= 0) {
        					obj.canvas.style.set_opacity(0);
        					obj.canvas.set_enableevent(true);
        					callback(obj);
        					return;
        				}
        				obj.canvas.style.set_opacity(opacity);
        				pThis.Effects_UpdateCanvas(iterator);
        			} else {
        				obj.canvas.style.set_opacity(0);
        				obj.canvas.set_enableevent(true);
        				callback(obj);
        			}
        		};
        		obj.canvas.set_enableevent(false);
        		iterator();

        		return obj;
         	};
        	nexacro.RGraph.prototype.effect_slideIn =
            nexacro.RGraph.prototype.effect_slidein = function (obj)
            {
        		var canvas = obj.canvas;
        		var nw = canvas.width;
                var opt      = arguments[1] || {};
                var frames   = opt.frames || 30;
                var duration = (nw / frames);
                var frame    = 0;
                var callback = arguments[2] || function () {};
        		var nleft  = -nw;

        		if(this.ISIE8) {
        			callback(obj);
        			return;
        		}

                // Initially the opacity should be zero
                canvas.set_left(nleft);

                // Draw the chart
                this.redrawCanvas(obj.canvas);
        		var pThis = this;
        		var iterator = function ()
        		{
        			if (frame < frames) {
        				frame += 1;
        				nleft += duration;
        				if(nleft>=0) {
        					canvas.set_left(0);
        					obj.canvas.set_enableevent(true);
        					callback(obj);
        				}
        				canvas.set_left(nleft);
        				pThis.Effects_UpdateCanvas(iterator);
        			} else {
        				canvas.set_left(0);
        				obj.canvas.set_enableevent(true);
        				callback(obj);
        			}
        		};
        		obj.canvas.set_enableevent(false);
        		iterator();

        		return obj;
         	};
        	nexacro.RGraph.prototype.effect_slideOut =
            nexacro.RGraph.prototype.effect_slideout = function (obj)
            {
        		var canvas = obj.canvas;
        		var nw = canvas.width + 50;
                var opt      = arguments[1] || {};
                var frames   = opt.frames || 30;
                var duration = (nw / frames);
                var frame    = 0;
                var callback = arguments[2] || function () {};
        		var nleft  = 0;

        		if(this.ISIE8) {
        			callback(obj);
        			return;
        		}

                // Initially the opacity should be zero
                canvas.set_left(nleft);

                // Draw the chart
                this.redrawCanvas(obj.canvas);
        		var pThis = this;
        		var iterator = function ()
        		{
        			if (frame < frames) {
        				frame += 1;
        				nleft += duration;
        				if(nleft>=nw) {
        					canvas.set_left(nw);
        					obj.canvas.set_enableevent(true);
        					callback(obj);
        				}
        				canvas.set_left(nleft);
        				pThis.Effects_UpdateCanvas(iterator);
        			} else {
        				canvas.set_left(nw);
        				obj.canvas.set_enableevent(true);
        				callback(obj);
        			}
        		};
        		obj.canvas.set_enableevent(false);
        		iterator();

        		return obj;
         	};
        	if(nexacro.Browser == "Runtime")
        	{
        		// RUNTIME NO METHOD - 2017.3
        		var _pCanvasElement = nexacro.CanvasElement.prototype;
        		_pCanvasElement.measureText = function(text)
        		{
        			var font = this.font;
        			if(!font)
        			{
        				font = new nexacro.Style_font();
        			}
        			var obj = nexacro.getTextSize(text, font);

        			return { width: obj.nx, height: obj.ny };
        		};
        		delete _pCanvasElement;

        		nexacro.RGraph.prototype.createLinearGradient = function(co, aX0, aY0, aX1, aY1, arrColor)
        		{
        			if(typeof(arrColor) == "object")
        			{
        				if (arrColor[0] && arrColor[0].match(/^gradient\((.*)\)$/i)) {
        					var parts = RegExp.$1.split(':');
        					return String(parts[0]);
        				} else {
        					return arrColor;
        				}
        			} else {
        				if (arrColor.match(/^gradient\((.*)\)$/i)) {
        					var parts = RegExp.$1.split(':');
        					return String(parts[0]);
        				} else {
        					return arrColor;
        				}
        			}
        		};
        		nexacro.RGraph.prototype.createRadialGradient = function(co, aX0, aY0, aR0, aX1, aY1, aR1, arrColor)
        		{
        			if(typeof(arrColor) == "object")
        			{
        				if (arrColor[0] && arrColor[0].match(/^gradient\((.*)\)$/i)) {
        					var parts = RegExp.$1.split(':');
        					return parts[0].toString();
        				} else {
        					return arrColor;
        				}
        			} else {
        				if (arrColor.match(/^gradient\((.*)\)$/i)) {
        					var parts = RegExp.$1.split(':');
        					return parts[0].toString();
        				} else {
        					return arrColor;
        				}
        			}
        		};
        	} else {

        		nexacro.RGraph.prototype.createLinearGradient = function (co, aX0, aY0, aX1, aY1, arrColor)
        		{
        			//if(typeof(arrColor) != "object") return arrColor;
        			if(typeof(arrColor) == "object")
        			{
        				if(arrColor[0].indexOf("gradient") < 0) return arrColor;
        			} else {
        				if(arrColor.indexOf("gradient") < 0) return arrColor;
        			}
        			if (arrColor.match(/^gradient\((.*)\)$/i)) {
        				gradient = nexacro.replaceAll(arrColor,";",":");
        				var parts = RegExp.$1.split(':');
        					if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 8)
        					{
        						return parts[0].toString();
        					}
        				var dtx = co._handle._draw_ctx;
        				var grad = dtx.createLinearGradient(aX0, aY0, aX1, aY1);
        				var diff = 1 / (parts.length - 1);

        				grad.addColorStop(0, this.hex2rgb(parts[0]));
        				for (var j=1,len=parts.length; j<len; ++j) {
        					grad.addColorStop(j * diff, this.hex2rgb(parts[j]));
        				}
        			}
        			return grad ? grad : arrColor;
        		};
        		nexacro.RGraph.prototype.createRadialGradient = function (co, aX0, aY0, aR0, aX1, aY1, aR1, arrColor)
        		{
        			if(typeof(arrColor) == "object")
        			{
        				if(arrColor[0].indexOf("gradient") < 0) return arrColor;
        			} else {
        				if(arrColor.indexOf("gradient") < 0) return arrColor;
        			}

        			if (arrColor.match(/^gradient\((.*)\)$/i)) {
        				var parts = RegExp.$1.split(':');
        				if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 8)
        				{
        					return parts[0].toString();
        				}

        				var dtx = co._handle._draw_ctx;
        				var grad = dtx.createRadialGradient(aX0, aY0, aR0, aX1, aY1, aR1);

        				var diff = 1 / (parts.length - 1);
        				/*
        				grad.addColorStop(0, this.trim(parts[0]));

        				for (var j=1,len=parts.length; j<len; ++j) {
        					grad.addColorStop(j * diff, this.trim(parts[j]));
        				}
        				*/
        				grad.addColorStop(0, this.hex2rgb(parts[0]));
        				for (var j=1,len=parts.length; j<len; ++j) {
        					grad.addColorStop(j * diff, this.hex2rgb(parts[j]));
        				}


        			}
        			return grad ? grad : arrColor;
        		};

        		if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 8) {
        			var _pCanvasElement = nexacro.CanvasElement.prototype;
        			_pCanvasElement.restore = function () {
        				var _handle = this._handle;
        				if (_handle) {
        					try {
        						nexacro.__restoreCanvas(_handle);
        					}catch(e) {
        					}
        				}
        			};
        			delete _pCanvasElement;
        			nexacro.__drawCanvasFillText = function (canvas, text, x, y, maxwidth) {
        				var element = canvas._linked_element;
        				if (typeof text == "string") {
        					//text = nexacro._encodeXml(text);
        				}
        				var textAlign = canvas._textAlign;
        				var font = element.font;
        				var color = canvas._fill_color;
        				var letterspace = element.letterspace;
        				var textsize = nexacro._getTextSize(letterspace, text, font);
        				var textwidth = textsize[0];
        				var textheight = textsize[1];
        				var conY = nexacro._getTextBaseline(canvas._textBaseline, y, textheight);
        				var carlen = (textwidth / text.length);
        				carlen *= 1.5;
        				var x1, y1 = conY, x2, y2 = conY + 0.125;
        				var vtextAlign = "left";
        				if (textAlign == 2 || textAlign == 4 || textAlign === undefined) {
        					x1 = x;
        					x2 = x1 + textwidth;
        				}
        				else if (textAlign == 1 || textAlign == 3) {
        					x1 = x - textwidth - carlen;
        					x2 = x;
        					vtextAlign = "right";
        				}
        				else {
        					x1 = (x - textwidth / 2) - carlen;
        					x2 = (x + textwidth / 2);
        				}

        				var bpt = element._getCoordPos(x1, y1);
        				var ept = element._getCoordPos(x2, y2);
        				var vml_str = "<v:line from='" + bpt.x + " " + bpt.y + "' to='" + ept.x + " " + ept.y + "' filled='t' stroked='f' "
        					 + "fillcolor='" + color + "'><v:path textpathok='t'/>"
        					 + "<v:textpath on='t' fitpath='True' style=\"v-text-align: " + vtextAlign + "; font:" + font._sysvalue + ";\" "
        					 + "string='" + text + "'/></v:line>";
        				canvas._vml_str += vml_str;
        				canvas._draw_node.innerHTML = canvas._vml_str;
        			};

        		}
        	}

            /**
            * A basic string formatting function. Use it like this:
            *
            * var str = '{0} {1} {2}'.format('a', 'b', 'c');
            *
            * Outputs: a b c
            */
            if (!String.prototype.format) {
              String.prototype.format = function()
              {
                var args = arguments;

                return this.replace(/{(\d+)}/g, function(str, idx)
                {
                  return typeof args[idx - 1] !== 'undefined' ? args[idx - 1] : str;
                });
              };
            }
        	if (!String.prototype.trim) {
              String.prototype.trim = function()
              {
        		return this.replace(/^\s+|\s+$/gm,'');
        	  };
        	}

        	if (!Array.isArray) {
        	  Array.isArray = function(arg) {
        		return Object.prototype.toString.call(arg) === '[object Array]';
        	  };
        	}

        	if (!Array.prototype.forEach) {

        	  Array.prototype.forEach = function(callback, thisArg) {

        		var T, k;

        		if (this === null) {
        		  throw new TypeError(' this is null or not defined');
        		}

        		// 1. O??? ???????????? |this| ?????? ?????????
        		// toObject() ????????? ???????????? ???.
        		var O = Object(this);

        		// 2. lenValue??? "length" ????????? ?????? O??? Get()
        		// ?????? ????????? ????????? ???????????? ???.
        		// 3. len??? toUint32(lenValue)?????? ???.
        		var len = O.length >>> 0;

        		// 4. isCallable(callback)??? false??? ??????, TypeError ?????? ??????.
        		// ??????: http://es5.github.com/#x9.11
        		if (typeof callback !== "function") {
        		  throw new TypeError(callback + ' is not a function');
        		}

        		// 5. thisArg??? ???????????????, T??? thisArg?????? ???;
        		// ????????? T??? undefined?????? ???.
        		if (arguments.length > 1) {
        		  T = thisArg;
        		}

        		// 6. k??? 0?????? ???
        		k = 0;

        		// 7. ??????, k < len??? ??????
        		while (k < len) {

        		  var kValue;

        		  // a. Pk??? ToString(k)?????? ???.
        		  //    ?????? in ???????????? ??????(LHS) ??????????????? ?????? ??????(implicit)???
        		  // b. kPresent??? Pk ????????? ?????? O??? HasProperty
        		  //    ?????? ????????? ????????? ???????????? ???.
        		  //    ??? ????????? c??? ????????? ??? ??????
        		  // c. kPresent??? true??? ??????, ?????????
        		  if (k in O) {

        			// i. kValue??? ?????? Pk??? ?????? O??? Get ??????
        			// ????????? ????????? ???????????? ???.
        			kValue = O[k];

        			// ii. this ????????? T ????????? kValue, k ??? O??? ????????????
        			// ?????? ????????? ?????? callback??? call ?????? ????????? ??????.
        			callback.call(T, kValue, k, O);
        		  }
        		  // d. k??? 1??? ??????.
        		  k++;
        		}
        		// 8. undefined ??????
        	  };
        	}

        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
