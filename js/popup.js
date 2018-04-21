function onError(error) {
  alert(`Error: ${error}`);
}

function copyInputToClipboard(elementID) {
  /* Get the text field */
  var copyText = document.getElementById(elementID);
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("Copy");
}

function copyHtmlToClipboard(elementID) {
  const html = document.getElementById('htmlLink').value
  var dt = new clipboard.DT();
  dt.setData("text/plain", html);
  dt.setData("text/html", html);
  clipboard.write(dt);
}

function addLinksFromTab(tabs) {
  tab = tabs[0]
  var tabUrl = tab.url;
  var tabTitle = tab.title;

  var titleLinkElement = document.getElementById('titleLink')
  titleLinkElement.url = tabUrl;
  titleLinkElement.textContent = tabTitle;

  var titleElement = document.getElementById('titleInput')
  titleElement.value = tabTitle;

  var titleElement = document.getElementById('urlInput')
  titleElement.value = tabUrl;

  var htmlLink = "<a href=\"" + tabUrl + "\">" + tabTitle + "</a>";
  htmlLinkElement = document.getElementById('htmlLink')
  htmlLinkElement.value = htmlLink;

  var markdownLink = "[" + tabTitle + "](" + tabUrl + ")"
  markdownLinkElement = document.getElementById('markdownLink')
  markdownLinkElement.value = markdownLink;
}

document.getElementById("linkCopyButton").addEventListener("click", function(){
    copyHtmlToClipboard("titleLink");
});

document.getElementById("titleCopyButton").addEventListener("click", function(){
    copyInputToClipboard("titleInput");
});

document.getElementById("urlCopyButton").addEventListener("click", function(){
    copyInputToClipboard("urlInput");
});

document.getElementById("htmlLinkButton").addEventListener("click", function(){
    copyInputToClipboard("htmlLink");
});

document.getElementById("markdownLinkButton").addEventListener("click", function(){
    copyInputToClipboard("markdownLink");
});

var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
gettingActiveTab.then(addLinksFromTab, onError);
