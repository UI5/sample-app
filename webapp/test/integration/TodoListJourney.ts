/* global QUnit */
import QUnit from "sap/ui/thirdparty/qunit-2";
import opaTest from "sap/ui/test/opaQunit";
import AppPage from "./pages/App";

const onTheAppPage = new AppPage();

QUnit.module("Todo List");

opaTest("should add an item", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForNewItemAndPressEnter("my test");

	// Assertions
	onTheAppPage.iShouldSeeTheItemBeingAdded(3, "my test");

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should remove a completed item", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
		.iSelectAllItems(true)
		.iClearTheCompletedItems()
		.iEnterTextForNewItemAndPressEnter("my test");

	// Assertions
	onTheAppPage.iShouldSeeAllButOneItemBeingRemoved("my test");

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should select an item", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
		.iSelectTheLastItem(true);

	// Assertions
	onTheAppPage.iShouldSeeTheLastItemBeingCompleted(true);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});

opaTest("should unselect an item", function () {

	// Arrangements
	onTheAppPage.iStartMyApp();

	//Actions
	onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
		.iSelectAllItems(true)
		.iClearTheCompletedItems()
		.iEnterTextForNewItemAndPressEnter("my test")
		.iSelectTheLastItem(true)
		.iSelectTheLastItem(false);

	// Assertions
	onTheAppPage.iShouldSeeTheLastItemBeingCompleted(false);

	// Cleanup
	onTheAppPage.iTeardownMyApp();
});
