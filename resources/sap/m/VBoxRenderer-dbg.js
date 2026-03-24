/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	'./FlexBoxRenderer',
	'sap/ui/core/Renderer'
], function(FlexBoxRenderer, Renderer) {
	"use strict";

	return Renderer.extend.call(FlexBoxRenderer, "sap.m.VBoxRenderer", { apiVersion: 2 });
}, /* bExport= */ true);
