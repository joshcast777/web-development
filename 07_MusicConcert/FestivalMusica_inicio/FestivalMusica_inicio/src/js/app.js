document.addEventListener("DOMContentLoaded", function () {
	startApp();
});

function startApp() {
	fixedNav();
	createGalery();
	scrollNav();
}

function fixedNav() {
	const bar = document.querySelector(".header");
	const about_festival = document.querySelector(".about-festival");
	const body = document.querySelector("body");

	window.addEventListener("scroll", function () {
		// This method return the position of scroll relative to an element
		// console.log(about_festival.getBoundingClientRect());

		if (about_festival.getBoundingClientRect().top < 0) {
			bar.classList.add("pinup");
			body.classList.add("body-scroll");
		} else {
			bar.classList.remove("pinup");
			body.classList.remove("body-scroll");
		}
	});
}

function scrollNav() {
	const links = document.querySelectorAll(".main-nav");

	links.forEach((link) => {
		link.addEventListener("click", function (evt) {
			// To prevent the default event and program a new one
			evt.preventDefault();

			// Return the href value
			const section_scroll = evt.target.attributes.href.value;

			// Get the value which has id=section_scroll
			const section = document.querySelector(section_scroll);

			// API for the smoothing scroll
			section.scrollIntoView({ behavior: "smooth" });
		});
	});
}

function createGalery() {
	const galery = document.querySelector(".galery-img");

	for (let i = 1; i <= 12; i++) {
		const img = document.createElement("PICTURE");

		img.innerHTML = `
			<source srcset="build/img/thumb/${i}.avif" type="image/avif" />
			<source srcset="build/img/thumb/${i}.webp" type="image/webp" />
			<img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen Galería" loading="lazy" />
		`;

		img.addEventListener("click", function () {
			showImg(i);
		});

		galery.appendChild(img);
	}
}

function showImg(index) {
	const img = document.createElement("PICTURE");

	img.innerHTML = `
		<source srcset="build/img/grande/${index}.avif" type="image/avif" />
		<source srcset="build/img/grande/${index}.webp" type="image/webp" />
		<img loading="lazy" width="200" height="300" src="build/img/grande/${index}.jpg" alt="Imagen Galería" loading="lazy" />
	`;

	// Create the overlay with the image
	const overlay = document.createElement("DIV");

	overlay.appendChild(img);
	overlay.classList.add("overlay");
	overlay.addEventListener("click", function (param) {
		const body = document.querySelector("body");
		overlay.remove();
		body.classList.remove("pinup");
	});

	// Button to close modal window
	const close_modal = document.createElement("P");
	close_modal.textContent = "X";
	close_modal.classList.add("btn-close");
	close_modal.addEventListener("click", function () {
		const body = document.querySelector("body");
		overlay.remove();
		body.classList.remove("pinup");
	});
	overlay.appendChild(close_modal);

	// Add it to HTML
	const body = document.querySelector("body");
	body.appendChild(overlay);
	body.classList.add("pinup");
}
