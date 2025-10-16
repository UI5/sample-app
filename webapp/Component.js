sap.ui.define(["sap/ui/core/UIComponent"], (UIComponent) => {
	"use strict";

	return UIComponent.extend("sap.ui.demo.todo.Component", {
		metadata: {
			manifest: "json",
			interfaces: ["sap.ui.core.IAsyncContentCreation"]
		}
	});
});
