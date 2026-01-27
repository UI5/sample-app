/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/Log"],function(e,t){"use strict";const n=e=>{t.info(`Keyboard event ${e.type} on target ${e.target.id} prevented by sap.m.Dialog during opening.`);e.stopPropagation();e.preventDefault()};const r={};r.preventOnce=function(e){if(!e){return}const t={capture:true,once:true};e.addEventListener("keypress",n,t);e.addEventListener("keyup",n,t)};r.restore=function(e){if(!e){return}const t={capture:true};e.removeEventListener("keypress",n,t);e.removeEventListener("keyup",n,t)};return r});
//# sourceMappingURL=PreventKeyboardEvents.js.map