(function(win) {
	function onOff(event) {
		console.log("oi");

		document.querySelector("#modal").classList.toggle("hide");
		document.querySelector("body").classList.toggle("hideScroll");
		document.querySelector("#modal").classList.toggle("addScroll");
	}
	win.onOff = onOff;
})(window);
