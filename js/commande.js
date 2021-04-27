const parametres = window.location.search.replace("?", "").split("&"); //split by "&"
const idCommande = parametres[0].replace("orderid=", "");
const prixtotal = parametres[1].replace("price=", "");

const items = JSON.parse(localStorage.getItem('items'));

let total = 0; //count the total price
for (let item of items) {
	total += item.price * item.qty / 100;
}

document.getElementById("numerocommande").textContent = idCommande; //show the order's id
document.getElementById("prixtotal").textContent = total; //the price total

localStorage.setItem('items', JSON.stringify([])) //empty the cart when the order is finished





