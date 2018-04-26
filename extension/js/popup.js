$("#alert").hide()
$("#formatView").hide()
$("#listView").hide()

let chosenFormat = localStorage.getItem("chosenFormat");

let view = localStorage.getItem("view");

if(view === "listView") {
  console.log("Loading listView")
  if(view === "listView") {
    $("#listView").show()
  }
}
else {
  localStorage.setItem("view", "formatView");
  console.log("Loading formatView")
  $("#formatView").show()
}

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

$("#alertCloseButton").click(() => {
  $("#alert").slideUp("slow");
})

$("#listViewButton").click(() => {
  $("#formatView").slideUp("slow", () => {
    localStorage.setItem("view", "listView");
    console.log("View set to " + localStorage.getItem("view"))
    $("#listView").slideDown("slow")
  });
})

$("#formatViewButton").click(() => {
  $("#listView").slideUp("slow", () => {
    localStorage.setItem("view", "formatView");
    console.log("View set to " + localStorage.getItem("view"))
    $("#formatView").slideDown("slow")
  });
})

let linkListStorage = localStorage.getItem("linkListStorage");

if(linkListStorage != undefined) {
  console.log(linkListStorage)
  let linkList = document.getElementById("linkList")
  let parsedHtml = $.parseHTML(linkListStorage)
  console.log(parsedHtml)
  parsedHtml.forEach((li) => {
    console.log("Adding to list: " + li)
    linkList.append(li)
  })
}

function addLinkToList() {
  console.log("Adding link to list...")
  let link = document.getElementById('titleLink')
  let linkToAdd = link.cloneNode(true);
  let linkList = document.getElementById("linkList")
  let newLinkListElement = document.createElement("li")
  newLinkListElement.classList.add("list-group-item")
  newLinkListElement.appendChild(linkToAdd)
  linkList.append(newLinkListElement)
  localStorage.setItem("linkListStorage", linkList.innerHTML);
  console.log(localStorage.getItem("linkListStorage"))
}

function removeLinkFromList() {
  console.log("Removing link from list...")
  linkList.removeChild(linkList.lastChild);
  localStorage.setItem("linkListStorage", linkList.innerHTML);
  console.log(localStorage.getItem("linkListStorage"))
}

$("#removeLinkFromListButton").click(() => {
  removeLinkFromList()
})

function copyInputToClipboard(elementId, name, feedbackElementId) {
  let e = document.getElementById(elementId)
  let dt = new clipboard.DT();
  dt.setData("text/plain", e.value);
  clipboard.write(dt).then(() => {
    document.getElementById("titleFeedback").textContent = ""
    document.getElementById("urlFeedback").textContent = ""
    document.getElementById("htmlLinkFeedback").textContent = ""
    document.getElementById("markdownLinkFeedback").textContent = ""
    document.getElementById(feedbackElementId).textContent = "Copied to Clipboard"
  })
}

addLinkToListButton = document.getElementById("addLinkToListButton")
addLinkToListButton.addEventListener("click", addLinkToList)

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

document.getElementById("titleCopyButton").addEventListener("click", function(){
    copyInputToClipboard("titleInput", "Title", "titleFeedback");
});

document.getElementById("urlCopyButton").addEventListener("click", function(){
    copyInputToClipboard("urlInput", "Url", "urlFeedback");
});

document.getElementById("htmlLinkButton").addEventListener("click", function(){
    copyInputToClipboard("htmlLink", "HTML Link", "htmlLinkFeedback");
});

document.getElementById("markdownLinkButton").addEventListener("click", function(){
    copyInputToClipboard("markdownLink", "Markdown Link", "markdownLinkFeedback");
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
