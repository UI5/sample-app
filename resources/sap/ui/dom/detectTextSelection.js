/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";const n=function(n){if(!n){return false}const t=window.getSelection();if(!t){return false}const e=t.toString().replace("\n","");if(!e){return false}const o=t.focusNode;const c=t.anchorNode;return o&&n!==o&&n.contains(o)||c&&n!==c&&n.contains(c)};return n});
//# sourceMappingURL=detectTextSelection.js.map