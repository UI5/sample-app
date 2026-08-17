/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t=/^[0-9]+(?:\.([0-9]+)(?:\.([0-9]+))?)?(.*)$/;function n(r,e,i,u){if(r instanceof n){return r}if(!(this instanceof n)){return new n(r,e,i,u)}var o;if(typeof r==="string"){o=t.exec(r)}else if(Array.isArray(r)){o=r}else{o=arguments}o=o||[];function f(t){t=parseInt(t);return isNaN(t)?0:t}r=f(o[0]);e=f(o[1]);i=f(o[2]);u=String(o[3]||"");this.toString=function(){return r+"."+e+"."+i+u};this.getMajor=function(){return r};this.getMinor=function(){return e};this.getPatch=function(){return i};this.getSuffix=function(){return u};this.compareTo=function(t,o,f,s){var a=n.apply(null,arguments);return r-a.getMajor()||e-a.getMinor()||i-a.getPatch()||(u<a.getSuffix()?-1:u===a.getSuffix()?0:1)}}n.prototype.inRange=function(t,n){return this.compareTo(t)>=0&&this.compareTo(n)<0};return n});
//# sourceMappingURL=Version.js.map