/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";const e=500;const n=200;const t=new Set;const s={};s.HOVER_DELAY_MS=e;s.HANDOFF_DELAY_MS=n;s.openSingle=function(i,o,c=false){const f=t.size>0&&!(t.size===1&&t.has(i));let r;if(!c){r=0}else if(f){r=n}else{r=e}if(f){s.closeOthers(i)}i.openBy(o,r)};s.close=function(n,t=false){if(!n){return}n.close(t?e:0)};s.closeOthers=function(e){t.forEach(t=>{if(t!==e){t.close(n)}})};s.registerOpening=function(e){t.add(e)};s.deregister=function(e){t.delete(e)};s._getRegistry=function(){return t};return s});
//# sourceMappingURL=TooltipManager.js.map