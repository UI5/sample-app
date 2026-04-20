/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_AggregationHelper"],function(e){"use strict";return{enhanceCache:function(t,n,s,r){var i;t.getResourcePathWithQuery=function(t,s){const o=this.aElements.$created;if(t<o){throw new Error("Must not request created element")}t-=o;const u={...this.mQueryOptions,$skip:t,$top:s};const a=this.getExclusiveFilter();if(a){const e=u.$$filterBeforeAggregate;u.$$filterBeforeAggregate=e?"("+e+") and "+a:a}const c=e.buildApply(n,u,1,i,r);i=true;return this.sResourcePath+this.oRequestor.buildQueryString(this.sMetaPath,c,false,true)};t.handleResponse=function(e){s.forEach(function(t){var n;if(t){n=e.value.shift();if("UI5__count"in n){e["@odata.count"]=n.UI5__count}t(n)}});delete this.handleResponse;return this.handleResponse.apply(this,arguments)}}}},false);
//# sourceMappingURL=_ConcatHelper.js.map