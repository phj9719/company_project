//==============================================================================
//	Define the code to be applied in the Form Design of nexacrostudio.
//==============================================================================
//==============================================================================
// Object : nexacro.timepicker
// Group : Component
//==============================================================================
if (nexacro.timepicker)
{
	//==============================================================================
	// nexacro.timepicker
	//==============================================================================
    var _ptimepicker = nexacro.timepicker.prototype;	
	
	/************************************************************************
	FUNCTION : createCssDesignContents
	DESCRIPTION : Set contents to be previewed in Css Editor of nexacrostudio.
	PARAMETER : void
	RETURN : void
	************************************************************************/
	_ptimepicker.createCssDesignContents = function ()
	{
		nexacro._CompositeComponent.prototype.createCssDesignContents.call(this);
		// TODO : enter your code here.
		
	};
 
    delete _ptimepicker;
}


