/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides element sap.ui.core.CustomData.
sap.ui.define([
	'./Element'
], function(Element) {
	"use strict";

	const CustomData = Element.getMetadata().getAggregation("customData").defaultClass;

	return CustomData;

});