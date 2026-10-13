/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([], () => {
	"use strict";

	/**
	 * A resolved physical side a popover / tooltip is anchored on.
	 *
	 * @enum {string}
	 * @private
	 * @ui5-restricted sap.m, sap.ui.core
	 * @alias sap.ui.core.popover.PopoverPhysicalSide
	 * @since 1.151
	 */
	const PopoverPhysicalSide = {

		/**
		 * Anchored above the opener.
		 * @private
		 * @ui5-restricted sap.m, sap.ui.core
		 */
		Top: "Top",

		/**
		 * Anchored below the opener.
		 * @private
		 * @ui5-restricted sap.m, sap.ui.core
		 */
		Bottom: "Bottom",

		/**
		 * Anchored to the physical left of the opener.
		 * @private
		 * @ui5-restricted sap.m, sap.ui.core
		 */
		Left: "Left",

		/**
		 * Anchored to the physical right of the opener.
		 * @private
		 * @ui5-restricted sap.m, sap.ui.core
		 */
		Right: "Right"
	};

	return Object.freeze(PopoverPhysicalSide);
});
