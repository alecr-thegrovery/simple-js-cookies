# simple-js-cookies

## Usage
Use this code to look for a localStorage variable and perform an action based on it.  Just add the index.js script to the page and wrap your gated content in the HTML code below.  

```html
<div class="gatedContent" data-gated-content="">
	GATED CONTENT SUCCESS
</div>

<div class="gatedContentWarning" data-gated-content="">
	GATED CONTENT WARNING
</div>
```

## Example
Here is an example page with the unlock parameter. To test more than once, open in an incognito window, then close, then open a new incognito window.
- https://grovery-simple-js-cookies.netlify.app/
- https://grovery-simple-js-cookies.netlify.app/?gated_content=unlocked

## Requirements
Requires jQuery.

## Notes
- localStorage: long term storage for the browser.  Expires when user clears history.
- sessionStorage: short term storage just for the current tab. Expires when user closes tab, doesn't apply to other tabs.
- URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

## Coming Soon
- Publish as an NPM package
- Add localStorage/sessionStorage option
- expand options to use in different use cases.