/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.unified.WeeklyRecurrenceRule.
sap.ui.define([
	"./RecurrenceRule"
], function(RecurrenceRule) {
	"use strict";

	/**
	 * Constructor for a new <code>WeeklyRecurrenceRule</code>.
	 *
	 * @param {string} [sId] ID for the new element, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new element
	 *
	 * @class
	 * Concrete recurrence rule for <code>Weekly</code> recurrence.
	 * Created internally by the parent when a {@link sap.ui.unified.RecurrenceRule} DTO
	 * with <code>recurrenceType</code> set to <code>Weekly</code> is provided.
	 *
	 * @extends sap.ui.unified.RecurrenceRule
	 * @version 1.151.0
	 *
	 * @constructor
	 * @private
	 * @ui5-experimental-since 1.149
	 * @alias sap.ui.unified.WeeklyRecurrenceRule
	 */
	const WeeklyRecurrenceRule = RecurrenceRule.extend("sap.ui.unified.WeeklyRecurrenceRule", {
		metadata: {
			library: "sap.ui.unified"
		}
	});

	return WeeklyRecurrenceRule;
});
