document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

function toggleMenu() {
	document.getElementsByClassName("primaryNav")[0].classList("responsive");
}

