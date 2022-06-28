if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_tracemode("new");
        this.set_themeid("theme::argosWeb");
        this.set_userfontid("font::user_font.xfont");
        this.set_enableinspector("true");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefintion.xml");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "none", null, "", "0", "0");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "none", null, "", "0", "0");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "none", null, "", "0", "0");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "none", null, "", "0", "0");
        nexacro._addService("font", "file", "./_resource_/_font_/", "none", null, "", "0", "0");
        nexacro._addService("svcurl", "JSP", "http://14.42.209.174:2023", "none", null, "", "0", "0");
        nexacro._addService("img", "file", "./img/", "none", null, "", "0", "0");
        nexacro._addService("lib", "js", "./lib/", "none", null, "", "0", "0");
        nexacro._addService("lib_graph", "js", "./lib_graph/", "none", null, "", "0", "0");
        nexacro._addService("Frame", "form", "./Frame/", "none", null, "", "0", "0");
        nexacro._addService("Test", "form", "./Test/", "none", null, "", "0", "0");
        nexacro._addService("REPORT_URL", "form", "nshjugan", "none", null, "", "0", "0");
        nexacro._addService("FrameBase", "form", "./FrameBase/", "none", null, "", "0", "0");
        nexacro._addService("CM_POP", "form", "./CM_POP/", "none", null, "", "0", "0");
        nexacro._addService("CM", "form", "./CM/", "none", null, "", "0", "0");
        nexacro._addService("SM_POP", "form", "./SM_POP/", "none", null, "", "0", "0");
        nexacro._addService("NU", "form", "./NU/", "none", null, "", "0", "0");
        nexacro._addService("TabletFrame", "form", "./TabletFrame/", "none", null, "", "0", "0");
        nexacro._addService("TabletPOP", "form", "./TabletPOP/", "none", null, "", "0", "0");
        nexacro._addService("MobileFrame", "form", "./MobileFrame/", "none", null, "", "0", "0");
        nexacro._addService("MobilePOP", "form", "./MobilePOP/", "none", null, "", "0", "0");
        nexacro._addService("DAY", "form", "./DAY/", "none", null, "", "0", "0");
        nexacro._addService("DAY_POP", "form", "./DAY_POP/", "none", null, "", "0", "0");
        nexacro._addService("FILES", "form", "./FILES/", "none", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"Webbrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"UbiReport", "classname":"nexacro.UbiViewer", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"BasicChart", "classname":"nexacro.BasicChart", "type":"JavaScript"},
        		{"id":"GaugeChart", "classname":"nexacro.GaugeChart", "type":"JavaScript"},
        		{"id":"Camera", "classname":"nexacro.Camera", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"ImagePicker", "classname":"nexacro.ImagePicker", "type":"JavaScript"},
        		{"id":"BluetoothLE", "classname":"nexacro.BluetoothLE", "type":"JavaScript"},
        		{"id":"TCPClientSocket", "classname":"nexacro.TCPClientSocket", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables

        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script

					
    env = null;
}
