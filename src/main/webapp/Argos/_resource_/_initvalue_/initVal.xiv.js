if (nexacro_init)
{
    nexacro_init.Calendariv_cal_yyyy = function(obj)
    {
    	obj.set_dateformat("yyyy");
    	obj.set_popuptype("none");
    	obj.set_type("spin");
    	obj.set_editformat("yyyy");
    };

    nexacro_init.Calendariv_cal_yyyyMM = function(obj)
    {
    	obj.set_dateformat("yyyy-MM");
    	obj.set_popuptype("none");
    	obj.set_editformat("yyyy-MM");
    };

    nexacro_init.Calendariv_cal_yyyyMMddddd = function(obj)
    {
    	obj.set_dateformat("yyyy.MM.dd (ddd)");
    };

    nexacro_init.Calendariv_cal_dot = function(obj)
    {
    	obj.set_dateformat("yyyy.MM.dd");
    	obj.set_editformat("yyyy.MM.dd");
    };
}
