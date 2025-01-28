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
create_points(); 									//Appel fonction création des points
fichierImgActuel = nom_image_actuelle(); 			// Récupération de l'image presente au premier chargement de la page
indexImgActuelle = find_index(fichierImgActuel); 	// Récupération de l'index de l'image presente au premier chargement de la page
synchro_point(indexImgActuelle); 					// Synchro du point actif initial
//debugVariables(fichierImgActuel, indexImgActuelle);
//-----------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------- Fonction création des points ----------------------------------------------
function create_points() {
	let conteneurPoints = document.querySelector('.liste_dots');
	conteneurPoints.innerHTML = ''; 											// Effacement du conteneur liste_dots
	let pointsHtml = '';														// Variable pour le html des points de la liste
	for (let nombrePoints = 0; nombrePoints < slides.length; nombrePoints++) { 	// Boucle de chargement de la variable
		pointsHtml += '<li class="dot"></li>';
	}
	conteneurPoints.innerHTML = pointsHtml; 									// Affichage des points
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
	console.log("Flèche gauche cliquée");
	fichierImgActuel = nom_image_actuelle();     				//   |
	indexImgActuelle = find_index(fichierImgActuel);			//   |--- Actualisation de l'index et nom de l'image
	indexImgActuelle = defil_image_left(indexImgActuelle);		//   |
	maj_imgtxt_slider(indexImgActuelle);						// Mise à jour de l'image et du tagline
	synchro_point(indexImgActuelle);							// Synchronisation des points
	//debugVariables(fichierImgActuel, indexImgActuelle);
};

// Événement onclick flèche droite
let flecheDroite = document.querySelector(".arrow_right");
flecheDroite.onclick = function () {
	console.log("Flèche droite cliquée");
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
	return fichierImgActuel;					// Retourne le nom de fichier de l'image affichée
}
//-----------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------ Fonction de recherche d'index ----------------------------------------------
function find_index(fichierImgActuel) {
	for (indexImgActuelle = 0; indexImgActuelle < slides.length; indexImgActuelle++) {
		if (slides[indexImgActuelle].image === fichierImgActuel) {
			return indexImgActuelle;			// Retourne l'index de l'image affichée
		}
	}
	return -1;  // -1 si image non trouvée
}
//-----------------------------------------------------------------------------------------------------------------------------

//--------------------------------------- Activation du point en fonction de l'image ------------------------------------------
function synchro_point(indexImgActuelle) {
	let points = document.querySelectorAll('.dot');			// Sélection des éléments ayant la classe CSS dot et stockage dans la variable points
	for (let i = 0; i < points.length; i++) {
		if (i === indexImgActuelle) {
			points[i].classList.add('dot_selected');		// Ajoute la classe dot_selected au point d'index correspondant à l'index de l'image affichée
		} else {
			points[i].classList.remove('dot_selected');		// Retire la classe dot_selected des points d'index correspondant aux images non affichées
		}
	}
}
//-----------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------ Mise à jour image & texte du slider ----------------------------------------
function maj_imgtxt_slider(indexImgActuelle) {
	let nouvelleImageSrc = `./assets/images/slideshow/${slides[indexImgActuelle].image}`; 	// Construction de l'url de la nouvelle image
	//console.log(nouvelleImageSrc);
	document.querySelector('.banner-img').src = nouvelleImageSrc;							// Attribution de la nouvelle URL à l'élément banner-img comme src						
	document.querySelector('#banner p').innerHTML = slides[indexImgActuelle].tagLine;		// Attribution du nouveau tagline à l'élément (#banner p)
}
//-----------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------ Fonctions de défilement images ---------------------------------------------
function defil_image_left(indexImgActuelle) {
	indexImgActuelle--;											// Décrémentation si clik sur flêche gauche
	if (indexImgActuelle < 0) {									//   |
		indexImgActuelle = slides.length - 1;					//   |-----> Test de limite inférieure
	}															//   |
	//debugVariables(fichierImgActuel, indexImgActuelle);
	return indexImgActuelle;
}

function defil_image_right(indexImgActuelle) {
	indexImgActuelle++;											// Incrémentation si click sur flêche droite
	if (indexImgActuelle >= slides.length) {					//   |
		indexImgActuelle = 0;									//   |-----> Test de limite supérieure
	}															//   |
	//debugVariables(fichierImgActuel, indexImgActuelle);
	return indexImgActuelle;
}
//-----------------------------------------------------------------------------------------------------------------------------




