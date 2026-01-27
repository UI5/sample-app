/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(t){"use strict";var e={apiVersion:2};e.render=function(e,r){var i=t.getResourceBundleFor("sap.ui.core"),n=i.getText("BUSY_TEXT");if(!r.getHasContent()){return}e.openStart("div",r).class("sapFCardContentPlaceholder").attr("tabindex","0");if(r.getWidth()){e.style("width",r.getWidth())}this.addOuterAttributes(r,e);if(r.getRenderTooltip()){e.attr("title",n)}e.accessibilityState(r,{role:"progressbar",valuemin:"0",valuemax:"100"});e.openEnd();this.renderContent(r,e);e.close("div")};e.addOuterAttributes=function(t,e){};e.renderContent=function(t,e){};return e},true);
//# sourceMappingURL=PlaceholderBaseRenderer.js.map