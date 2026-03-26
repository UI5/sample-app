/* global QUnit */
import QUnit from "sap/ui/thirdparty/qunit-2";
import opaTest from "sap/ui/test/opaQunit";
import Device from "sap/ui/Device";
import AppPage from "./pages/App";

const onTheAppPage = new AppPage();

QUnit.module("Search");

if (Device.browser.mobile) {
	// Search functionality is currently not support on mobile devices
} else {

opaTest("should show correct item count after search (1)", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForSearchAndPressEnter("earn");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(1);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should show correct item count after search (0)", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForSearchAndPressEnter("there should not be an item for this search");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(0);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should show correct item count after search and clearing the search", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
		.iEnterTextForSearchAndPressEnter("");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(2);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should show correct item count after search and active items filter", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
		.iFilterForItems("active");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(1);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should show correct item count after search and completed items filter", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
		.iFilterForItems("completed");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(0);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should show correct item count after search and all items filter", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
		.iFilterForItems("all");

	// Assertions
	onTheAppPage.iShouldSeeItemCount(1);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

} // end if (!Device.browser.mobile)
