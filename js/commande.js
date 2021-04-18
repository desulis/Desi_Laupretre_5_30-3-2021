const parametres = window.location.search.replace("?", "").split("&");
const idTeddy = parametres[0].replace("id=", "");
const idCommande = parametres[1].replace("orderid=", "");
const prixtotal = parametres[2].replace("price=", "");

document.getElementById("numerocommande").textContent = idCommande;
document.getElementById("prixtotal").textContent = prixtotal;

get("http://localhost:3000/api/teddies/" + idTeddy).then((teddy) => {
    commande(teddy); 
}) 

function commande(teddy) {
	const teddyAchete = document.getElementById('teddy-achete');
	const imageBear = teddyAchete.querySelector('img'); 
	imageBear.src = teddy.imageUrl;
}

