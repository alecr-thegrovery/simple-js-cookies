$(document).ready(function(){
	//console.log("script start");
	var targetParam = "gated_content";
	var targetParamUnlock = "unlocked";
	var gatedContentElement = $("[data-gated-content]");
	gatedContentCSS();
	gatedContent(targetParam, targetParamUnlock);

	function gatedContent(targetParam, targetParamUnlock) {
		console.log("gatedContent start");
		var searchParams = new URLSearchParams(window.location.search); 

		if(searchParams.get(targetParam)===targetParamUnlock) {
			//Parameter is present in URL.  Grab and store parameter value
			//Add parameter to localStorage, then show gated content
			//console.log("gatedContent if 1");
			var targetParamVal = searchParams.get(targetParam);
			localStorage.setItem(targetParam, targetParamVal);
			
			gatedContentShow();
		}else if(localStorage.getItem(targetParam)){
			//Parameter is not present in URL, but is present in localStorage
			//show gated content
			//console.log("gatedContent if 2");
			gatedContentShow();
		} else{
			//Parameter is not present in URL or localStorage
			//Do nothing, or display gated content warning
			//console.log("gatedContent else");
		}
	};

	function gatedContentShow(){
		$("[data-gated-content]").attr("data-gated-content", "unlocked");
	};

	function gatedContentCSS(){
		var css = '\
			<style type="text/css">\
				.gatedContent{\
					display: none;\
				}\
				.gatedContentWarning{\
					display: block;\
				}\
				.gatedContent[data-gated-content="unlocked"]{\
					display: block;\
				}\
				.gatedContentWarning[data-gated-content="unlocked"]{\
					display: none;\
				}\
			</style>\
		';
		$("body").append(css);
	};

});