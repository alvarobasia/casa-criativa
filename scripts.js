(function(win) {
	function onOff(event) {
		console.log("oi");

		document.querySelector("#modal").classList.toggle("hide");
	}
	win.onOff = onOff;
})(window);
