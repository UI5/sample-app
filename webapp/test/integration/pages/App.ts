import Opa5 from "sap/ui/test/Opa5";
import AggregationLengthEquals from "sap/ui/test/matchers/AggregationLengthEquals";
import PropertyStrictEquals from "sap/ui/test/matchers/PropertyStrictEquals";
import Properties from "sap/ui/test/matchers/Properties";
import EnterText from "sap/ui/test/actions/EnterText";
import Press from "sap/ui/test/actions/Press";
import Device from "sap/ui/Device";
import List from "sap/m/List";
import OverflowToolbar from "sap/m/OverflowToolbar";
import CheckBox from "sap/m/CheckBox";
import CustomListItem from "sap/m/CustomListItem";
import ToggleButton from "sap/m/ToggleButton";
import UI5Element from "sap/ui/core/Element";
import Control from "sap/ui/core/Control";

const sViewName = "sap.ui.demo.todo.view.App";
const sAddToItemInputId = "addTodoItemInput";
const sSearchTodoItemsInputId = "searchTodoItemsInput";
const sItemListId = "todoList";
const sToolbarId = Device.browser.mobile ? "toolbar-footer" : "toolbar";
const sClearCompletedId = Device.browser.mobile ? "clearCompleted-footer" : "clearCompleted";

export default class AppPage extends Opa5 {

