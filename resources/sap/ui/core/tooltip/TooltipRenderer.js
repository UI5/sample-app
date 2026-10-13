/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer"],e=>{"use strict";const o=e.extend("sap.ui.core.TooltipRenderer",{apiVersion:2});o.render=function(e,o){e.openStart("div",o);e.class("sapUiCoreTooltip");if(o._sCalcedPos){e.class("sapUiCoreTooltip-"+o._sCalcedPos)}e.attr("tabindex","-1");e.attr("role","dialog");e.attr("aria-modal","true");e.openEnd();e.openStart("span",o.getId()+"-arrow");e.class("sapUiCoreTooltipArrow");e.openEnd();e.close("span");e.openStart("div",o.getId()+"-cont");e.class("sapUiCoreTooltipCont");e.openEnd();e.openStart("span");e.class("sapUiCoreTooltipText");e.openEnd();e.text(o.getText());e.close("span");e.close("div");e.close("div")};return o});
//# sourceMappingURL=TooltipRenderer.js.map