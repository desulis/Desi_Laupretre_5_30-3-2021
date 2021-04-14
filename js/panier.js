// récupérer l'id du produit dans url de la page
const idBear = window.location.search.replace("?id=", ""); //remplacer ?id= par "" vide car j'ai mis ?id= dans ligne 15 produit.js

get("http://localhost:3000/api/teddies/" + idBear).then((response) => {
    cart(response);
}) 

function cart (response) {
    const productBear = document.querySelector('.product-bear')
    const imageBear = productBear.querySelector('img'); 
    const nameBear = productBear.querySelector('.card-title') ; 
    const priceBear = productBear.querySelector('.price-bear') ; 
    const descriptionBear = productBear.querySelector('.description-bear'); 
    imageBear.src = response.imageUrl;
    nameBear.innerText = response.name;
    priceBear.innerText = ("Price : " + (response.price / 100) + " €");
    descriptionBear.innerText = response.description; 
}
// fonction lors submit un formulaire
function order (event) {
    event.preventDefault(); 
    // parametre du post pour envoyer au server
    var jsonBody = { 
        contact: {
            firstName: document.getElementById('firstname').value,
            lastName: document.getElementById('lasttname').value,
            address: document.getElementById('addresse').value,
            city: document.getElementById('city').value,
            email: document.getElementById('email').value,
        },
        products: [idBear]
    }
    // post à cet url avec le jsonBody
    post("http://localhost:3000/api/teddies/order", jsonBody).then((response) => {
        var price = 0
        for (var product of response.products) {
            price += product.price / 100
        }
        window.location.replace("Commande.html?id=" + response.orderId + "&price=" + price);
    })
}