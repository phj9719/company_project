/*
 * HTMLViewer Component
 *
 * property (Properties of the Nexacro.Component are inherited )
 *	- html : get or sets html to be displayed on the component.
 *	- scrollbars : Please refer to the manual. (Div.scrollbars)
 *	- autofittype : To fit the size of the html contents, 
 *                  to adjust the height or width of the component. (none/width/height/both).
 * 
*/

if (!nexacro.HTMLViewer)
{
    //==============================================================================
    // nexacro.HTMLViewerLoadCompletedEventInfo
    //==============================================================================
    nexacro.HTMLViewerLoadCompletedEventInfo = function (obj, html)
    {
        this.id = this.eventid || "onloadcompleted";
        this.fromobject = this.fromreferenceobject = obj;
        this.html = html;
    };
    var _pEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.HTMLViewerLoadCompletedEventInfo);
    nexacro.HTMLViewerLoadCompletedEventInfo.prototype = _pEventInfo;
    _pEventInfo._type_name = "HTMLViewerLoadCompletedEventInfo";

    delete _pEventInfo;
	
    //==============================================================================
    // nexacro.HTMLViewer_Style
    //==============================================================================
    nexacro.HTMLViewer_Style = function (target)
    {
        nexacro.Style.call(this);

        if (target)
        {
            this._target = target;
        }
    };
    
    var _pHTMLViewerStyle = nexacro._createPrototype(nexacro.Style);
    nexacro.HTMLViewer_Style.prototype = _pHTMLViewerStyle;

    _pHTMLViewerStyle.__custom_emptyObject = function ()
    {
    };

    _pHTMLViewerStyle.__get_custom_style_value = function ()
    {
    };

    //==============================================================================
    // nexacro.HTMLViewer_CurrentStyle
    //==============================================================================
    nexacro.HTMLViewer_CurrentStyle = function ()
    {
        nexacro.CurrentStyle.call(this);
    };

    var _pHTMLViewerCurrentStyle = nexacro._createPrototype(nexacro.CurrentStyle);
    nexacro.HTMLViewer_CurrentStyle.prototype = _pHTMLViewerCurrentStyle;

    _pHTMLViewerCurrentStyle.__custom_emptyObject = _pHTMLViewerStyle.__custom_emptyObject;
    _pHTMLViewerCurrentStyle.__get_custom_style_value = _pHTMLViewerStyle.__get_custom_style_value;

    delete _pHTMLViewerStyle;
    delete _pHTMLViewerCurrentStyle;
	
    //==============================================================================
    // nexacro.HTMLViewer
    //==============================================================================
    nexacro.HTMLViewer = function (id, position, left, top, width, height, right, bottom, parent)
    {
        nexacro.Component.call(this, id, position, left, top, width, height, right, bottom, parent);

        this.html = "";
        this.autofittype = "none"; // width, height, both, none
        this.scrollbars = "autoboth";

        //------------- internal variable --------------//		
		this._scrollbars = 3;
		this._is_scrollable = true;
        this._web_elem = null;
        this._apply_client_padding = false;
        
        this._is_focus_accept = false;
        
        this._event_list = {
            "onmove":1,
			"onsize":1,
			"onloadcompleted":1
        };        
        
        this._doc = null;
        this._contentDoc = null;
		this._blockLoadFlag = false; // reload loop block for ie
        this._init_left = null;
        this._init_top = null;
        this._init_width = null;
        this._init_height = null;
        this._init_right = null;
        this._init_bottom = null;
        
		this._content_width = null;
		this._content_height = null;
    };

    var _pHTMLViewer = nexacro._createPrototype(nexacro.Component);
    nexacro.HTMLViewer.prototype = _pHTMLViewer;

    _pHTMLViewer._type_name = "HTMLViewer";

    // ====================================================================
    // nexacro.HTMLViewer : override Style method
    // ====================================================================	
	_pHTMLViewer.on_find_CurrentStyle_background = function (pseudo)
	{
		// no background
		return null;
	};
	_pHTMLViewer.on_find_CurrentStyle_bordertype = function (pseudo)
	{
		// no bordertype
		return null;
	};	
	
    _pHTMLViewer.on_apply_custom_pseudo = function (pseudo)
    {
        var curstyle = this.currentstyle;
        
        var border = this.on_find_CurrentStyle_border(pseudo);
        if (curstyle.border != border)
        {
            curstyle.border = border;
            this.on_apply_style_border(border);
        }        

        var padding = this.on_find_CurrentStyle_padding(pseudo);
        if (curstyle.padding != padding)
        {
            curstyle.padding = padding;
            this.on_apply_style_padding(padding);
        }
    };
    
	_pHTMLViewer.on_apply_style_border = function (border)
	{
        var control_elem = this._control_element;
        if (control_elem)
        {
            var curstyle = this.currentstyle;
            control_elem.setElementBorder(border, curstyle.bordertype);
            
			var web_elem = this._web_elem;
			if ( web_elem && this._is_created )
			{
				this._updateDisplay();
			}
        }	
	};
	
	_pHTMLViewer.on_apply_style_padding = function (padding)
	{
        var web_elem = this._web_elem;
        if ( web_elem && this._is_created )
        {
            var contentDoc = this._contentDoc;
            if ( contentDoc )
            {			
				var body = contentDoc.getProperty("body");
				var style = body.getProperty("style");
				var str = padding.top + "px " + padding.right + "px " + padding.bottom + "px " + padding.left + "px ";
				style.setProperty("padding", str);
				
				this._setElementSize();
				
				this._updateDisplay();
			}
        }
	};
	
    // ====================================================================
    // nexacro.HTMLViewer : override create, destory, update method
    // ====================================================================
    _pHTMLViewer.on_create_contents = function ()
    {
        var control = this.getElement();
        if (control)
        {
			this._web_elem = new nexacro.WebBrowserPluginElement(control);
			this._web_elem.setElementPosition(0, 0);
			this._web_elem.setElementSize(this._client_width, this._client_height);
		}
    };

    _pHTMLViewer.on_created_contents = function ()
    {
        var web_elem = this._web_elem;
        if (web_elem)
        {
			web_elem.component = this;
			 
            web_elem.create();
            web_elem.initEvent();
		   
            nexacro._observeSysEvent(web_elem._handle, "mouseover", "onmouseover", this._web_elem_mouseover);
			
			this._blockLoadFlag = false;
			web_elem._setUrl("about:blank");
        }
        
        this._init_left = this.left;
        this._init_top = this.top;
        this._init_width = this.width;
        this._init_height = this.height;
        this._init_right = this.right;
        this._init_bottom = this.bottom;
    };

    _pHTMLViewer.on_destroy_contents = function ()
    {
        var web_elem = this._web_elem;
        if (web_elem) 
        {
            nexacro._stopSysObserving(web_elem._handle, "mouseover", "onmouseover", this._web_elem_mouseover);
            web_elem.destroy();
            this._web_elem = null;
        }
    };
	
    _pHTMLViewer.on_change_containerRect = function (width, height)
    {
    };
	
	// nexacro.WebBrowserPluginElement 
	_pHTMLViewer.on_load_handler = function(docurl) 
	{
		// reload loop block for ie
		if ( this._blockLoadFlag ) 
		{
			return;
		}	
		this._blockLoadFlag = true;
		
		var doc = this._web_elem.getProperty("document");		
		if ( !doc._handle )
		{
			doc = this._web_elem.getProperty("contentDocument");
			if ( !doc._handle )
			{
				doc = this._web_elem.getProperty("contentWindow").getProperty("document");
			}
		}
		
		if ( doc )
		{
			this._doc = doc;
			
			// 아래 처리를 html 로 생성하여 document.write 를 호출하여 적용하면  iframe(PluginObject) 의 contentWindow 접근이 안된다.
			var body = '<div id="container"><iframe id="ifm" scrolling="no" frameborder="0" style="position: absolute; left: 0px; top: 0px; width: 0px; height: 0px; overflow:hidden;"></iframe></div>';
			
			doc.getProperty("body").setProperty("innerHTML", body);

			var style = doc.getProperty("body").getProperty("style");
			style.setProperty("margin", "0px");
			style.setProperty("border", "0px");
			style.setProperty("position", "absolute");
			style.setProperty("width", "100%");
			style.setProperty("height", "100%");
			style.setProperty("overflow", "hidden");
			
			var ifm = doc.callMethod("getElementById", "ifm");
			var ifmWin = ifm.getProperty("contentWindow");				
			var ifmDoc = ifm.getProperty("contentDocument");
			if ( !ifmDoc )
			{
				ifmDoc = ifmWin.getProperty("document");
			}
			
			if ( ifmDoc )
			{
				this._contentDoc = ifmDoc;
			}
			else
			{
				trace("no found document !!");
			}

			if ( nexacro.Browser == "Runtime" )
			{			
				var win = doc.getProperty("parentWindow");
				if ( !win ) 
				{
					win = doc.getProperty("defaultView");
				}
				
				// 지정된 html 속성을 적용하기 바로 컨텐츠를 넣으면 제대로 동작하지 않는다.
				// iframe 의 컨텐츠 로딩 완료되는 시점등을 고려하여 아래 코드로 처리한다. 
				// 런타임의 경우 최초로 빈 컨텐츠를 넣어 주어야 onload 시점이 제대로 동작한다.
				var script = '';
					script += 'var ifm = document.getElementById("ifm");';					
					script += 'var func = function(evt){';
					script += '		var el = evt ? evt.target : event.srcElement;';
					script += '		if ( el._checkReady ) {';
					script += '			el._checkReady = false;';
					script += '			document.title = "__readyIframe";';
					script += '		} else { ';
					script += '			setTimeout(function(){';
					script += '				el.style.width = el.contentWindow.document.body.scrollWidth;';
					script += '				el.style.height = el.contentWindow.document.body.scrollHeight;';
					script += '				document.title = "__loadComplete";';
					script += '			}, 10);';
					script += '		} ';
					script += '};';
					script += 'ifm.onload = func;';
					script += 'ifm._checkReady = true;';
					script += 'var ifmDoc = ifm.contentWindow.document;';
					script += 'ifmDoc.open();';
					script += 'ifmDoc.write("<div></div>");';
					script += 'ifmDoc.close();';
					
					// html 전송을 위한 element 추가
					script += 'var el = document.createElement("textarea");';
					script += ' el.id = "txt";';
					script += ' el.style.display = "none";';
					script += '	document.body.appendChild(el);';			

				// 위 script 를 document.head 에 추가할 수 없다.
				// 따라서 실행을 위해 setTimeout 을 사용함 (eval 은 동작하지 않는다)
				win.callMethod("setTimeout", "(function(){"+script+"})()", 0);
			}
			else
			{
				var _handle = this._web_elem._handle;
				var ifm = (_handle.contentDocument || _handle.contentWindow.document).getElementById("ifm");				
				ifm._component = this;
				
				nexacro._observeSysEvent(ifm, "load", "onload", this._web_elem_iframe_onload);
				
				this.on_fire_onusernotify(this._web_elem, "__readyIframe");
			}
		}
		else
		{
			trace("no found document !!");
		}
	};
		
	// nexacro.WebBrowserPluginElement 
	_pHTMLViewer.on_fire_onusernotify = function (obj, userdata) 
    {
		if ( userdata == "__readyIframe" )
		{
			if ( !this.__readyIframe )
			{
				this.__readyIframe = true;
				
				if ( this.html != null && this.html.length > 0 )
				{
					this.on_apply_html();
				}
			}
		}
		else if ( userdata == "__loadComplete" )
		{
			this._onloadcompleted();
		}
		return true;
	};
	
	// nexacro.WebBrowserPluginElement 
	_pHTMLViewer.on_fire_onloadcompleted = function (obj, html) 
    {
		if (this.onloadcompleted && this.onloadcompleted._has_handlers) 
        {
		    var evt = new nexacro.HTMLViewerLoadCompletedEventInfo(obj, html);
			evt.eventid = "onloadcompleted";
			return this.onloadcompleted._fireEvent(this, evt);
		}
		return true;
	};
	
    //===============================================================
    // nexacro.HTMLViewer : Override (Except for Style, Events, Properties, Methods)
    //===============================================================
    _pHTMLViewer.on_getBindableProperties = function ()
    {
        return "html";
    };
    
    _pHTMLViewer.on_init_bindSource = function (columnid, propid, ds)
    {
        if (propid == "html")
        {
            this.set_html("");
            return true;
        }
    };    

    _pHTMLViewer.on_change_bindSource = function (propid, ds, row, col, index)
    {
        if (propid == "html")
        {
			this.set_html(ds.getColumn(row, col));
			return true;
        }

        return false;
    };

    _pHTMLViewer.on_hscroll = function (obj, e)
    {
        if (this.onhscroll && this.onhscroll._has_handlers)
        {
            e.fromobject = this;
            this.onhscroll._fireEvent(this, e);
        }
        var control_elem = this._control_element;
        if (control_elem)
        {
            control_elem.setElementHScrollPos(e.pos);
        }
        return true;
    };

    _pHTMLViewer.on_vscroll = function (obj, e)
    {
        if (this.onvscroll && this.onvscroll._has_handlers)
        {
            e.fromobject = this;
            this.onvscroll._fireEvent(this, e);
        }
        var control_elem = this._control_element;
        if (control_elem)
        {
            control_elem.setElementVScrollPos(e.pos);
        }
        return true;
    };
    
    // ====================================================================
    // nexacro.HTMLViewer : define(override) Properties
    // ====================================================================
	_pHTMLViewer.set_html = function (v)
	{
		if (v != this.html)
		{
			this.html = v;
			this.on_apply_html();
		}
	};

    _pHTMLViewer.on_apply_html = function ()
    {
        var web_elem = this._web_elem;
        if ( web_elem && this._is_created && this._doc )
        {
            var html = this.html;
            
            if (nexacro._isNull(html))
            {
                html = "";
            }
            else
            {
                html = nexacro._toString(html);
            }
			
			if ( html.length == 0 )
			{
				html = "<body></body>";
			}
            
			web_elem.setElementSize(0, 0);
			
			if ( nexacro.Browser == "Runtime" )
			{
				// html 지정
				this._doc.callMethod("getElementById", "txt").setProperty("value", html);
				
				var script = '';
					script += 'var ifm = document.getElementById("ifm");';
					script += 'ifm.style.width = "10px";';
					script += 'ifm.style.height = "10px";';
					script += 'var doc = ifm.contentDocument || ifm.contentWindow.document;';
					script += 'document.title = "";';
					script += 'doc.open();';
					script += 'doc.write(document.getElementById("txt").value);';
					
					script += 'var style = doc.body.style;';
					script += 'style.border = "0px";';
					script += 'style.margin = "0px";';
					script += 'style.position = "absolute";';
					script += 'style.width = "auto";';
					script += 'style.height = "auto";';
					script += 'style.overflow = "hidden";';
					
					var padding = this.on_find_CurrentStyle_padding(this._pseudo);
					if ( padding )
					{
						var str = padding.top + "px " + padding.right + "px " + padding.bottom + "px " + padding.left + "px ";						
						script += 'style.padding = "'+str+'";';
					}
					script += 'doc.close();';
				
				var win = this._doc.getProperty("parentWindow");
				if ( !win ) 
				{
					win = this._doc.getProperty("defaultView");
				}
				
				win.callMethod("setTimeout", "(function(){ "+ script +" })()", 0);
			}
			else
			{
				var _handle = this._web_elem._handle;
				var ifm = (_handle.contentDocument || _handle.contentWindow.document).getElementById("ifm");
				var doc = ifm.contentDocument || ifm.contentWindow.document;
				
				ifm.style.width = "10px";
				ifm.style.height = "10px";
				
				doc.open();
				doc.write(html);
				
				var style = doc.body.style;
				style.border = "0px";
				style.margin = "0px";
				style.position = "absolute";
				style.width = "auto";
				style.height = "auto";
				style.overflow = "hidden";
				
				var padding = this.on_find_CurrentStyle_padding(this._pseudo);
				if ( padding )
				{
					var str = padding.top + "px " + padding.right + "px " + padding.bottom + "px " + padding.left + "px ";						
					style.padding = str;
				}
				
				doc.close();
			}
        }
    };
    
	_pHTMLViewer.set_autofittype = function (v)
	{
		if (v != this.autofittype)
		{
			if ( nexacro._isNull(v) )
			{
				v = "none";
			}
			this.autofittype = v;
			this.on_apply_autofittype();
		}
	};

    _pHTMLViewer.on_apply_autofittype = function ()
    {
        var web_elem = this._web_elem;
        if ( web_elem && this._is_created )
        {
            this._updateDisplay();
        }
    };

    // ====================================================================
    // nexacro.HTMLViewer : define(override) Methods
    // ====================================================================
	_pHTMLViewer.set_enable = function (v)
	{
	    v = nexacro._toBoolean(v);
	    if (this.enable != v)
	    {
	        var control_elem = this._control_element;
	        this.enable = v;

	        if (this._is_created)
	        {
	            var enable_flag = (this.parent._real_enable && v);
	            if (this._real_enable != enable_flag)
	            {
	                this._real_enable = enable_flag;
	                this._stat_change(enable_flag ? "enable" : "disable", this._pseudo);
	                this.on_apply_prop_enable(this._real_enable);
	                if (this._web_elem)
	                {
	                    this._web_elem.setElementEnable(enable_flag);
	                }      
	            }
	        }
	    }
	};	
	
	_pHTMLViewer.set_scrollbars = function(v)
	{
		nexacro.Component.prototype.set_scrollbars.call(this, v);
		
		this._updateDisplay();
	};
		
    // ====================================================================
    // nexacro.HTMLViewer : define(override) Event Handlers
    // ====================================================================    
    
    // ====================================================================
    // nexacro.HTMLViewer : internal methods
    // ====================================================================		    
	_pHTMLViewer._web_elem_mouseover = function (evt)
	{
	    nexacro._cur_drag_info = null;
	    nexacro._cur_track_info = null;
	};
	
	_pHTMLViewer._web_elem_iframe_onload = function (evt) 
    {
		// this ==> 브라우저 버전별로 다르다..
		var el = evt.target || evt.srcElement;
		el._component._onloadcompleted();
	};	
	    
    _pHTMLViewer._onloadcompleted = function ()
    {
		var web_elem = this._web_elem;
		if ( web_elem )
		{   
			this.on_fire_onloadcompleted(this, this.html);
			
			this._setElementSize();

			this._updateDisplay();
			
			// wheel scroll 동작을 위해 추가
			if ( nexacro.Browser == "Runtime" )
			{
				// 자체 동작함.
			}
			else
			{
				// body 가 매번 변경되므로 계속 지정
				var win = window;
				var control = this.getElement();
				var handler = function(evt) {
					nexacro._syshandler_onmousewheel(win.nexacro_HTMLSysEvent, control._handle, evt);
				};
				
				var contentDoc = this._contentDoc;
				var bodyPlugin = contentDoc.getProperty("body");
				var body = bodyPlugin._handle;
				
				if ( 'onwheel' in body )
				{
					nexacro._observeSysEvent(body, "wheel", "onwheel", handler);
				}
				else
				{
					nexacro._observeSysEvent(body, "mousewheel", "onmousewheel", handler);
				}
				
				nexacro._observeSysEvent(body, "DOMMouseScroll", "onDOMMouseScroll", handler);	// for FireFox
			}
		}
    };
    
    _pHTMLViewer._setElementSize = function ()
    {
		var web_elem = this._web_elem;
		if ( web_elem )
		{   
			var contentDoc = this._contentDoc;
			var body = contentDoc.getProperty("body");
			
			this._content_width = body.getProperty("scrollWidth");
			this._content_height = body.getProperty("scrollHeight");
			
			var ifm = this._doc.callMethod("getElementById", "ifm");
			ifm.getProperty("style").setProperty("width", this._content_width + "px");
			ifm.getProperty("style").setProperty("height", this._content_height + "px");
			
			web_elem.setElementSize(this._content_width, this._content_height);
		}
    };    
    
    _pHTMLViewer._updateDisplay = function ()
    {
		var control = this.getElement();
		var web_elem = this._web_elem;
		if ( control && web_elem )
		{
			var html = this.html;
			var autofittype = this.autofittype;
			var scrollbars = this.scrollbars;
			
			var pseudo = this._pseudo;
			var border = this.on_find_CurrentStyle_border(pseudo);
			var padding = this.on_find_CurrentStyle_padding(pseudo);
				
			var bw = (border ? border._getBorderWidth() : 0);
			var bh = (border ? border._getBorderHeight() : 0);
			
            var left = this.left;
            var top = this.top;
            var width = null;
            var height = null;
            var right = null;
            var bottom = null;
            	
			var hasVScroll = false;
			var hasHScroll = false;

			if ( autofittype == "both" )
			{
				width = this._content_width + bw;
				height = this._content_height + bh;
			}
			else if ( autofittype == "width" )
			{
				width = this._content_width + bw;				
				height = this._init_height;
				
				if ( scrollbars != "none" && this._content_height + bh > height )
				{
					hasVScroll = true;
				}
			}
			else if ( autofittype == "height" )
			{
				width = this._init_width;
				height = this._content_height + bh;
				
				if ( scrollbars != "none" && this._content_width + bw > width )
				{
					hasHScroll = true;
				}
			}
			else 
			{
				width = this._init_width;
				height = this._init_height;
				right = this._init_right;
				bottom = this._init_bottom;
			}
			
			if ( hasVScroll )
			{
				if (this.vscrollbar)
				{
					width += this.vscrollbar._adjust_width;
				}
				else
				{
					if ( !this._vscrollbar_size )
					{
						var vscrollbar = new nexacro.ScrollBarCtrl("vscrollbar", "absolute", 0, 0, nexacro.Component.SCROLLBAR_DEFAULT_SIZE, this._client_width, null, null, this);
						vscrollbar._setDirection("vert");
						vscrollbar.on_update_style_scrollbarsize();	
						this._vscrollbar_size = vscrollbar.scrollbarsize;
						vscrollbar.destroy();
						vscrollbar = null;
					}
					width += this._vscrollbar_size;
				}
			}
			
			if ( hasHScroll )
			{
				if (this.hscrollbar)
				{
					height += this.hscrollbar._adjust_height;
				}
				else
				{
					if ( !this._hscrollbar_size )
					{
						var hscrollbar = new nexacro.ScrollBarCtrl("hscrollbar", "absolute", 0, 0, nexacro.Component.SCROLLBAR_DEFAULT_SIZE, this._client_width, null, null, this);
						hscrollbar._setDirection("horz");
						hscrollbar.on_update_style_scrollbarsize();	
						this._hscrollbar_size = hscrollbar.scrollbarsize;
						hscrollbar.destroy();
						hscrollbar = null;
					}
					height += this._hscrollbar_size;
				}
			}

			this.move(left, top, width, height, right, bottom);
			
			var scrollWidth = this._content_width + bw;
			var scrollHeight = this._content_height + bh;

            if ( hasHScroll || (height == scrollHeight) )
            {				
                if (this.hscrollbar)
                {
                    scrollHeight -= this.hscrollbar._adjust_height;
                }
                else
                {
                    scrollHeight -= this._hscrollbar_size;
                }
            }

            if ( hasVScroll || (width == scrollWidth) )
            {
                if (this.vscrollbar)
                {
                    scrollWidth -= this.vscrollbar._adjust_width;
                }
                else
                {
                    scrollWidth -= this._vscrollbar_size;
                }
            }

            control.setElementScrollMaxSize(scrollWidth, scrollHeight);
            
			this._onResetScrollBar();
		}
	};

	delete _pHTMLViewer;
	
    // ====================================================================
    // nexacro.HTMLViewerCtrl
    // ====================================================================	
    nexacro.HTMLViewerCtrl = function (id, position, left, top, width, height, right, bottom, parent)
    {
        nexacro.HTMLViewer.call(this, id, position, left, top, width, height, right, bottom, parent);
        this._is_subcontrol = true;
    };
    var _pHTMLViewerCtrl = nexacro.HTMLViewerCtrl.prototype = nexacro._createPrototype(nexacro.HTMLViewer, nexacro.HTMLViewerCtrl);
    _pHTMLViewerCtrl._type_name = "HTMLViewerControl";

    nexacro._setForControlStyleFinder(_pHTMLViewerCtrl);
    delete _pHTMLViewerCtrl;
}