	iStartMyApp(): void {
		this.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.demo.todo",
				async: true,
				manifest: true
			}
		});
	}

	iEnterTextForNewItemAndPressEnter(text: string): this {
		this.waitFor({
			id: sAddToItemInputId,
			viewName: sViewName,
			actions: [new EnterText({ text: text })],
			errorMessage: "The text cannot be entered"
		});
		return this;
	}

	iEnterTextForSearchAndPressEnter(text: string): this {
		this._waitForToolbar();
		this.waitFor({
			id: sSearchTodoItemsInputId,
			viewName: sViewName,
			actions: [new EnterText({ text: text })],
			errorMessage: "The text cannot be entered"
		});
		return this;
	}

	iSelectTheLastItem(bSelected: boolean): this {
		this.waitFor({
			id: sItemListId,
			viewName: sViewName,
			// selectionChange
			actions: [(oElement: UI5Element) => {
				const oList = oElement as List;
				const iLength = oList.getItems().length;
				const oListItem = oList.getItems()[iLength - 1] as CustomListItem;
				const oContent = oListItem.getContent()[0] as unknown as { getItems: () => CustomListItem[] };
				const oCheckbox = oContent.getItems()[0];
				this._triggerCheckboxSelection(oCheckbox, bSelected);
			}],
			errorMessage: "Last checkbox cannot be pressed"
		});
		return this;
	}

	iSelectAllItems(bSelected: boolean): this {
		this.waitFor({
			id: sItemListId,
			viewName: sViewName,
			actions: [(oElement: UI5Element) => {
				const oList = oElement as List;
				oList.getItems().forEach((oListItem) => {
					const oContent = (oListItem as CustomListItem).getContent()[0] as unknown as { getItems: () => CustomListItem[] };
					const oCheckbox = oContent.getItems()[0];
					this._triggerCheckboxSelection(oCheckbox, bSelected);
				});
			}],
			errorMessage: "checkbox cannot be pressed"
		});
		return this;
	}

	_triggerCheckboxSelection(oListItem: CustomListItem, bSelected: boolean): void {
		//determine existing selection state and ensure that it becomes <code>bSelected</code>
		const oCheckbox = oListItem as unknown as CheckBox;
		if (oCheckbox.getSelected() && !bSelected || !oCheckbox.getSelected() && bSelected) {
			const oPress = new Press();
			//search within the CustomListItem for the checkbox id ending with 'selectMulti-CB'
			(Press.controlAdapters as Record<string, string>)["sap.m.CustomListItem"] = "selectMulti-CB";
			oPress.executeOn(oListItem);
		}
	}

	iClearTheCompletedItems(): this {
		this._waitForToolbar();
		this.waitFor({
			id: sClearCompletedId,
			viewName: sViewName,
			actions: [new Press()],
			errorMessage: "checkbox cannot be pressed"
		});
		return this;
	}

	iFilterForItems(filterKey: string): this {
		this._waitForToolbar();
		this.waitFor({
			viewName: sViewName,
			controlType: "sap.m.SegmentedButtonItem",
			matchers: [
				new Properties({ key: filterKey }) as unknown as (p1: UI5Element) => void
			],
			actions: [new Press()],
			errorMessage: "SegmentedButton can not be pressed"
		});
		return this;
	}

	_waitForToolbar(): void {
		this.waitFor({
			id: sToolbarId,
			viewName: sViewName,
			success: (oElement: UI5Element | UI5Element[]) => {
				const oToolbar = oElement as OverflowToolbar;
				return this.waitFor({
					controlType: "sap.m.ToggleButton",
					visible: false,
					success: (aElements: UI5Element | UI5Element[]) => {
						const aToggleButtons = aElements as ToggleButton[];
						const oToggleButton = aToggleButtons.find((oButton) => oButton.getId().startsWith(oToolbar.getId()) && oButton.getParent() === oToolbar)
						if (oToggleButton) {
							this.waitFor({
								id: oToggleButton.getId(),
								actions: new Press()
							});
						} else {
							Opa5.assert.ok(true, "The overflow toggle button is not present");
						}
					}
				})
			}
		});
	}

	iShouldSeeTheItemBeingAdded(iItemCount: number, sLastAddedText: string): this {
		this.waitFor({
			id: sItemListId,
			viewName: sViewName,
			matchers: [new AggregationLengthEquals({
				name: "items",
				length: iItemCount
			}), (oElement: UI5Element) => {
				const oControl = oElement as List;
				const iLength = oControl.getItems().length;
				const oContent = (oControl.getItems()[iLength - 1] as CustomListItem).getContent()[0] as unknown as { getItems: () => Array<{ getItems: () => Control[] }> };
				const oInput = oContent.getItems()[1].getItems()[0];
				return new PropertyStrictEquals({
					name: "text",
					value: sLastAddedText
				}).isMatching(oInput);
			}],
			success() {
				Opa5.assert.ok(true, "The table has " + iItemCount + " item(s), with '" + sLastAddedText + "' as last item");
			},
			errorMessage: "List does not have expected entry '" + sLastAddedText + "'."
		});
		return this;
	}

	iShouldSeeTheLastItemBeingCompleted(bSelected: boolean): this {
		this.waitFor({
			id: sItemListId,
			viewName: sViewName,
			matchers: [(oElement: UI5Element) => {
				const oControl = oElement as List;
				const iLength = oControl.getItems().length;
				const oContent = (oControl.getItems()[iLength - 1] as CustomListItem).getContent()[0] as unknown as { getItems: () => CheckBox[] };
				const oCheckbox = oContent.getItems()[0];
				return bSelected && oCheckbox.getSelected() || !bSelected && !oCheckbox.getSelected();
			}],
			success() {
				Opa5.assert.ok(true, "The last item is marked as completed");
			},
			errorMessage: "The last item is not disabled."
		});
		return this;
	}

	iShouldSeeAllButOneItemBeingRemoved(sLastItemText: string): this {
		this.waitFor({
			id: sItemListId,
			viewName: sViewName,
			matchers: [new AggregationLengthEquals({
				name: "items",
				length: 1
			}), (oElement: UI5Element) => {
				const oControl = oElement as List;
				const oContent = (oControl.getItems()[0] as CustomListItem).getContent()[0] as unknown as { getItems: () => Array<{ getItems: () => Control[] }> };
				const oInput = oContent.getItems()[1].getItems()[0];
				return new PropertyStrictEquals({
					name: "text",
					value: sLastItemText
				}).isMatching(oInput);
			}],
			success() {
				Opa5.assert.ok(true, "The table has 1 item, with '" + sLastItemText + "' as Last item");
			},
			errorMessage: "List does not have expected entry '" + sLastItemText + "'."
		});
		return this;
	}

	iShouldSeeItemCount(iItemCount: number): this {
		this.waitFor({
			id: sItemListId,
			viewName: sViewName,
			matchers: [new AggregationLengthEquals({
				name: "items",
				length: iItemCount
			})],
			success() {
				Opa5.assert.ok(true, "The table has " + iItemCount + " item(s)");
			},
			errorMessage: "List does not have expected number of items '" + iItemCount + "'."
		});
		return this;
	}
}
