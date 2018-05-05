// Link Formatter js

// hide the alert that will be triggered if there is a failure to copy text
$('#alert').hide()

// to close the alert
$("#alert").click(() => { $('#alert').hide() });

// updating the formatted links when user amends link text or url
$( "#textInput, #urlInput" ).on("keyup change", () => { updateLinkFormats() });

// Copy button events, obtains the input id from amending the button id
$("button").click((event) => {
  let inputId = "#" + event.target.id.replace("CopyButton", "Input")
  copyInputToClipboard(inputId)
});

const copyInputToClipboard = (elementId) => {
  let data = $(elementId).val()
  let dt = new clipboard.DT();
  dt.setData("text/plain", data);
  clipboard.write(dt)
  .then(() => {
    // confirm successful copy
    $('[data-toggle="popover"]').popover('disable').popover('hide')
    $(elementId).popover('enable').popover('show')
    setTimeout(() => { $(elementId).popover('disable').popover('hide') }, 2000)
    $(elementId).select()
  })
  .catch((error) => {
    alertError(error, "Error occurred when trying to copy to clipboard")
  })
}

const alertError = (error, message) => {
  console.log(message)
  console.log(error)
  $('#alertText').text(message)
  $('#alert').show()
}

const updateLinkFormats = () => {
  let linkText = $('#textInput').val();
  let linkUrl = $('#urlInput').val();
  $('#htmlLinkInput').val("<a href=\"" + linkUrl + "\">" + linkText + "</a>")
  $('#markdownLinkInput').val("[" + linkText + "](" + linkUrl + ")")
}

const addLinkDataFromTab = (tabs) => {
  currentTab = tabs[0]
  $('#textInput').val(currentTab.title);
  $('#urlInput').val(currentTab.url);
  updateLinkFormats()
}

// To enable cross-browser use you need to see if this is Chrome or not
if(chrome !== undefined) {
  try {
    chrome.tabs.query(
      {active: true, currentWindow: true},
      (arrayOfTabs) => { addLinkDataFromTab(arrayOfTabs) }
    );
  }
  catch(error) {
    alertError(error, "Error occurred when trying to get current tab info")
  }
  // This enables links to be opened in new tabs
  window.addEventListener('click', (event) => {
    if(event.target.href !== undefined){
      chrome.tabs.create({url:event.target.href})
    }
  })
} else {
  browser.tabs.query({active: true, currentWindow: true})
    .then(addLinkDataFromTab)
    .catch((error) => {
      alertError(error, "Error occurred when trying to get current tab info")
    })
  // This enables links to be opened in new tabs
  window.addEventListener('click', (event) => {
    if(event.target.href !== undefined){
      browser.tabs.create({url:event.target.href})
    }
  })
}
