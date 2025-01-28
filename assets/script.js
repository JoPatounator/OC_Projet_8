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

//---------------------------------------------------- Initialisation ---------------------------------------------------------
let fichierImgActuel = "";
let indexImgActuelle = null;
create_points();
synchro_point();
nom_image_actuelle();
indexImgActuelle = find_index(fichierImgActuel);
synchro_point(indexImgActuelle);
//debugVariables(fichierImgActuel, indexImgActuelle);
//-----------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------- Fonction création des points ----------------------------------------------
function create_points() {
	let conteneurPoints = document.querySelector('.liste_dots');
	conteneurPoints.innerHTML = '';
	let pointsHtml = '';
	for (let nombrePoints = 0; nombrePoints < slides.length; nombrePoints++) {
		pointsHtml += '<li class="dot"></li>';
	}
	conteneurPoints.innerHTML = pointsHtml;
}
//-----------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------- Fonction de debug  ------------------------------------------------
function debugVariables(fichierImgActuel, indexImgActuelle) {
	console.log("Nom du fichier de l'image actuellement chargée -----> " + nom_image_actuelle());
	console.log("Index de l'image actuelle -----> " + find_index(fichierImgActuel));
}
//-----------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------- Evènements click Gauche / Droite ---------------------------------------
// Événement onclick flèche gauche
let flecheGauche = document.querySelector(".arrow_left");
flecheGauche.onclick = function () {
	//console.log("Flèche gauche cliquée");
	fichierImgActuel = nom_image_actuelle();
	indexImgActuelle = find_index(fichierImgActuel);
	indexImgActuelle = defil_image_left(indexImgActuelle);
	maj_imgtxt_slider(indexImgActuelle);
	synchro_point(indexImgActuelle);
	//debugVariables(fichierImgActuel, indexImgActuelle);
};

// Événement onclick flèche droite
let flecheDroite = document.querySelector(".arrow_right");
flecheDroite.onclick = function () {
	//console.log("Flèche droite cliquée");
	fichierImgActuel = nom_image_actuelle();
	indexImgActuelle = find_index(fichierImgActuel);
	indexImgActuelle = defil_image_right(indexImgActuelle);
	maj_imgtxt_slider(indexImgActuelle);
	synchro_point(indexImgActuelle);
	//debugVariables(fichierImgActuel, indexImgActuelle);
};
//-----------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------- Identification de l'image actuelle --------------------------------------------
function nom_image_actuelle() {
	bannerImg = document.querySelector('.banner-img');
	bannerImgSrc = bannerImg.currentSrc;
	decoupeSrcImg = bannerImgSrc.split('/');
	fichierImgActuel = decoupeSrcImg.pop();
	return fichierImgActuel;
}
//-----------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------ Fonction de recherche d'index ----------------------------------------------
function find_index(fichierImgActuel) {
	for (indexImgActuelle = 0; indexImgActuelle < slides.length; indexImgActuelle++) {
		if (slides[indexImgActuelle].image === fichierImgActuel) {
			return indexImgActuelle;
		}
	}
	return -1;  // -1 si image non trouvée
}
//-----------------------------------------------------------------------------------------------------------------------------

//--------------------------------------- Activation du point en focntion de l'image ------------------------------------------
function synchro_point(indexImgActuelle) {
	let points = document.querySelectorAll('.dot');
	for (let i = 0; i < points.length; i++) {
		if (i === indexImgActuelle) {
			points[i].classList.add('dot_selected');
		} else {
			points[i].classList.remove('dot_selected');
		}
	}
}
//-----------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------- Mise a jour image texte du slider --------------------------------------------
function maj_imgtxt_slider(indexImgActuelle) {
	let nouvelleImageSrc = `./assets/images/slideshow/${slides[indexImgActuelle].image}`;
	//console.log(nouvelleImageSrc);
	document.querySelector('.banner-img').src = nouvelleImageSrc;
	document.querySelector('#banner p').innerHTML = slides[indexImgActuelle].tagLine;
}
//-----------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------ Fonctions de défilement images ---------------------------------------------
function defil_image_left(indexImgActuelle) {
	indexImgActuelle--;
	if (indexImgActuelle < 0) {
		indexImgActuelle = slides.length - 1;
	}
	//debugVariables(fichierImgActuel, indexImgActuelle);
	return indexImgActuelle;
}

function defil_image_right(indexImgActuelle) {
	indexImgActuelle++;
	if (indexImgActuelle >= slides.length) {
		indexImgActuelle = 0;
	}
	//debugVariables(fichierImgActuel, indexImgActuelle);
	return indexImgActuelle;
}
//-----------------------------------------------------------------------------------------------------------------------------




