/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/TileContent"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,r){var n=r.getTooltip_AsString();var a=r.getSubheader();if(typeof n!=="string"){n=""}t.openStart("div",r);t.attr("role","presentation");t.attr("aria-label",n);t.class("sapMNwC");if(r.hasListeners("press")){t.class("sapMPointer");t.attr("tabindex","0")}t.openEnd();var i=r.getParent();var s=i instanceof e&&i._getPriorityBadge();var o=i instanceof e&&i._getAdditionalPriorityBadge();if(s||o){t.openStart("div");t.class("sapMNwCPriorityContainer");t.openEnd();if(s){t.renderControl(s)}if(o){t.renderControl(o)}t.close("div")}t.openStart("div",r.getId()+"-title");t.class("sapMNwCCTxt");if(!a){t.class("sapMNwCExtend")}t.openEnd();t.renderControl(r._oContentText);t.close("div");t.openStart("div",r.getId()+"-subheader");t.class("sapMNwCSbh");t.class("sapMNwCExtend");t.openEnd();t.renderControl(r._oSubHeaderText);t.close("div");t.close("div")};return t},true);
//# sourceMappingURL=NewsContentRenderer.js.map