get("http://localhost:3000/api/teddies").then((teddies) => {
	displayItems(teddies);
}) // appeler et récupérer les listes de produit teddy du server 3000

function displayItems(teddies) { // une fonction qui va remplir les cards du site jusqu'à la dernier article ou le limit
	const productsBear = document.getElementsByClassName('product-bear'); 
	for (let i = 0; i < productsBear.length; i++) { // (i) = chaque article du produit de teddy qui exist dans le server
		const imageBear = productsBear[i].getElementsByTagName('img') [0]; //table de liste de l'image commence par 0
		imageBear.src = teddies[i].imageUrl; // chaque (i) rempli le (.src) par valeur qui est dedans le mot-clé imageUrl
		const urlBear = productsBear[i];
		urlBear.setAttribute('href', 'Produit.html?id=' + teddies[i]._id); // mettre un compliment dans l'url de chaque article qui dirige sur le page produit.html en rajoutant ?= et l'id de chaque teddy par mot-clé (_id)
		const nameBear = productsBear[i].getElementsByClassName('card-title') [0]; 
		nameBear.innerText = teddies[i].name; // chaque (i) rempli le valeur d'élément 'card-title' par valeur qui est dedans le mot-clé name
		const priceBear = productsBear[i].getElementsByClassName('price-bear') [0]; 
		priceBear.innerText = ("Price : " + (teddies[i].price / 100) + " €"); // le prix est divisé par 100 pour avoir un prix en euro
	
		const descriptionBear = productsBear[i].getElementsByClassName('description-bear') [0]; 
		descriptionBear.innerText = teddies[i].description; // chaque (i) rempli le valeur d'élément 'description-bear' par valeur qui est dedans le mot-clé description
	}
}

