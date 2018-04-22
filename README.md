# Link Formatter

An extension/add-on for browsers to format links. When you click on the extension it will display the link of the current tab as an anchor link, html and markdown.  

This is useful to copy and paste links for webpages into blog posts, presentations, emails etc. The main motivation for making this was having to copy the title and url manually so many times.

<a href="https://addons.mozilla.org/en-US/firefox/addon/link-formatter/"><img src="screenshot.png" width="300"></a>

## Usage

This works in both Firefox and Chrome. Follow the instructions below for each browser and the extension's icon should show in your browser. On mobiles it may be listed in the menu instead - try it out!

- [Link Formatter from Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/link-formatter/)
- [Link Formatter from Chrome web store](https://chrome.google.com/webstore/detail/link-formatter/ahppkjpijfgfcdpailnodpieckleplma)

## Save locally and run extension

- Save this project locally on your computer, eg cd to directory, `git clone git@github.com:ryandav/link-formatter.git`

### Chrome
- Visit `chrome://extensions/` in your Chrome browser
- Click `Load Unpacked`
- Select the folder you saved this in

### Firefox
- Visit `about:debugging`
- Click on `Load Temporary Add-on`
- Select the folder you saved this in

## Web Extension Tutorials

- https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox
- https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_second_WebExtension
- https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/background.js
- https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types

## References

- https://medium.freecodecamp.org/how-to-link-to-a-specific-paragraph-in-your-medium-article-2018-table-of-contents-method-e66595fea549 The post that I read by Quincy Larson on Medium that led me to try out the below Anchor Links Chrome Extension
- https://github.com/castroalves/anchor-links This inspired me to write this Chrome extension as it is used for making it easier to add links to specific sections of your blog post on Medium

## Libraries used

- [lgarron/clipboard-polyfill: Sane copying on the web.](https://github.com/lgarron/clipboard-polyfill)
- [Bootstrap · The most popular HTML, CSS, and JS library in the world.](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Popper.js](https://popper.js.org/)

## Possible extensions

- List in Chrome web store
- Icons
- Consider Context menu option
- Add multiple links to a list to copy all together
