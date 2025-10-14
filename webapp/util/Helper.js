jQuery.sap.declare("sap.ui.demo.todo.util.Helper");

sap.ui.demo.todo.util.Helper = {
	resolvePath(sPath) {
		// Relative to application root
		return sap.ui.require.toUrl("sap/ui/demo/todo/" + sPath);
	}
};

