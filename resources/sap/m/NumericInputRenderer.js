/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var n=t._getInput(),a=t.getWidth(),r=t.getEnabled(),s=t.getEditable(),i=t.getValueState();e.openStart("div",t);e.style("width",a);e.class("sapMNumericInput");e.class("sapMNumericInput-CTX");!r&&e.class("sapMNumericInputReadOnly");!s&&e.class("sapMNumericInputNotEditable");if(i==="Error"||i==="Warning"){e.class("sapMNumericInput"+i)}e.openEnd();e.renderControl(n);e.close("div")};return e},true);
//# sourceMappingURL=NumericInputRenderer.js.map