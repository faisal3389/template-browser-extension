function onWindowLoad() {

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var tab = tabs[0]
        var url = tab.url;
        var title = tab.title;
        var a = document.createElement('a');
        var linkText = document.createTextNode(title);
        a.appendChild(linkText);
        a.title = title;
        a.href = url;
        a.id = "url"
        a.contentEditable = "true"
        document.body.appendChild(a)
        a.focus();
        a.select();
    });

}

window.onload = onWindowLoad;
