// Link Formatter js

$('#alert').hide()

$( "#titleInput" ).keyup(function() {
  updateLinkFormats()
});

$( "#urlInput" ).keyup(function() {
  updateLinkFormats()
});

$("#titleInput").change(()=> {
  updateLinkFormats()
});

$("#urlInput").change(()=> {
  updateLinkFormats()
});

$("#hideAlert").click(()=> {
  $('#alert').hide()
});

$("#titleCopyButton").click(()=> {
  copyInputToClipboard("#titleInput", "Title")
});

$("#urlCopyButton").click(()=> {
  copyInputToClipboard("#urlInput", "Url")
});

$("#htmlLinkCopyButton").click(()=> {
  copyInputToClipboard("#htmlLinkInput", "HTML")
});

$("#markdownLinkCopyButton").click(()=> {
  copyInputToClipboard("#markdownLinkInput", "Markdown")
});

function copyInputToClipboard(elementId, contentName) {
  let data = $(elementId).val()
  let dt = new clipboard.DT();
  dt.setData("text/plain", data);
  clipboard.write(dt)
  .then(() => {
    $('#alertText').text("Copied " + contentName + " to Clipboard")
    $('#alert').show()
  })
  .catch((error) => {
    console.log(error)
    $('#alertText').text("Error with copying " + contentName + " to Clipboard")
    $('#alert').show()
  })
  $(elementId).select().focus()
}

function updateLinkFormats() {
  let linkTitle = $('#titleInput').val();
  let linkUrl = $('#urlInput').val();
  $('#htmlLinkInput').val("<a href=\"" + linkUrl + "\">" + linkTitle + "</a>")
  $('#markdownLinkInput').val("[" + linkTitle + "](" + linkUrl + ")")
}

function addLinksFromTab(tabs) {
  tab = tabs[0]
  let linkTitle = tab.title;
  let linkUrl = tab.url;
  $('#titleInput').val(linkTitle);
  $('#urlInput').val(linkUrl);
  updateLinkFormats()
}

if(navigator.userAgent.indexOf("Chrome") > -1) {
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
    addLinksFromTab(arrayOfTabs);
  });
  // This enables links to be opened in new tabs
  window.addEventListener('click',function(e){
    if(e.target.href!==undefined){
      chrome.tabs.create({url:e.target.href})
    }
  })
} else {
  browser.tabs.query({active: true, currentWindow: true})
    .then(addLinksFromTab);
  // This enables links to be opened in new tabs
  window.addEventListener('click',function(e){
    if(e.target.href!==undefined){
      browser.tabs.create({url:e.target.href})
    }
  })
}
