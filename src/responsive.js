function nav() {
	var x = document.getElementById("menu");
	if (x.className === "menu") {
		x.className += "-responsive";
	} else {
		x.className = "menu";
	}
}
