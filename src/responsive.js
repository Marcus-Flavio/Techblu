function nav() {
	var x = document.getElementsByClassName("menu");
	if (x.className === "menu") {
		x.className += "-responsive";
		console.log(x.className);
	} else {
		x.className = "menu";
	}
}
