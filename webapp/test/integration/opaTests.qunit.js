/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pina/star_wars/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});