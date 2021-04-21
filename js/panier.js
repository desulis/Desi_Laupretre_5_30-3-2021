// récupérer l'id du produit dans url de la page
// const idBear = window.location.search.replace("?id=", ""); //remplacer ?id= par "" vide car j'ai mis ?id= dans ligne 15 produit.js
const items = JSON.parse(localStorage.getItem('items'));
console.log(items);

if (items.length === 0) {
    const messageVide = document.querySelector('.message-vide');
    messageVide.textContent = "Votre panier est vide !";
} // si l'utilisateur n'a pas ajouté un produit dans le panier mais ils vont dans l'icon navigation Panier, affiche un message "Votre panier est vide"
const table = document.getElementById('items-cart');

// function addRow (name, qty, price){
//     const tr = document.createElement("tr");
//     const td = document.createElement("td");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     td.textContent = name;
//     td1.textContent = qty;
//     td2.textContent = price / 100 + " €";
//     table.appendChild(tr);
//     tr.appendChild(td);
//     tr.appendChild(td1);
//     tr.appendChild(td2);
// }

function addRow(values) {
    const tr = document.createElement("tr");
    for (let value of values) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

let total = 0;
let totalQty = 0;
for (let item of items) {
    addRow([item.name, item.qty, item.price/100 + " €"]);
    total += item.price * item.qty;
    totalQty += item.qty;
}

addRow(["Total", totalQty, (total/100)+ " €"]);

function cart (teddy) {
    const productBear = document.querySelector('.product-bear')
    const imageBear = productBear.querySelector('img'); 
    const nameBear = productBear.querySelector('.card-title') ; 
    const priceBear = productBear.querySelector('.price-bear') ; 
    const descriptionBear = productBear.querySelector('.description-bear'); 
    imageBear.src = teddy.imageUrl;
    nameBear.innerText = teddy.name;
    priceBear.innerText = ("Price : " + (teddy.price / 100) + " €");
    descriptionBear.innerText = teddy.description; 
}
// fonction lors submit un formulaire
function order (event) {
    event.preventDefault(); 
    // parametre du post pour envoyer au server
    const jsonBody = { 
        contact: {
            firstName: document.getElementById('firstname').value,
            lastName: document.getElementById('lasttname').value,
            address: document.getElementById('addresse').value,
            city: document.getElementById('city').value,
            email: document.getElementById('email').value,
        },
        products: [idBear]
    }
    // post (créer une ressource) et envoie à cet url avec le jsonBody qu'on a créé
    post("http://localhost:3000/api/teddies/order", jsonBody).then((order) => {
        let price = 0
        for (let product of order.products) {
            price += product.price / 100
        }
        window.location.replace("Commande.html?id=" + idBear + "&orderid=" + order.orderId + "&price=" + price); // paramétrer l'url pour la page de commande
    })
}

