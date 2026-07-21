/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./MonthlyRecurrenceRule"],function(e){"use strict";const t=e.extend("sap.ui.unified.YearlyRecurrenceRule",{metadata:{library:"sap.ui.unified"}});t.prototype.setMonth=function(e){if(e<-1||e>11){throw new Error("month must be between 0 and 11")}return this.setProperty("month",e)};return t});
//# sourceMappingURL=YearlyRecurrenceRule.js.map