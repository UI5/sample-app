/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/ui/core/library"],function(e,t){"use strict";var i=t.TextDirection;var r={apiVersion:2};r.render=function(t,r){if(!r.aRBs){return}var a=r.aRBs.filter(function(e){return e.getVisible()});var n=r.getColumns();var s=r.getTextDirection();var o=e.getRTL();t.openStart("div",r).class("sapMRbG");if(n>1){if(n==a.length){t.class("sapMRbG1Row")}else{t.class("sapMRbGTab")}}if(r.getWidth()){t.style("width",r.getWidth())}if(r.getTooltip_AsString()){t.attr("title",r.getTooltip_AsString())}if(!o&&s!=i.Inherit){t.attr("dir",s.toLowerCase())}t.accessibilityState(r,{role:"radiogroup",required:r._isRequired()||undefined});t.openEnd();for(var l=0;l<n;l++){if(n>1&&n!=a.length){t.openStart("div").class("sapMRbGCol").openEnd()}for(var d=l;d<a.length;d=d+n){t.renderControl(a[d])}if(n>1&&n!=a.length){t.close("div")}}t.close("div")};return r},true);
//# sourceMappingURL=RadioButtonGroupRenderer.js.map