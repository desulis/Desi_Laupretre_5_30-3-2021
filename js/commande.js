const parametres = window.location.search.replace("?", "").split("&"); //split by "&"
const idCommande = parametres[0].replace("orderid=", "");
const prixtotal = parametres[1].replace("price=", "");

const items = JSON.parse(localStorage.getItem('items'));

let total = 0;
for (let item of items) {
	total += item.price * item.qty / 100;
}

document.getElementById("numerocommande").textContent = idCommande; //show the order's id
document.getElementById("prixtotal").textContent = total; //the price total

// function emptyCart () {
//     if (items.length === 0) {        
//         return items = []
//     } 
// }
// function supprimer() {
//     localStorage.setItem('items', JSON.stringify([]))
//     return emptyCart()
// }
