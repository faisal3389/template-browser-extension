function onError(error) {
  console.log(`Error: ${error}`);
}

function addLink(linkElementId, url, textContent) {
  var a = document.createElement("a");    // create an anchor element
  a.href = url;                           // set its href
  a.textContent = textContent;            // set its text
  document.getElementById(linkElementId).appendChild(a); // append it to where you want
}

function addTextInput(linkElementId, url, textContent) {
  var i = document.createElement("INPUT");
  i.setAttribute("type", "text");
  i.value = textContent;            // set its text
  document.getElementById(linkElementId).appendChild(i); // append it to where you want
}

function addLinksFromTab(tabs) {
  tab = tabs[0]
  var url = tab.url;
  var title = tab.title;

  addLink('links', url, title)

  var htmlLink = "<a href=\"" + url + "\">" + title + "</a>";
  addTextInput('links', url, htmlLink)

  var markdownLink = "[" + title + "](" + url + ")"
  addTextInput('links', url, markdownLink)
}

var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
gettingActiveTab.then(addLinksFromTab, onError);

// $('generateButton').click(() = {
//   alert('click')
  // var querying = browser.tabs.query({currentWindow: true, active: true});
  // querying.then(logTabs, onError);
// });
