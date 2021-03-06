//XJS=sct_mainFrame.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib_graph::RGraph.common.core.xjs");
        this.addIncludeScript(path,"lib_graph::RGraph.bar.xjs");
        this.addIncludeScript(path,"lib_graph::RGraph.line.xjs");
        this.addIncludeScript(path,"lib_graph::RGraph.gauge.xjs");
        this.addIncludeScript(path,"lib_graph::RGraph.drawing.rect.xjs");
        this.registerScript(path, function() {
        this.executeIncludeScript("lib_graph::RGraph.common.core.xjs"); /*include "lib_graph::RGraph.common.core.xjs"*/
        this.executeIncludeScript("lib_graph::RGraph.bar.xjs"); /*include "lib_graph::RGraph.bar.xjs"*/
        this.executeIncludeScript("lib_graph::RGraph.line.xjs"); /*include "lib_graph::RGraph.line.xjs"*/
        this.executeIncludeScript("lib_graph::RGraph.gauge.xjs"); /*include "lib_graph::RGraph.gauge.xjs"*/
        this.executeIncludeScript("lib_graph::RGraph.drawing.rect.xjs"); /*include "lib_graph::RGraph.drawing.rect.xjs"*/

        this.gfn_makeBarGraph = function (div)
        {
        	var base = new nexacro.RGraph(this, div);
        	// -----------------------------------------------
        	// tooltip style 지정
        	// -----------------------------------------------
        	// common.core.xjs tooltipStyle 참고
        	// base.tooltipStyle.background = 'green';
        	// -----------------------------------------------

        	var data = [[17, 14, 9, 16, 28, 2], [22, 15, 19, 16, 12, 6], [18, 15, 21, 13, 11, 13], [17, 12, 12, 14, 22, 3]];
        	var key = ['계획', '목표', '실적', '불량', '예상매출', '생산성'];
        	var options = {
        		id : 'cvs',
        		data : data,
        		options : {
        			noaxes : true,
        			backgroundBarcolor2 : "#ffffff",
        			backgroundGridVlines : false,
        			backgroundGridBorder : false,
        			backgroundGridAutofitNumhlines : 3,
        			ylabelsCount : 3,
        			textColor : '#66666',
        			textSize : 10,
        			hmargin : 55,
        			hmarginGrouped : 2,
        			colors : ['#E30513', '#1C1C1B', '#86BC24', '#E5007D', '#2F8DCD', '#F9D900'],
        			labels : ['8월', '9월', '10월', '11월'],
        			unitsPost : ' %',
        			gutterLeft : 50,
        			gutterBottom : 65,
        			gutterTop : 65,
        			title : '계획/목표/실적/불량/예상매출/생산성 현황',
        			titleX : 50,
        			titleHalign : 'left',
        			titleColor : 'gray',
        			key : key,
        			// tooltips: tooltips,
        			// tooltipsEvent: 'mousemove',
        			keyPosition : 'gutter',
        			keyPositionY : div.getOffsetHeight() - 30,
        			keyTextSize : 12
        				// tooltipsHighlight: false
        		}
        	};
        	base.addChart("BAR", options).grow({
        		frames : 10
        	},
        		// animation 후 필요시 처리
        		function (obj)
        	{
        		var key = obj.get('key');
        		var tooltips = [];
        		var sFormat = "{1}: <b v='true'>{2} %</b>\n{3}: <b v='true'>{4} %</b>\n";
        		sFormat += "{5}: <b v='true'>{6} %</b>\n{7}: <b v='true'>{8} %</b>\n";
        		sFormat += "{9}: <b v='true'>{10} %</b>\n{11}: <b v='true'>{12} %</b>";
        		for (var i = 0; i < obj.data.length; i++)
        		{
        			tooltips.push(sFormat.format(
        				key[0], obj.data[i][0],
        				key[1], obj.data[i][1],
        				key[2], obj.data[i][2],
        				key[3], obj.data[i][3],
        				key[4], obj.data[i][4],
        				key[5], obj.data[i][5]
        			));
        		}
        		var oRact;
        		for (var i = 0,j = 0; i < obj.coords.length; i += 6, j++)
        		{
        			oRact = new nexacro.RGraph.Drawing_Rect(base, obj,
        				obj.coords[i][0] - 1,
        				// obj.get('gutterTop'),
        				obj.coords[i][1],
        				(obj.coords[i][2] * 6) + (10 * obj.get('hmarginGrouped')) + 2,
        				obj.canvas.height - obj.get('gutterTop') - obj.get('gutterBottom') - 50);

        			oRact.set("tooltips", [tooltips[j]]);
        			oRact.set("strokestyle", [255, 255, 255, 0.5]);
        			oRact.set("colors", "red");
        			oRact.set("tooltips.event", 'mousemove');
        			oRact.set("fillstyle", "transparent");
        			oRact.set("highlightStroke", "transparent");
        		}
        	});
        };

        this.gfn_makeLineGraph = function (div)
        {
        	// A Line chart in blue surrounded by a black box. The box is added after the main drawing by using the ondraw custom RGraph event.
        	var base = new nexacro.RGraph(this, div);
        	if (base.ISIE8)
        	{
        		alert("데이터 많음...취소함.");
        		return;
        	}
        	var data = [],tooltips = [];
        	var nCnt = 0;
        	for (var i = this.Dataset00.rowcount - 1; i >= 0; i--)
        	{
        		tooltips[nCnt] = this.Dataset00.getColumn(i, "Column0");
        		// data[nCnt] = this.Dataset00.getColumn(i,"Column1").valueOf();
        		data[nCnt] = this.Dataset00.getColumn(i, "Column1");
        		var d = new Date(base.parseDate(tooltips[nCnt]));
        		var month = d.getMonth();
        		var date = d.getDate();
        		var year = d.getFullYear();
        		var months = [
        			'January', 'February', 'March',
        			'April', 'May', 'June',
        			'July', 'August', 'September',
        			'October', 'November', 'December',
        		];
        		var append;
        		if (date === 1 || date === 21 || date === 31)
        		{
        			append = 'st';
        		}
        		else if (date === 2 || date === 22)
        		{
        			append = 'nd';
        		}
        		else if (date === 3 || date === 23)
        		{
        			append = 'rd';
        		}
        		else
        		{
        			append = 'th';
        		}
        		tooltips[nCnt] = "<fc v='green'> Last price:</fc>\n \n {1} {2}{5} {3}: <b v='true'>{4}  </b>".format(
        			months[month],
        			date,
        			year,
        			data[nCnt],
        			append
        		);
        		nCnt++;
        	}

        	base.tooltipStyle.border = '2px solid blue';
        	base.tooltipStyle.contentsBackground = '#ffffffdd';
        	var options = {
        		id : 'cvs',
        		data : data,
        		options : {
        			linewidth : 2,
        			backgroundGridVlines : false,
        			backgroundGridBorder : false,
        			backgroundGridAutofitNumhlines : 4,
        			noaxes : true,
        			ymax : 110,
        			ymin : 70,
        			tickmarks : false,
        			shadow : false,
        			ylabelsCount : 4,
        			gutterLeft : 50,
        			gutterRight : 50,
        			colors : ['#7CB5EC'],
        			title : '월별 생산공정',
        			titleYaxis : '라인별 총합',
        			titleYaxisPos : 0.15,
        			titleYaxisBold : false,
        			titleYaxisSize : 10,
        			tooltips : tooltips,
        			highlightStyle : 'halo',
        			labels : [
        				'', '', '2017-06',
        				'', '', '2017-07',
        				'', '', '2017-08',
        				'', '', '2017-09',
        				'', '', '2017-10',
        				'', '', '2017-11',
        				'', '', '2017-12',
        				'', '', '2018-01',
        				'', '', '2018-02',
        				'', '', '2018-03'
        			]
        		}
        	};
        	base.addChart("LINE", options).trace();
        };

        this.gfn_makeGauge = function (div)
        {
        	// An animated customised Pie chart
        	var base = new nexacro.RGraph(this, div);
        	var options = {
        		id : 'cvs',
        		min : -50,
        		max : 50,
        		value : 15,
        		options : {
        			shadowBlur : 10,
        			shadowColor : '#dddddd',
        			valueTextUnitsPost : 'mm',
        			tickmarksSmall : 50,
        			tickmarksMedium : 5,
        			tickmarksBig : 5,
        			labelsCounts : 10,
        			colorsRanges : [[-50, -45, 'red'], [-45, 40, 'yellow'], [-40, 40, '#ccffcc'], [40, 45, 'yellow'], [45, 50, 'red']]
        		}
        	};
        	base.addChart("GAUGE", options).grow();
        };

        this.gfn_openLayout = function ()
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);

        	var newChild = new ChildFrame;
        	newChild.init("layout", "absolute", nLeft, nTop, 1000, 470, null, null, "CM_POPUP::CM_LAYOUT.xfdl");

        	/*newChild.set_titletext("Layout Select");*/
        	newChild.set_autosize(true);
        	newChild.set_showtitlebar(false);
        	newChild.set_resizable(false);
        	newChild.set_openalign("center middle");
        	newChild.set_showstatusbar(false);
        	newChild.showModal(this.getOwnerFrame(), "", this, "fn_layoutCallback");
        };

        this.fn_layoutCallback = function (popupid, rtnVal)
        {
        	trace("리턴 벨류 : " + rtnVal);
        	if (rtnVal != "close")
        	{
        		rtnVal = rtnVal.substring(6, rtnVal.length);
        		trace("레이아웃 타입 : " + rtnVal);
        		this.fn_setDiv(rtnVal);
        	}
        	else
        	{
        		this.type = "";
        	}
        };

        this.gfn_make2BarGraph = function (div)
        {
        	var base = new nexacro.RGraph(this, div);
        	var options1 = {
        		id : 'cvs',
        		data : [[47, 75], [32, 74], [71, 85], [25, 19], [23, 71], [81, 59], [43, 130], [23, 20], [10, 20], [33, 60], [50, 40], [30, 70]],
        		options : {
        			textSize : 14,
        			gutterLeft : 45,
        			colors : ['#2BA723', '#87499C'],
        			labels : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        			ylabelsCount : 3,
        			numyticks : 6,
        			backgroundGridAutofitNumhlines : 3,
        			backgroundGridVlines : false,
        			backgroundGridBorder : false,
        			hmargin : 5,
        			strokestyle : '#00000000',
        			shadow : false
        		}
        	};
        	var bar = base.addChart("BAR", options1);
        	bar.on('draw', function (obj)
        	{
        		var len = obj.coords.length;

        		for (var i = 0; i < len; ++i)
        		{
        			var x = obj.coords[i][0];
        			var y = obj.coords[i][1];
        			var w = obj.coords[i][2] / 2;
        			var h = obj.coords[i][3];

        			obj.context.fillStyle = '#ffffff33';
        			base.setElementCommonStyle(obj.context, obj.context.fillStyle, 1);
        			obj.context.fillRect(x, y, w, h);
        		}
        	}).draw();
        };

        this.gfn_make2LineGraph = function (div)
        {
        	// A filled spline Line chart
        	var base = new nexacro.RGraph(this, div);
        	var options1 = {
        		id : 'cvs',
        		data : [
        			[100, 5, 1, 6, 3, 5, 2],
        			[7, 7, 8, 6, 2, 1, 1]
        		],
        		options : {
        			spline : true,
        			splineTickmarksFill : null,
        			splineTickmarksSize : 5,
        			colors : ['#2D3091', '#FBDE7D'],
        			splineTickmarksStroke : '#aaaaaa',
        			splineTickmarksLinewidth : 2,
        			linewidth : 2,
        			hmargin : 5,
        			labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        			tooltips : [
        				'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        				'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        			],
        			highlightStyle : 'halo',
        			tickmarks : 'circle'
        		}
        	};
        	base.addChart("LINE", options1).trace2({
        		frames : 10
        	});
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
