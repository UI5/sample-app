/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./DateRange","./library","sap/ui/core/library"],function(a,e,p){"use strict";var r=e.CalendarDayType;var u=p.aria.HasPopup;var i=a.extend("sap.ui.unified.DateTypeRange",{metadata:{library:"sap.ui.unified",properties:{type:{type:"sap.ui.unified.CalendarDayType",group:"Appearance",defaultValue:r.Type01},secondaryType:{type:"sap.ui.unified.CalendarDayType",group:"Appearance",defaultValue:r.None},color:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},ariaHasPopup:{type:"sap.ui.core.aria.HasPopup",group:"Accessibility",defaultValue:u.None}}}});return i});
//# sourceMappingURL=DateTypeRange.js.map