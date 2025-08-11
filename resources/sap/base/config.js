/*!
* OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/base/Eventing","sap/base/config/MemoryConfigurationProvider","ui5loader-autoconfig"],(e,t)=>{"use strict";const n=sap.ui.require("sap/base/config/_Configuration");const a=new e;n.getWritableInstance=()=>{const e=new t;return{set(t,a){const i=/^[a-z][A-Za-z0-9]*$/;if(i.test(t)){e.set(t,a);n._.invalidate()}else{throw new TypeError("Invalid configuration key '"+t+"'!")}},get(t){t.provider=e;return n.get(t)},Type:n.Type}};function i(e){a.attachEvent("invalidated",e)}n._.attachInvalidated=i;const r=n._.invalidate;n._.invalidate=()=>{r();a.fireEvent("invalidated")};return n});
//# sourceMappingURL=config.js.map