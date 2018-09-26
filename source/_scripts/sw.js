<!--removeIf(removeSW)-->

// Register a 'service worker' to precache the app's content. Visitors will be able to add the app to their device's homescreen and view the content offline.
if ("serviceWorker" in navigator) {

	window.addEventListener("load", function() {
		"use strict";

		navigator.serviceWorker.register("sw.js").then(function(registration) {

			console.log("Ver 2.4.3");
			//console.log("ServiceWorker registration successful with scope: ", registration.scope);

		});

	});

}

<!--endRemoveIf(removeSW)-->