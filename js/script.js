//call then get the list of the products of teddy from the server
get("http://localhost:3000/api/teddies").then((teddies) => {
	displayItems(teddies);
})

//function that fill the column (cards of Bootstrap) until the last of it or the limit
function displayItems(teddies) {
	const productsBear = document.getElementsByClassName('product-bear'); 
	for (let i = 0; i < productsBear.length; i++) { // (i) = iteration for each article of the teddies on server
		const imageBear = productsBear[i].getElementsByTagName('img') [0]; //on every loop, function displayItems get image 
		imageBear.src = teddies[i].imageUrl; // src from imageUrl on the server
		const urlBear = productsBear[i];
		urlBear.setAttribute('href', 'Produit.html?id=' + teddies[i]._id); // put a compliment on the url that goes to product page (produit.html) with their id (_id)
		const nameBear = productsBear[i].getElementsByClassName('card-title') [0]; 
		nameBear.innerText = teddies[i].name;
		const priceBear = productsBear[i].getElementsByClassName('price-bear') [0]; 
		priceBear.innerText = ("Price : " + (teddies[i].price / 100) + " €"); // the price divided by 100 to get a more integer number for a Euro	
		const descriptionBear = productsBear[i].getElementsByClassName('description-bear') [0]; 
		descriptionBear.innerText = teddies[i].description;
	}
}

