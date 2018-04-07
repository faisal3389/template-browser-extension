
function action() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    let url = tabs[0].url;
    var a = document.createElement('a');
    var linkText = document.createTextNode("title");
    a.appendChild(linkText);
    a.href = url;
    document.body.appendChild(a);
    alert(url);
  });
}

$('#formatLink').click(action());
