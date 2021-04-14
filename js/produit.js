const idBear = window.location.search.replace("?id=", "");

get("http://localhost:3000/api/teddies/" + idBear).then((response) => {
    productChoosen(response);
}) 

function productChoosen (response) {
    const productBear = document.querySelector('.product-bear');
    const imageBear = productBear.querySelector('img'); 
    const colorBear = productBear.querySelector('.card-color select') ; 
    const nameBear = productBear.querySelector('.card-title') ; 
    const priceBear = productBear.querySelector('.price-bear') ; 
    const descriptionBear = productBear.querySelector('.description-bear'); 
    const button = productBear.querySelector('a');
    button.setAttribute('href', 'Panier.html?id=' + response._id); // url personalisé en rajoutant (?id=) 
    imageBear.src = response.imageUrl;
    nameBear.innerText = response.name;
    priceBear.innerText = ("Price : " + (response.price / 100) + " €");
    descriptionBear.innerText = response.description;    
    for (let color of response.colors) {
        var option = document.createElement('option');
        option.textContent = color;
        colorBear.appendChild(option);
    }
}
  