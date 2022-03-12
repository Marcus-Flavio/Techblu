function send() {
	document.getElementById("contact__form").addEventListener("submit", function (event) {
		event.preventDefault();
		emailjs.sendForm("service_l7753n9", "template_4fk95cd", this).then(
			function () {
				document.getElementById("contact__form").reset();
				console.log("SUCCESS!");
				return;
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);
	});
}
