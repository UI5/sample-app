import Device from "sap/ui/Device";
import Controller from "sap/ui/core/mvc/Controller";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatMessage from "sap/base/strings/formatMessage";
import List from "sap/m/List";
import OverflowToolbar from "sap/m/OverflowToolbar";
import Label from "sap/m/Label";
import { SearchField$LiveChangeEvent } from "sap/m/SearchField";
import { SegmentedButton$SelectionChangeEvent } from "sap/m/SegmentedButton";
import ListBinding from "sap/ui/model/ListBinding";
import FilterType from "sap/ui/model/FilterType";
import { TodoItem } from "../types/index";

/**
 * @namespace sap.ui.demo.todo.controller
 */
export default class AppController extends Controller {

	aSearchFilters: Filter[] = [];
	aTabFilters: Filter[] = [];
	sSearchQuery: string | undefined;
	sFilterKey: string | undefined;

	onInit(): void {
		this.aSearchFilters = [];
		this.aTabFilters = [];

		this.getView()!.setModel(new JSONModel({
			isMobile: Device.browser.mobile
		}), "view");
	}

	/**
	 * Get the default model from the view
	 *
	 * @returns {sap.ui.model.json.JSONModel} The model containing the todo list, etc.
	 */
	getModel(): JSONModel {
		return this.getView()!.getModel() as JSONModel;
	}

	/**
	 * Adds a new todo item to the bottom of the list.
	 */
	addTodo(): void {
		const oModel = this.getModel();
		const aTodos = this.getTodos().map((oTodo) => Object.assign({}, oTodo));

		aTodos.push({
			title: oModel.getProperty("/newTodo") as string,
			completed: false
		});

		oModel.setProperty("/todos", aTodos);
		oModel.setProperty("/newTodo", "");
	}

	/**
	 * Trigger removal of all completed items from the todo list.
	 */
	onClearCompleted(): void {
		const aTodos = this.getTodos().map((oTodo) => Object.assign({}, oTodo));
		this.removeCompletedTodos(aTodos);
		this.getModel().setProperty("/todos", aTodos);
	}

	/**
	 * Removes all completed items from the given todos.
	 *
	 * @param {object[]} aTodos
	 */
	removeCompletedTodos(aTodos: TodoItem[]): void {
		let i = aTodos.length;
		while (i--) {
			const oTodo = aTodos[i];
			if (oTodo.completed) {
				aTodos.splice(i, 1);
			}
		}
	}

	/**
	 * Determines the todo list
	 *
	 * @returns {object[]} The todo list
	 */
	getTodos(): TodoItem[] {
		const oModel = this.getModel();
		return (oModel && oModel.getProperty("/todos") as TodoItem[]) || [];
	}

	/**
	 * Updates the number of items not yet completed
	 */
	onUpdateItemsLeftCount(): void {
		const iItemsLeft = this.getTodos().filter((oTodo) => oTodo.completed !== true).length;
		this.getModel().setProperty("/itemsLeftCount", iItemsLeft);
	}

	/**
	 * Trigger search for specific items. The removal of items is disable as long as the search is used.
	 * @param {sap.ui.base.Event} oEvent Input changed event
	 */
	onSearch(oEvent: SearchField$LiveChangeEvent): void {
		const oModel = this.getModel();

		// First reset current filters
		this.aSearchFilters = [];

		// add filter for search
		this.sSearchQuery = oEvent.getSource().getValue();
		if (this.sSearchQuery && this.sSearchQuery.length > 0) {
			oModel.setProperty("/itemsRemovable", false);
			const filter = new Filter("title", FilterOperator.Contains, this.sSearchQuery);
			this.aSearchFilters.push(filter);
		} else {
			oModel.setProperty("/itemsRemovable", true);
		}

		this._applyListFilters();
	}

	onFilter(oEvent: SegmentedButton$SelectionChangeEvent): void {
		// First reset current filters
		this.aTabFilters = [];

		// add filter for search
		this.sFilterKey = oEvent.getParameter("item").getKey();

		switch (this.sFilterKey) {
			case "active":
				this.aTabFilters.push(new Filter("completed", FilterOperator.EQ, false));
				break;
			case "completed":
				this.aTabFilters.push(new Filter("completed", FilterOperator.EQ, true));
				break;
			case "all":
			default:
			// Don't use any filter
		}

		this._applyListFilters();
	}

	_applyListFilters(): void {
		const oList = this.byId("todoList") as List;
		const oBinding = oList.getBinding("items") as ListBinding;

		oBinding.filter(this.aSearchFilters.concat(this.aTabFilters), FilterType.Application);

		const sI18nKey = this.getI18NKey(this.sFilterKey, this.sSearchQuery);

		(this.byId("filterToolbar") as OverflowToolbar).setVisible(!!sI18nKey);
		if (sI18nKey) {
			(this.byId("filterLabel") as Label).bindProperty("text", {
				path: sI18nKey,
				model: "i18n",
				formatter: (textWithPlaceholder: string) => {
					return formatMessage(textWithPlaceholder, [this.sSearchQuery]);
				}
			});
		}
	}

	getI18NKey(sFilterKey?: string, sSearchQuery?: string): string | undefined {
		if (!sFilterKey || sFilterKey === "all") {
			return sSearchQuery ? "ITEMS_CONTAINING" : undefined;
		} else if (sFilterKey === "active") {
			return "ACTIVE_ITEMS" + (sSearchQuery ? "_CONTAINING" : "");
		} else {
			return "COMPLETED_ITEMS" + (sSearchQuery ? "_CONTAINING" : "");
		}
	}
}
