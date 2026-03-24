/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","./TitleRenderer"],function(e,t){"use strict";const a=e.extend("sap.m.table.Title",{metadata:{library:"sap.m",interfaces:["sap.ui.core.ITitle","sap.ui.core.IShrinkable"],properties:{totalCount:{type:"int",group:"Appearance",defaultValue:0},selectedCount:{type:"int",group:"Appearance",defaultValue:0},showExtendedView:{type:"boolean",group:"Appearance",defaultValue:false},visible:{type:"boolean",group:"Appearance",defaultValue:true}},aggregations:{title:{type:"sap.m.Title",multiple:false}}},renderer:t});return a});
//# sourceMappingURL=Title.js.map