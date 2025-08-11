/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/ChangeReason","sap/ui/model/ClientPropertyBinding","sap/base/util/deepEqual"],function(t,e,s){"use strict";var i=e.extend("sap.ui.model.json.JSONPropertyBinding",{constructor:function(t,s,i,a){e.apply(this,arguments);if(this.isRelative()){this.sPreviousResolvedPath=this.getResolvedPath()}}});i.prototype.setValue=function(e){if(this.bSuspended){return}if(!s(this.oValue,e)){if(this.oModel.setProperty(this.sPath,e,this.oContext,true)){this.oValue=e;this.getDataState().setValue(this.oValue);this.oModel.firePropertyChange({reason:t.Binding,path:this.sPath,context:this.oContext,value:e})}}};i.prototype.checkUpdate=function(e){if(this.bSuspended&&!e){return}var i=this._getValue();if(!s(i,this.oValue)||this.isRelative()&&this.sPreviousResolvedPath!==this.getResolvedPath()||e){this.oValue=i;this.getDataState().setValue(this.oValue);this.checkDataState();this.sPreviousResolvedPath=this.getResolvedPath();this._fireChange({reason:t.Change})}};return i});
//# sourceMappingURL=JSONPropertyBinding.js.map