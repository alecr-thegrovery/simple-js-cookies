# simple-js-cookies

## Usage
Use this code to look for a localStorage variable and perform an action based on it.  Just add the index.js script to the page and wrap your gated content in the HTML code below.  

```
<div class="gatedContent" data-gated-content="">
	GATED CONTENT SUCCESS
</div>

<div class="gatedContentWarning" data-gated-content="">
	GATED CONTENT WARNING
</div>
```

## Requirements
Requires jQuery.

## Notes
- localStorage: long term storage for the browser.  Expires when user clears history.
- sessionStorage: short term storage just for the current tab. Expires when user closes tab, doesn't apply to other tabs.

## Coming Soon
- Publish as an NPM package
- Add localStorage/sessionStorage option
- expand options to use in different use cases.