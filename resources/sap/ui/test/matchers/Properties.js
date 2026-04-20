/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/strings/capitalize","sap/base/util/each","sap/base/util/isPlainObject"],function(e,r,t,a){"use strict";var s=e.getLogger("sap.ui.test.matchers.Properties");return function(e){return function(n){var u=true;t(e,function(e,t){var i=n["get"+r(e,0)];if(!i){u=false;s.error("Control '"+n+"' does not have a property '"+e+"'");return false}var o=i.call(n);if(t instanceof RegExp){t.lastIndex=0;u=t.test(o)}else if(a(t)&&t.regex&&t.regex.source){var l=new RegExp(t.regex.source,t.regex.flags);u=l.test(o)}else{u=o===t}if(!u){s.debug("Control '"+n+"' property '"+e+"' has value '"+o+"' but should have value '"+t+"'");return false}});return u}}},true);
//# sourceMappingURL=Properties.js.map