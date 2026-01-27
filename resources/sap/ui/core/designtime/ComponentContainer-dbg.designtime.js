/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the Component Container
sap.ui.define([],
	function () {
		"use strict";

		return {
			associations: {
				component: {
					aggregationLike : true
				}
			},
			// These actions are available by default, but are not relevant for this control, so they must be explicitly disabled
			actions: {
				extendController: null,
				addXML: null
			}
		};
	});