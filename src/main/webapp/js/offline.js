// Online / offline monitoring
// Need jQuery (or a library implementing the same $.ajax api)
// See http://ednortonengineeringsociety.blogspot.fr/2010/10/detecting-offline-status-in-html-5.html
// MIT license

// Check online status function
(function ($) {
	
	var checkOnline = function (resultCallback) {
		if (navigator.onLine) {
			console.log("navigator onLine");
			$.ajax({
				cache : false,
				timeout : 2800,
				url : "js/onlineCheck.txt",
				dataType : "html" // be carefull on the datatype
			}).done(function(resp) { 
				if (resp === "online") {
					console.log("onlineCheckDone with online response");
					resultCallback(true);
				} else {
					console.log("onlineCheckDone with wrong response");
					resultCallback(false);
				}
			}).fail(function() { 
				console.log("onlineCheckFail");
				resultCallback(false); 
			});
		} else {
			console.log("navigator offLine");
			resultCallback(false);
		}
	};
	
	
	// Result callback
	var onLineCallBack = function (statusOnLine) {
		var statusElem = document.getElementById("linestatus");
		if (statusOnLine === true) {
			statusElem.className = 'status_online status_span';
			statusElem.innerHTML = 'online';
		} else {
			statusElem.className = 'status_offline status_span';
			statusElem.innerHTML = 'offline';
		}
	};
	
	
	// Launch test status
	setInterval(function() {
		checkOnline(onLineCallBack);
	}, 3000);

})(jQuery);

