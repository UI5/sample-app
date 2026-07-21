/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/core/Renderer","./InputBaseRenderer"],function(e,t,i){"use strict";var r=t.extend(i);r.apiVersion=2;r.getAccessibilityState=function(t){var r=e.getResourceBundleFor("sap.m"),s=r.getText("MASKINPUT_ROLE_DESCRIPTION"),n=i.getAccessibilityState.apply(this,arguments);n["roledescription"]=s;if(t.getValueStateLinksForAcc().length){const e=t.getValueStateLinksShortcutsId();const i=n["describedby"]&&n["describedby"].value;n["describedby"]={value:i?i+" "+e:e,append:true}}return n};return r},true);
//# sourceMappingURL=MaskInputRenderer.js.map