// Link Formatter js

// hide the alert until a copy button pressed
$('#alert').hide()

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
  trigger: 'focus'
})

// These are for updating the formatted links when user amends link text or url
$( "#textInput" ).keyup(function() {
  updateLinkFormats()
});

$( "#urlInput" ).keyup(function() {
  updateLinkFormats()
});

$("#textInput").change(()=> {
  updateLinkFormats()
});

$("#urlInput").change(()=> {
  updateLinkFormats()
});

// to close the alert
$("#hideAlert").click(()=> {
  $('#alert').hide()
});

// Copy button events
$("#textCopyButton").click(()=> {
  copyInputToClipboard("#textInput", "Title")
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
    $(elementId).popover('show')
    $(elementId).select()
    setTimeout(() => { $(elementId).popover('hide') }, 2000)
  })
  .catch((error) => {
    console.log(error)
    $('#alertText').text("Error with copying " + contentName + " to Clipboard")
    $('#alert').show()
  })
  // $(elementId).select()
}

function updateLinkFormats() {
  let linkText = $('#textInput').val();
  let linkUrl = $('#urlInput').val();
  $('#htmlLinkInput').val("<a href=\"" + linkUrl + "\">" + linkText + "</a>")
  $('#markdownLinkInput').val("[" + linkText + "](" + linkUrl + ")")
}

function addLinksFromTab(tabs) {
  tab = tabs[0]
  let linkText = tab.title;
  let linkUrl = tab.url;
  $('#textInput').val(linkText);
  $('#urlInput').val(linkUrl);
  updateLinkFormats()
}

// To enable cross browser use you need to see if this is Chrome or not
if(chrome !== undefined) {
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
    addLinksFromTab(arrayOfTabs);
  });
  // This enables links to be opened in new tabs
  window.addEventListener('click',function(e){
    if(e.target.href !== undefined){
      chrome.tabs.create({url:e.target.href})
    }
  })
} else {
  browser.tabs.query({active: true, currentWindow: true})
    .then(addLinksFromTab);
  // This enables links to be opened in new tabs
  window.addEventListener('click',function(e){
    if(e.target.href !== undefined){
      browser.tabs.create({url:e.target.href})
    }
  })
}
