<p align="left">
  <a href="https://addons.mozilla.org/en-US/firefox/addon/link-formatter/">
    <img src="images/FirefoxAddOns.png" width="300" style="border-radius: 10px;"/>
  </a>
  <a href="https://chrome.google.com/webstore/detail/link-formatter/ahppkjpijfgfcdpailnodpieckleplma">
    <img src="images/ChromeWebStore.png" width="300" style="border-radius: 10px;"/>
  </a>
</p>

# Link Formatter

A browser extension to format and copy links.

<img src="images/screenshot.png" width="300">

## Usage

- Install the extension (see options below)
- Click on the icon in your browser toolbar
- It will display the tab's link text and url, along with html and markdown formats
- You can amend the link text and url to customise it, and the html and markdown links with be automatically updated.
- Click on the copy buttons to copy to the computer's clipboard.
- Paste them into your webpages, blog posts, emails, presentations... etc!

## Installation

This works in both Firefox and Chrome. Follow the instructions below for each browser and the extension's icon should show in your browser. On mobiles it may be listed in the menu instead - try it out!

- [Link Formatter from Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/link-formatter/)
- [Link Formatter from Chrome web store](https://chrome.google.com/webstore/detail/link-formatter/ahppkjpijfgfcdpailnodpieckleplma)

### Save locally on your computer and run extension

- Open your terminal
- cd to a directory where you want to save this
- run: `git clone git@github.com:ryandav/link-formatter.git`
- Then open the browser you wish to use it in and follow the below instructions

#### Chrome
- Visit `chrome://extensions/` in your Chrome browser
- Click `Load Unpacked`
- Select the folder you saved this in

#### Firefox
- Visit `about:debugging`
- Click on `Load Temporary Add-on`
- Select the folder you saved this in

## References

- [How to link to a specific paragraph in your Medium article (2018 Table of Contents method)](https://medium.freecodecamp.org/how-to-link-to-a-specific-paragraph-in-your-medium-article-2018-table-of-contents-method-e66595fea549) The post that I read by Quincy Larson on Medium that led me to try out the below Anchor Links Chrome Extension
- [castroalves/anchor-links: Anchor Links is a free Chrome Extension to add anchor links to Medium and WordPress posts.](https://github.com/castroalves/anchor-links) This inspired me to write this Chrome extension as it is used for making it easier to add links to specific sections of your blog post on Medium

## Dev tools

- [Debugging with Firefox Developer Tools - about:debugging](about:debugging)
- [Chrome Extensions - chrome://extensions/](chrome://extensions/)
- [Imagemagick to create favicon.ico with 16x16 and 32x32 sizes in it](https://gist.github.com/nateware/900d2d09f4884ac0c073)
- [audreyr/favicon-cheat-sheet: Obsessive cheat sheet to favicon sizes/types](https://github.com/audreyr/favicon-cheat-sheet)
- [Using media queries - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [manifest.json - Mozilla | MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json)
- [Manifest File Format - Google Chrome](https://developer.chrome.com/apps/manifest)
- [Your first extension - Mozilla | MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension)
- [Browser Extensions - Mozilla | MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)

## Libraries used

- [lgarron/clipboard-polyfill: Sane copying on the web.](https://github.com/lgarron/clipboard-polyfill)
- [Bootstrap · The most popular HTML, CSS, and JS library in the world.](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Bootswatch.com theme Flatly](https://bootswatch.com/flatly/)
