
//==============================================================================
//Standard17
//==============================================================================

//==============================================================================
//nexacro.Event.StandardEventInfo
//Standard에 요청된 작업이 성공했을 때 발생되는 이벤트에서 사용되는 EventInfo Object
//==============================================================================

if(!nexacro.Event.StandardEventInfo)
{
    nexacro.Event.StandardEventInfo = function (strEventId, strSvcId, intReason, strReturnValue)
    {
        this.eventid = strEventId;                                              // 이벤트ID
        this.svcid = strSvcId;                                                  // 이벤트 서비스 ID
        this.reason = intReason;                                                // 이벤트 발생분류 코드
        this.returnvalue = strReturnValue;                                      // 이벤트 수행결과 (type:Variant)
    }
    _pStandardEventInfo = nexacro.Event.StandardEventInfo.prototype = nexacro._createPrototype(nexacro.Event);
    _pStandardEventInfo._type = "nexacroStandardEventInfo";
    _pStandardEventInfo._type_name = "StandardEventInfo";
    _pStandardEventInfo = null;
}

//==============================================================================
//nexacro.Event.StandardErrorEventInfo
//Standard에 요청된 작업이 실패했을 때 발생되는 이벤트에서 사용되는 EventInfo Object
//==============================================================================
if(!nexacro.Event.StandardErrorEventInfo)
{
    nexacro.Event.StandardErrorEventInfo = function (strEventId, strSvcId, intReason, intErrorCode, strErrorMsg)
    {
        this.eventid = strEventId;                                              // 이벤트ID
        this.svcid = strSvcId;                                                  // 이벤트 서비스 ID
        this.reason = intReason;
        this.errorcode = intErrorCode;
        this.errormsg = strErrorMsg;

    }
    _pStandardErrorEventInfo = nexacro.Event.StandardErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event);
    _pStandardErrorEventInfo._type = "nexacroStandardErrorEventInfo";
    _pStandardErrorEventInfo._type_name = "StandardErrorEventInfo";
    _pStandardErrorEventInfo = null;
}

//==============================================================================
//nexacro.Standard
//Standard를 연동하기 위해 사용한다.
//==============================================================================
if (!nexacro.Standard)
{
    nexacro.Standard = function(name, obj)
    {
        this._id = nexacro.Device.makeID();
        nexacro.Device._userCreatedObj[this._id] = this;
        this.name = name || "";

        this.enableevent = true;

        this.timeout = 10;

        this._clsnm = ["StandardPlugin"];
        this._reasoncode = {
            constructor : {ifcls: 0, fn: "constructor"},
            destroy     : {ifcls: 0, fn: "destroy"},

            callMethod  : {ifcls: 0, fn: "callMethod"},
        };

        this._event_list = {
            "on_callback": 1,
            "on_resume": 1,
            "on_permission_result": 1,
        };

        // native constructor
        var params = {} ;
        var fninfo = this._reasoncode.constructor;
        this._execFn(fninfo, params);
    };

    var _pStandard = nexacro.Standard.prototype = nexacro._createPrototype(nexacro._EventSinkObject);

    _pStandard._type = "nexacroStandard";
    _pStandard._type_name = "Standard";

    _pStandard.destroy = function()
    {
        var params = {};
        var jsonstr;

        delete nexacro.Device._userCreatedObj[this._id];

        var fninfo = this._reasoncode.destroy;
        this._execFn(fninfo, params);
        return true;
    };

    //===================User Method=========================//
    _pStandard.callMethod = function(methodid, param)
    {
        var fninfo = this._reasoncode.callMethod;

        var params = {};

        params.serviceid =  methodid;
        params.param     =  param;

        this._execFn(fninfo, params);
    };

    //===================Native Call=========================//
    _pStandard._execFn = function(_obj, _param)
    {
        if(nexacro.Device.curDevice == 0)
        {
            var jsonstr = this._getJSONStr(_obj, _param);
            this._log(jsonstr);
            nexacro.Device.exec(jsonstr);
        }
        else
        {
            var jsonstr = this._getJSONStr(_obj, _param);
            this._log(jsonstr);
            nexacro.Device.exec(jsonstr);
        }
    }

    _pStandard._getJSONStr = function(_obj, _param)
    {
        var _id = this._id;
        var _clsnm = this._clsnm[_obj.ifcls];
        var _fnnm = _obj.fn;
        var value = {};
        value.id = _id;
        value.div = _clsnm;
        value.method = _fnnm;
        value.params = _param;

        return  JSON.stringify(value);
    }

    _pStandard._log = function(arg)
    {
        if(trace) {
            trace(arg);
        }
    }


    //===================EVENT=========================//
    _pStandard._oncallback = function(objData) {
        var e = new nexacro.Event.StandardEventInfo("on_callback", objData.svcid, objData.reason, objData.returnvalue);
        this.$fire_oncallback(this, e);
    };
    _pStandard.$fire_oncallback = function (objStandard, eStandardEventInfo) {
        if (this.on_callback && this.on_callback._has_handlers) {
            return this.on_callback._fireEvent(this, eStandardEventInfo);
        }
        return true;
    };

    _pStandard._onresume = function(objData) {
        var e = new nexacro.Event.StandardEventInfo("on_resume", objData.svcid, objData.reason, objData.returnvalue);
        this.$fire_onresume(this, e);
    };
    _pStandard.$fire_onresume = function (objStandard, eStandardEventInfo) {
        if (this.on_resume && this.on_resume._has_handlers) {
            return this.on_resume._fireEvent(this, eStandardEventInfo);
        }
        return true;
    };

    _pStandard._onpermissionresult = function(objData) {
        var e = new nexacro.Event.StandardEventInfo("on_permission_result", objData.svcid, objData.reason, objData.returnvalue);
        this.$fire_onpermissionresult(this, e);
    };
    _pStandard.$fire_onpermissionresult = function (objStandard, eStandardEventInfo) {
        if (this.on_permission_result && this.on_permission_result._has_handlers) {
            return this.on_permission_result._fireEvent(this, eStandardEventInfo);
        }
        return true;
    };

    delete _pStandard;
}



