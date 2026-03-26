/* global QUnit */
import QUnit from "sap/ui/thirdparty/qunit-2";
import opaTest from "sap/ui/test/opaQunit";
import AppPage from "./pages/App";

const onTheAppPage = new AppPage();

QUnit.module("Filter");

opaTest("should show correct items when filtering for 'Active' items", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iFilterForItems("active");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(1);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should show correct items when filtering for 'Completed' items", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iFilterForItems("completed");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(1);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should show correct items when filtering for 'Completed' items and switch back to 'All'", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iFilterForItems("completed");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(1);

	//Actions
	onTheAppPage.iFilterForItems("all");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(2);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});
