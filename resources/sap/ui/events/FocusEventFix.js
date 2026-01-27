/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";const e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){if(document.hasFocus()){e.apply(this,arguments)}else{const t=document.activeElement;let s=false;const n=()=>{s=true};this.addEventListener("focusin",n,{once:true});e.apply(this,arguments);this.removeEventListener("focusin",n);if(!s&&this!==t){t?.dispatchEvent(new FocusEvent("focusout",{bubbles:true}));t?.dispatchEvent(new FocusEvent("blur",{bubbles:false}));this.dispatchEvent(new FocusEvent("focusin",{bubbles:true}));this.dispatchEvent(new FocusEvent("focus",{bubbles:false}))}}}});
//# sourceMappingURL=FocusEventFix.js.map