/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/security/encodeXML"],function(n){"use strict";function e(n){const e=[];const t=[];let o=0;for(const s of n){const n=s.toLowerCase();const r=o+s.length;for(let s=0;s<n.length;s++){e.push(o);t.push(r)}o=r}return{aLowerIndexToOriginalStart:e,aLowerIndexToOriginalEnd:t}}const t=function(t,o,s){t=t||"";o=o||"";const r=t.toLowerCase();const c=o.toLowerCase();const i=c.length;let a=r.indexOf(c);if(!i||a===-1){return n(t)}const l=e(t);let u="";let d=0;while(a>-1){const e=l.aLowerIndexToOriginalStart[a];const o=l.aLowerIndexToOriginalEnd[a+i-1];u+=n(t.slice(d,e))+'<span class="'+s+'">'+n(t.slice(e,o))+"</span>";d=o;a=r.indexOf(c,a+i)}u+=n(t.slice(d));return u};return t});
//# sourceMappingURL=highlightText.js.map