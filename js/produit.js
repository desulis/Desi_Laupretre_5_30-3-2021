const idBear = window.location.search.replace("?id=", ""); // récupere l'id du produit dans l'url mais sans "?id=" 

get("http://localhost:3000/api/teddies/" + idBear).then((teddy) => {
    productChoosen(teddy); 
}) 

function productChoosen (teddy) {
    const productBear = document.querySelector('.product-bear');
    const imageBear = productBear.querySelector('img'); 
    const colorBear = productBear.querySelector('.card-color select') ; 
    const nameBear = productBear.querySelector('.card-title') ; 
    const priceBear = productBear.querySelector('.price-bear') ; 
    const descriptionBear = productBear.querySelector('.description-bear'); 
    const button = productBear.querySelector('a');
    button.setAttribute('href', 'Panier.html?id=' + teddy._id); // rajouté 'href' qui contient l'url personalisé en rajoutant (?id=) et _id de teddy choisi
    imageBear.src = teddy.imageUrl;
    nameBear.innerText = teddy.name;
    priceBear.innerText = ("Price : " + (teddy.price / 100) + " €");
    descriptionBear.innerText = teddy.description;    
    for (let color of teddy.colors) {
        const option = document.createElement('option'); // créer des éléments options
        option.textContent = color;
        colorBear.appendChild(option); // cette option met dans le parent qui a une classe .card-color après select (ligne 10)
    }
}

function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}
  