import UIComponent from "sap/ui/core/UIComponent";
import "sap/ui/core/ComponentSupport";

/**
 * @namespace sap.ui.demo.todo
 */
export default class Component extends UIComponent {
	static readonly metadata = {
		manifest: "json",
		interfaces: ["sap.ui.core.IAsyncContentCreation"],
	};
}
