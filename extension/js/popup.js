// Link Formatter js

// hide the alert that will be triggered if there is a failure to copy text
$('#alert').hide()
// to close the alert
$("#hideAlert").click( () => { $('#alert').hide() } );

// updating the formatted links when user amends link text or url
$( "#textInput, #urlInput" ).on("keyup change", () => {
  updateLinkFormats()
});

// Copy button events, obtains the input id from amending the button id
$("button").click((event) => {
  let inputId = "#" + event.target.id.replace("CopyButton", "Input")
  copyInputToClipboard(inputId)
});

function copyInputToClipboard(elementId) {
  let data = $(elementId).val()
  let dt = new clipboard.DT();
  dt.setData("text/plain", data);
  clipboard.write(dt)
  .then(() => {
    // confirm successful copy
    $('[data-toggle="popover"]').popover('disable')
    $('[data-toggle="popover"]').popover('hide')
    $(elementId).popover('enable')
    $(elementId).popover('show')
    $(elementId).select()
    setTimeout(() => {
      $(elementId).popover('disable')
      $(elementId).popover('hide') 
    }, 2000)
  })
  .catch((error) => {
    console.log(error)
    $('#alertText').text("Error occurred when trying to copy to clipboard")
    $('#alert').show()
  })
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
  chrome.tabs.query({active: true, currentWindow: true}, (arrayOfTabs) => {
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
