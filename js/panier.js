// récupérer l'id du produit dans url de la page
const idBear = window.location.search.replace("?id=", ""); //remplacer ?id= par "" vide car j'ai mis ?id= dans ligne 15 produit.js
if (idBear) {
    get("http://localhost:3000/api/teddies/" + idBear).then((teddy) => {
        cart(teddy);
    })
}else{
    const messageVide = document.querySelector('.message-vide');
    messageVide.textContent = "Votre panier est vide !";
} // si l'utilisateur n'a pas ajouté un produit dans le panier mais ils vont dans le navigation Panier (en icon), affiche un message "Votre panier est vide"


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
    // post à cet url avec le jsonBody qu'on a créé
    post("http://localhost:3000/api/teddies/order", jsonBody).then((order) => {
        let price = 0
        for (let product of order.products) {
            price += product.price / 100
        }
        window.location.replace("Commande.html?id=" + idBear + "&orderid=" + order.orderId + "&price=" + price); // paramétrer l'url pour la page de commande
    })
}

/*const email = document.getElementById('email');

email.addEventListener('input', function(e) {
    if (/@/.test(e.target.value)) {
          codeValide.innerText = 'Code valide !';
          btn.removeAttribute('disabled')      
      } else {
          codeValide.innerText = 'Code invalide !';
          btn.setAttribute('disabled', true)
      }
})*/