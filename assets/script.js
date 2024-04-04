const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var currentSlideIndex = 0;

var arrowLeft = document.querySelector(".arrow_left");
var arrowRight = document.querySelector(".arrow_right");

var nbrSlides = slides.length;
console.log(nbrSlides);

var divDots = document.querySelector("#banner > div");

/* ---- */
/* Pour ajouter le nbr de dot en fonction de la taille du tableau */

for (var i = 0; i < nbrSlides; i++) {
	var dot = document.createElement("span");
	dot.classList.add("dot");
	divDots.appendChild(dot);
}

/* ---- */
/* Pour mettre à jour le contenu du carrousel */
var bannerImg = banner.querySelector(".banner-img");
var bannerText = banner.querySelector("p");

function updateCarousel() {
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	bannerText.innerHTML = slides[currentSlideIndex].tagLine;
}

/* ---- */
/* EventListener pour la flèche de gauche */

arrowLeft.addEventListener("click", function () {
	console.log("Je clique sur la flèche de gauche !")

	currentSlideIndex--;
	updateCarousel();

});

/* ---- */
/* EventListener pour la flèche de droite */

arrowRight.addEventListener("click", function () {
	console.log("Je clique sur la flèche de droite !")

	currentSlideIndex++;
    updateCarousel();
});

// Mettre à jour le contenu initial du carrousel
updateCarousel();