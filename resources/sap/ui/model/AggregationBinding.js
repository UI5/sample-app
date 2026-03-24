/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./FilterType"],function(t){"use strict";function e(){this.bBoundFilterUpdate=false}e.prototype._isBoundFilterUpdate=function(){return this.bBoundFilterUpdate};e.prototype._updateFilter=function(e,n,i){const o=e.cloneWithValues(n,i);let r=false;const p=this.aApplicationFilters.map(t=>{const n=t.cloneIfContained(e,o);r||=n!==t;return n});if(!r){throw new Error("Filter cannot be updated: Not found in binding's application filters")}this.bBoundFilterUpdate=true;this.filter(p,t.Application);this.bBoundFilterUpdate=false;return o};e.prototype.computeApplicationFilters=function(e,n){if(n===t.ApplicationBound){throw new Error("Binding has not been created for an aggregation of a control: Must not use filter type "+"ApplicationBound")}if(n===t.Control){throw new Error("Must not use filter type Control")}return e};function n(t){if(this){e.apply(this,arguments)}else{Object.assign(t,e.prototype)}}return n},false);
//# sourceMappingURL=AggregationBinding.js.map