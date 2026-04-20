/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/base/ManagedObjectMetadata"],function(e,t){"use strict";var i=e.extend("sap.ui.test.selectors._ViewID",{_generate:function(e,i,a){var r=e.getId();var s=this._getControlView(e);var o;if(s){var g=s.getId();var n=s.getViewName();var d;var v=g+"--";var l=r.indexOf(v);var u=a&&a.preferViewNameAsViewLocator;if(l>-1){d=r.substring(l+v.length);if(u||d.indexOf("-")===-1&&!d.match(/[0-9]$/)){this._oLogger.debug("Control with ID "+r+" has view-relative ID "+d);o={id:d,skipBasic:true};if(u||t.isGeneratedId(g)){this._oLogger.debug("Control "+e+" has view with viewName "+n);Object.assign(o,this._getViewNameSelector(n,a))}else{this._oLogger.debug("Control "+e+" has view with stable ID "+g);o.viewId=g}}}}else{this._oLogger.debug("Control "+e+" does not belong to a view")}return o}});return i});
//# sourceMappingURL=_ViewID.js.map