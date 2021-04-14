get("http://localhost:3000/api/teddies").then((response) => {
  displayItems(response);
})

function displayItems(response) {
  const productsBear = document.getElementsByClassName('product-bear');
  for (let i = 0; i < productsBear.length; i++) {
    const imageBear = productsBear[i].getElementsByTagName('img') [0]; 
    imageBear.src = response[i].imageUrl;
    const urlBear = productsBear[i];
    urlBear.setAttribute('href', 'Produit.html?id=' + response[i]._id);
    const nameBear = productsBear[i].getElementsByClassName('card-title') [0]; 
    nameBear.innerText = response[i].name;
  
    const priceBear = productsBear[i].getElementsByClassName('price-bear') [0]; 
    priceBear.innerText = ("Price : " + (response[i].price / 100) + " €");
  
    const descriptionBear = productsBear[i].getElementsByClassName('description-bear') [0]; 
    descriptionBear.innerText = response[i].description;
  }
}

