document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

function toggleMenu() {
	document.getElementsByClassName("nav-item")[0].classList("responsive");
}

