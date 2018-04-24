$("#aboutContent").hide();

$("#aboutButton").click(() => {
  $("#content").slideUp("slow", () => {
    $("#aboutContent").slideDown("slow", () => {
      $("#aboutContent").show();
    });
  })
});

$("#hideAboutButton").click(() => {
  $("#aboutContent").slideUp("slow", () => {
    $("#content").slideDown("slow", () => {
      $("#content").show();
    });
  })
})

function onError(error) {
  alert(`Error: ${error}`);
}

$("#alert").hide()

$("#alertCloseButton").click(() => {
  $("#alert").slideUp("slow");
})

function alertClipboardAndClose(name) {
  let alertText = document.getElementById("alertText")
  alertText.textContent = "Copied " + name + " to Clipboard";
  $("html, body").animate({ scrollTop: 0 }, "slow", () => {
    $("#alert").slideDown("slow");
  });
}

let linkListStorage = localStorage.getItem("linkListStorage");

if(linkListStorage != undefined) {
  console.log(linkListStorage)
  let linkList = document.getElementById("linkList")
  let parsedHtml = $.parseHTML(linkListStorage)
  console.log(parsedHtml)
  linkList.appendChild(parsedHtml[0])
}

function addLinkToList() {
  let link = document.getElementById('titleLink')
  let linkToAdd = link.cloneNode(true);
  let linkList = document.getElementById("linkList")
  let newLinkListElement = document.createElement("li")
  newLinkListElement.appendChild(linkToAdd)
  linkList.appendChild(newLinkListElement)
  localStorage.setItem("linkListStorage", linkList.outerHTML);
  console.log(localStorage.getItem("linkListStorage"))
}

function copyInputToClipboard(elementID, name) {
  let e = document.getElementById(elementID)
  let dt = new clipboard.DT();
  dt.setData("text/plain", e.value);
  clipboard.write(dt).then(alertClipboardAndClose(name));
}

function copyHtmlToClipboard(elementID, name) {
  let e = document.getElementById(elementID)
  let dt = new clipboard.DT();
  dt.setData("text/plain", e);
  dt.setData("text/html", e.outerHTML);
  clipboard.write(dt).then(alertClipboardAndClose(name));
}

addLinkToListButton = document.getElementById("addLinkToListButton")
addLinkToListButton.addEventListener("click", addLinkToList)

copyListButton = document.getElementById("copyListButton")
copyListButton.addEventListener("click", function(){
  copyHtmlToClipboard("linkList", "Link List")
})

clearListButton = document.getElementById("clearListButton")
clearListButton.addEventListener("click", function(){
  console.log("Clearing link list...")
  let list = document.getElementById("linkList")
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  localStorage.removeItem("linkListStorage")
})

function addLinksFromTab(tabs) {
  tab = tabs[0]
  let tabUrl = tab.url;
  let tabTitle = tab.title;

  let titleLinkElement = document.getElementById('titleLink')
  titleLinkElement.url = tabUrl;
  titleLinkElement.textContent = tabTitle;

  let titleInput = document.getElementById('titleInput')
  titleInput.value = tabTitle;

  let urlInput = document.getElementById('urlInput')
  urlInput.value = tabUrl;

  let htmlLink = "<a href=\"" + tabUrl + "\">" + tabTitle + "</a>";
  htmlLinkElement = document.getElementById('htmlLink')
  htmlLinkElement.value = htmlLink;

  let markdownLink = "[" + tabTitle + "](" + tabUrl + ")"
  markdownLinkElement = document.getElementById('markdownLink')
  markdownLinkElement.value = markdownLink;
}

document.getElementById("linkCopyButton").addEventListener("click", function(){
    copyHtmlToClipboard("titleLink", "Link");
});

document.getElementById("titleCopyButton").addEventListener("click", function(){
    copyInputToClipboard("titleInput", "Title");
});

document.getElementById("urlCopyButton").addEventListener("click", function(){
    copyInputToClipboard("urlInput", "Url");
});

document.getElementById("htmlLinkButton").addEventListener("click", function(){
    copyInputToClipboard("htmlLink", "HTML Link");
});

document.getElementById("markdownLinkButton").addEventListener("click", function(){
    copyInputToClipboard("markdownLink", "Markdown Link");
});

let sBrowser, sUsrAg = navigator.userAgent;
if(sUsrAg.indexOf("Chrome") > -1) {
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
    addLinksFromTab(arrayOfTabs);
  });
} else {
  let gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(addLinksFromTab, onError);
}
