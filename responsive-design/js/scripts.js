const ipad = window.matchMedia("screen and (max-width: 767px)");

const burgetButton = document.querySelector("#burger-menu");
const menu = document.querySelector(".menu");

// if (ipad.matches)
// 	burgetButton.addEventListener("click", () => {
// 		hideShow();
// 	});

ipad.addListener(validation);

function validation(event) {
	if (event.matches) {
		burgetButton.addEventListener("click", () => {
			hideShow();
		});
	} else {
		burgetButton.removeEventListener("click", () => {
			hideShow();
		});
	}
}

function hideShow() {
	menu.classList.toggle("is-active");
}
