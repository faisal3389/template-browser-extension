function onError(error) {
  alert(`Error: ${error}`);
}

function copyToClipboard(elementID) {
  /* Get the text field */
  var copyText = document.getElementById(elementID);
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("Copy");
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

function addLinksFromTab(tabs) {
  tab = tabs[0]
  var url = tab.url;
  var title = tab.title;

  var titleLinkElement = document.getElementById('titleLink')
  titleLink.href = url;
  titleLink.textContent = title;

  var htmlLink = "<a href=\"" + url + "\">" + title + "</a>";
  htmlLinkElement = document.getElementById('htmlLink')
  htmlLinkElement.value = htmlLink;

  var markdownLink = "[" + title + "](" + url + ")"
  markdownLinkElement = document.getElementById('markdownLink')
  markdownLinkElement.value = markdownLink;
}

document.getElementById("htmlLinkButton").addEventListener("click", function(){
    copyToClipboard("htmlLink");
});

document.getElementById("markdownLinkButton").addEventListener("click", function(){
    copyToClipboard("markdownLink");
});

var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
gettingActiveTab.then(addLinksFromTab, onError);
