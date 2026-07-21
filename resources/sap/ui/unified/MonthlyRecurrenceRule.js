/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./RecurrenceRule"],function(e){"use strict";const t=e.extend("sap.ui.unified.MonthlyRecurrenceRule",{metadata:{library:"sap.ui.unified"}});t.prototype.setDayOfWeek=function(e){if(e<0||e>6){throw new Error("dayOfWeek must be between 0 (Sunday) and 6 (Saturday)")}return this.setProperty("dayOfWeek",e)};return t});
//# sourceMappingURL=MonthlyRecurrenceRule.js.map