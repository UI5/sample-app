/*!
 * OpenUI5
 * (c) Copyright 2026 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var r=t.extend(e);r.apiVersion=2;r.renderLIAttributes=function(e,t){e.class("sapMTreeItemBase");if(!t.isTopLevel()){e.class("sapMTreeItemBaseChildren")}if(t.isLeaf()){e.class("sapMTreeItemBaseLeaf")}else{e.attr("aria-expanded",t.getExpanded())}const r=t._getPadding();e.style("padding-inline-start",r+"rem")};r.renderContentFormer=function(e,t){this.renderHighlight(e,t);this.renderExpander(e,t);this.renderMode(e,t,-1)};r.renderExpander=function(e,t){var r=t._getExpanderControl();if(r){e.renderControl(r)}};r.getAriaRole=function(e){return"treeitem"};r.getAccessibilityState=function(t){var r=e.getAccessibilityState.call(this,t);r.level=t.getLevel()+1;if(!t.isLeaf()){r.expanded=t.getExpanded()}return r};return r},true);
//# sourceMappingURL=TreeItemBaseRenderer.js.map