/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};var i=function(i,t){if(typeof i==="boolean"){t=i;i=null}var o=i||"#DEFAULT";if(t){if(i){delete e[i]}else{e={}}}if(e[o]){return e[o]}if(!document.body){return{width:0,height:0}}var r=document.createElement("div");r.style.cssText="visibility:hidden;height:0;width:0;overflow:hidden;";if(i){r.className=i}document.body.insertBefore(r,document.body.firstChild);var d=document.createElement("div");d.style.cssText="visibility:visible;position:absolute;height:100px;width:100px;overflow:scroll;opacity:0;";r.appendChild(d);var l=d.checkVisibility?.();var h=d.offsetWidth-d.scrollWidth;var n=d.offsetHeight-d.scrollHeight;document.body.removeChild(r);if(!l){return{width:h,height:n}}e[o]={width:h,height:n};return e[o]};return i});
//# sourceMappingURL=getScrollbarSize.js.map