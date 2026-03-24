/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./FormHelper","sap/base/Log"],function(e,t){"use strict";var i={apiVersion:2};i.render=function(i,s){const r=s.getLayout();const o={role:r&&r.hasLabelledContainers(s)?"region":"form"};const a=r?.getRenderer().getTitleId(s)||s._sSuggestedTitleId;const l=!r?.getRenderer().getTitleId(s)&&s._sSuggestedTitleId;if(l&&s._sSuggestedTitleAriaRole==="region"&&o.role==="region"){delete o.role}i.openStart("div",s).class("sapUiForm").class("sapUiFormLblColon").attr("data-sap-ui-customfastnavgroup","true");var n=e.addFormClass();if(n){i.class(n)}if(s.getEditable()){i.class("sapUiFormEdit");i.class("sapUiFormEdit-CTX")}else{o.readonly=""}if(s.getWidth()){i.style("width",s.getWidth())}if(s.getTooltip_AsString()){i.attr("title",s.getTooltip_AsString())}if(a){o["labelledby"]={value:a,append:true}}i.accessibilityState(s,o);i.openEnd();if(r){i.renderControl(r)}else{t.warning('Form "'+s.getId()+'" - Layout missing!',"Renderer","Form")}i.close("div")};return i},true);
//# sourceMappingURL=FormRenderer.js.map