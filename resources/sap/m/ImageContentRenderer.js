/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){var a=e.hasListeners("press");var r=e.getDescription();var n=e.getTooltip_AsString();t.openStart("div",e);t.class("sapMImageContent");if(n){t.attr("title",n)}if(a){t.class("sapMPointer");t.attr("tabindex","0");t.attr("role","button");if(r){t.attr("aria-label",r)}}t.openEnd();var i=e.getAggregation("_content");if(i){i.addStyleClass("sapMImageContentImageIcon");t.renderControl(i)}t.close("div")};return t},true);
//# sourceMappingURL=ImageContentRenderer.js.map