/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","./TableTitleRenderer"],function(e,a){"use strict";const t=e.extend("sap.m.TableTitle",{metadata:{library:"sap.m",interfaces:["sap.ui.core.ITitle","sap.ui.core.IShrinkable"],properties:{totalCount:{type:"int",group:"Appearance",defaultValue:0},selectedCount:{type:"int",group:"Appearance",defaultValue:0},showExtendedView:{type:"boolean",group:"Appearance",defaultValue:false},visible:{type:"boolean",group:"Appearance",defaultValue:true}},aggregations:{title:{type:"sap.m.Title",multiple:false}}},renderer:a});return t});
//# sourceMappingURL=TableTitle.js.map