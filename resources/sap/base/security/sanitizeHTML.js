/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/security/URLListValidator","sap/ui/thirdparty/caja-html-sanitizer"],function(i,a){"use strict";var t=function(t,e){i(globalThis.html&&globalThis.html.sanitize,"Sanitizer should have been loaded");e=e||{uriRewriter:function(i){if(a.validate(i)){return i}}};var r=e.tagPolicy||globalThis.html.makeTagPolicy(e.uriRewriter,e.tokenPolicy);return globalThis.html.sanitizeWithPolicy(t,r)};return t});
//# sourceMappingURL=sanitizeHTML.js.map