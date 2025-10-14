jQuery.sap.declare("sap.ui.demo.todo.controller.App");

jQuery.sap.require("sap.ui.Device");
jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ui.model.Filter");
jQuery.sap.require("sap.ui.model.FilterOperator");
jQuery.sap.require("sap.ui.model.json.JSONModel");
jQuery.sap.require("sap.base.strings.formatMessage");

sap.ui.controller("sap.ui.demo.todo.controller.App", {

	onInit: function() {
		this.aSearchFilters = [];
		this.aTabFilters = [];
		if (new Date().getDay() === 5) { // It's Friday! - set button type to "Critical"
			this.ButtonType = sap.m.ButtonType.Critical;
		} else {
			this.ButtonType = sap.m.ButtonType.Default;
		}
		this.getView().setModel(new sap.ui.model.json.JSONModel({
			isMobile: sap.ui.Device.browser.mobile
		}), "view");
	},

	onAfterRendering: function() {
		var avatarDOM = jQuery("#container-todo---app--avatar-profile");
		var avatarCtr = avatarDOM.control(0);
		var Helper = sap.ui.require("sap/ui/demo/todo/util/Helper");
		avatarCtr.setSrc(Helper.resolvePath('./img/logo_ui5.png'));
	},

	/**
	 * Get the default model from the view
	 *
	 * @returns {sap.ui.model.json.JSONModel} The model containing the todo list, etc.
	 */
	getModel: function() {
		return this.getView().getModel();
	},

	/**
	 * Adds a new todo item to the bottom of the list.
	 */
	addTodo: function() {
		var oModel = this.getModel();
		var aTodos = this.getTodos().map(function(oTodo) {
			return jQuery.extend({}, oTodo);
		});

		aTodos.push({
			title: oModel.getProperty("/newTodo"),
			completed: false,
			buttonType: this.ButtonType,
		});

		oModel.setProperty("/todos", aTodos);
		oModel.setProperty("/newTodo", "");
	},

	/**
	 * Trigger removal of all completed items from the todo list.
	 */
	onClearCompleted: function() {
		var aTodos = this.getTodos().map(function(oTodo) {
			return jQuery.extend({}, oTodo);
		});
		this.removeCompletedTodos(aTodos);
		this.getModel().setProperty("/todos", aTodos);
	},

	/**
	 * Removes all completed items from the given todos.
	 *
	 * @param {object[]} aTodos
	 */
	removeCompletedTodos: function(aTodos) {
		var i = aTodos.length;
		while (i--) {
			var oTodo = aTodos[i];
			if (oTodo.completed) {
				aTodos.splice(i, 1);
			}
		}
	},

	/**
	 * Determines the todo list
	 *
	 * @returns {object[]} The todo list
	 */
	getTodos: function() {
		var oModel = this.getModel();
		return oModel && oModel.getProperty("/todos") || [];
	},

	/**
	 * Updates the number of items not yet completed
	 */
	onUpdateItemsLeftCount: function() {
		var iItemsLeft = this.getTodos().filter(function(oTodo) {
			return oTodo.completed !== true;
		}).length;
		this.getModel().setProperty("/itemsLeftCount", iItemsLeft);
	},

	/**
	 * Trigger search for specific items. The removal of items is disable as long as the search is used.
	 * @param {sap.ui.base.Event} oEvent Input changed event
	 */
	onSearch: function(oEvent) {
		var oModel = this.getModel();

		// First reset current filters
		this.aSearchFilters = [];

		// add filter for search
		this.sSearchQuery = oEvent.getSource().getValue();
		if (this.sSearchQuery && this.sSearchQuery.length > 0) {
			oModel.setProperty("/itemsRemovable", false);
			var filter = new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, this.sSearchQuery);
			this.aSearchFilters.push(filter);
		} else {
			oModel.setProperty("/itemsRemovable", true);
		}

		this._applyListFilters();
	},

	onFilter: function(oEvent) {
		// First reset current filters
		this.aTabFilters = [];

		// add filter for search
		this.sFilterKey = oEvent.getParameter("item").getKey();

		switch (this.sFilterKey) {
			case "active":
				this.aTabFilters.push(new sap.ui.model.Filter("completed", sap.ui.model.FilterOperator.EQ, false));
				break;
			case "completed":
				this.aTabFilters.push(new sap.ui.model.Filter("completed", sap.ui.model.FilterOperator.EQ, true));
				break;
			case "all":
			default:
				// Don't use any filter
		}

		this._applyListFilters();
	},

	_applyListFilters: function() {
		var oList = sap.ui.getCore().byId("container-todo---app--todoList");
		var oBinding = oList.getBinding("items");

		oBinding.filter(this.aSearchFilters.concat(this.aTabFilters), "todos");

		var sI18nKey = this.getI18NKey(this.sFilterKey, this.sSearchQuery);
		var that = this;

		this.byId("filterToolbar").setVisible(!!sI18nKey);
		if (sI18nKey) {
			this.byId("filterLabel").bindProperty("text", {
				path: sI18nKey,
				model: "i18n",
				formatter: function(textWithPlaceholder) {
					return jQuery.sap.formatMessage(textWithPlaceholder, [that.sSearchQuery]);
				}
			});
		}
	},

	getI18NKey: function(sFilterKey, sSearchQuery) {
		if (!sFilterKey || sFilterKey === "all") {
			return sSearchQuery ? "ITEMS_CONTAINING" : undefined;
		} else if (sFilterKey === "active") {
			return "ACTIVE_ITEMS" + (sSearchQuery ? "_CONTAINING" : "");
		} else {
			return "COMPLETED_ITEMS" + (sSearchQuery ? "_CONTAINING" : "");
		}
	}
});
