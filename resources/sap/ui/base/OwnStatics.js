/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";const e=new WeakMap;const t={get(t){return e.get(t)},set(t,n){if(e.get(t)){throw new TypeError("The 'OwnStatics' can only be defined once for a class")}Object.freeze(n);e.set(t,n)}};return t});
//# sourceMappingURL=OwnStatics.js.map