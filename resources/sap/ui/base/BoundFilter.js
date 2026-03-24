/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject"],function(t){"use strict";const e=t.extend("sap.ui.base.BoundFilter",{metadata:{library:"sap.ui.core",properties:{value1:{type:"any",group:"Misc",defaultValue:null},value2:{type:"any",group:"Misc",defaultValue:null}}},constructor:function(e,i,n){this.oFilter=i;this.oBinding=n;t.call(this,e)}});e.prototype.getBinding=function(){return this.oBinding};e.prototype.setValue1=function(t){this.setProperty("value1",t);if(this.getBindingInfo("value1")){this.oFilter=this.oBinding._updateFilter(this.oFilter,t,this.getValue2())}return this};e.prototype.setValue2=function(t){this.setProperty("value2",t);if(this.getBindingInfo("value2")){this.oFilter=this.oBinding._updateFilter(this.oFilter,this.getValue1(),t)}return this};return e});
//# sourceMappingURL=BoundFilter.js.map