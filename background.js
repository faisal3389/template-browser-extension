chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, {
		file: "popup.js",
		runAt: "document_end"
	});
});
