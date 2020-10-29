const burgetButton = document.querySelector("#burger-menu");
const menu = document.querySelector(".menu");

burgetButton.addEventListener("click", () => {
	hideShow();
});

function hideShow() {
	menu.classList.toggle("is-active");
}
