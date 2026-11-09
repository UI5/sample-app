/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([], function () {
	"use strict";

	/**
	 * <code>StepInput</code> renderer.
	 * @namespace
	 */
	var StepInputRenderer = {
		apiVersion: 2
	};

	StepInputRenderer.render = function (oRm, oControl) {
		var oNumericInput = oControl._getNumericInput();

		oRm.openStart("div", oControl);
		oRm.class("sapMStepInput");
		oRm.openEnd();

		oRm.renderControl(oNumericInput);

		oRm.close("div");
	};

	return StepInputRenderer;

}, /* bExport= */ true);
