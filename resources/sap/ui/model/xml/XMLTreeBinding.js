/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/ClientTreeBinding","sap/base/util/each"],function(e,t){"use strict";var i=e.extend("sap.ui.model.xml.XMLTreeBinding");i.prototype.cloneData=function(){return e.CannotCloneData};i.prototype.getNodeContexts=function(e,i,n){if(!i){i=0}if(!n){n=this.oModel.iSizeLimit}var o=e.getPath();if(!o.endsWith("/")){o=o+"/"}if(!o.startsWith("/")){o="/"+o}var a=[],s={},d=this,r=this.oModel._getObject(e.getPath()),l,f;t(r[0].childNodes,function(e,t){if(t.nodeType==1){if(s[t.nodeName]==undefined){s[t.nodeName]=0}else{s[t.nodeName]++}l=o+t.nodeName+"/"+s[t.nodeName];f=d.oModel.getContext(l);if(d.oCombinedFilter&&!d.bIsFiltering){if(d.filterInfo.aFilteredContexts&&d.filterInfo.aFilteredContexts.indexOf(f)!=-1){a.push(f)}}else{a.push(f)}}});this._applySorter(a);this._setLengthCache(o,a.length);return a.slice(i,i+n)};return i});
//# sourceMappingURL=XMLTreeBinding.js.map