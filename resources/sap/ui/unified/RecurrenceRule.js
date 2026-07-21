/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","./library","./calendar/RecurrenceUtils"],function(e,t,r){"use strict";const u=t.RecurrenceRuleType;const a=t.WeekOfMonth;const i=e.extend("sap.ui.unified.RecurrenceRule",{metadata:{library:"sap.ui.unified",properties:{recurrenceType:{type:"sap.ui.unified.RecurrenceType",group:"Behavior"},days:{type:"int[]",defaultValue:[]},type:{type:"sap.ui.unified.RecurrenceRuleType",group:"Behavior",defaultValue:u.DayOfMonth},dayOfMonth:{type:"int",group:"Behavior",defaultValue:0},weekOfMonth:{type:"sap.ui.unified.WeekOfMonth",group:"Behavior",defaultValue:a.First},dayOfWeek:{type:"int",group:"Behavior",defaultValue:0},month:{type:"int",group:"Behavior",defaultValue:-1}}}});i.prototype.setDays=function(e){return this.setProperty("days",r._normalizeRecurrenceDays(e))};return i});
//# sourceMappingURL=RecurrenceRule.js.map