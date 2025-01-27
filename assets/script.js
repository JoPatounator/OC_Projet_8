const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Événement onclick flèche gauche
let flecheGauche = document.querySelector(".arrow_left");
flecheGauche.onclick =
	function () {
		console.log("Flèche gauche cliquée");

	};

// Événement onclick flèche droite
let flecheDroite = document.querySelector(".arrow_right");
flecheDroite.onclick =
	function () {
		console.log("Flèche droite cliquée");
	};

//--------------------------------------------------------Debug --------------------------------------
let nombreSlides = slides.length;
console.log(nombreSlides);
//----------------------------------------------------------------------------------------------------
// *********************************************** Identification de l'image actuelle *************************************
bannerImg = document.querySelector('.banner-img');
bannerImgSrc = bannerImg.currentSrc;
console.log(bannerImgSrc);
decoupeSrcImg = bannerImgSrc.split('/');
fichierImgActuel = decoupeSrcImg.pop();
console.log(fichierImgActuel);
//indexImgActuelle = slides.indexOf("slide1.jpg");
find_index(fichierImgActuel);

//------------------------------------------------ Fonction de défilement images -----------------------------------------
function defil_image() {
	indexActuel = find_index(fichierImgActuel);


}
//------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------ Fonction de recherche d'index -----------------------------------------
function find_index(fichierImgActuel) {
	for (let i = 0; i < slides.length; i++) {
		console.log(slides[i].image);
		if (slides[i].image === fichierImgActuel) {
			indexImgActuelle = i + 1;
			console.log(indexImgActuelle);
			return indexImgActuelle;
		}
	}
};
//-------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------- Construction des points -------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------