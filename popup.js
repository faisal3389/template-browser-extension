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

        var hr = document.createElement('hr');
        document.body.appendChild( hr )

        var htmlLink = "&lt;a href=\"" + url + "\"&gt;" + title + "&lt;/a&gt;";
        var htmlDiv = document.createElement('div');
        htmlDiv.innerHTML = htmlLink;
        document.body.appendChild( htmlDiv );

        var hr = document.createElement('hr');
        document.body.appendChild( hr )

        var markdownLink = "[" + title + "](" + url + ")"
        var markdownDiv = document.createElement('div');
        markdownDiv.innerHTML = markdownLink;
        document.body.appendChild( markdownDiv )
    });

}

window.onload = onWindowLoad;
