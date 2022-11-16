$(document).ready(function(){
	var targetParam = "gated_content";
	var targetParamUnlock = true;
	var gatedContentElement = $("[data-gated-content]");

	function gatedContent(targetParam, targetParamVal) {
		var searchParams = new URLSearchParams(window.location.search); 

		if(searchParams.has(targetParam)) {
			//Parameter is present in URL.  Grab and store parameter value
			//Add parameter to localStorage, then show gated content
			var targetParamVal = searchParams.get(targetParam);
			localStorage.setItem(targetParam, targetParamVal);
		}else if(localStorage.getItem(targetParam)){
			//Parameter is not present in URL, but is present in localStorage
			//show gated content
		} else{
			//Parameter is not present in URL or localStorage
			//Do nothing, or display gated content warning
		}
	};

});