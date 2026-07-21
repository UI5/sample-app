/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/ControlBehavior"],function(t){"use strict";return function(e,i){if(!this.isA("sap.ui.core.Element")){return}this._propagateTitleIdToChildControl=function(){var n=this.getMetadata().getAggregation(e),r=n&&n.get(this),s=i&&i.call(this),o,a;if(!t.isAccessibilityEnabled()||!s||!r||r.length===0){return false}if(typeof s==="string"){o={id:s}}else if(s.id){o=s}else{return false}a=r[0];if(a&&a._suggestTitleId){a._suggestTitleId(o);return true}return false};this._initTitlePropagationSupport=function(){this.addEventDelegate({onBeforeRendering:this._propagateTitleIdToChildControl.bind(this)})}}});
//# sourceMappingURL=TitlePropagationSupport.js.map