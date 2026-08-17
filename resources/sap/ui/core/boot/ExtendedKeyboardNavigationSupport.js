/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/ControlBehavior","sap/ui/events/PseudoEvents"],function(e,n){"use strict";const t=n.events.sapextendedkeyboardnavigationtoggle;function o(n){if(t.fnCheck(n)){e.setExtendedKeyboardNavigationEnabled(!e.isExtendedKeyboardNavigationEnabled());n.preventDefault()}}document.addEventListener("keydown",o);return{run:function(){return Promise.resolve()}}});
//# sourceMappingURL=ExtendedKeyboardNavigationSupport.js.map