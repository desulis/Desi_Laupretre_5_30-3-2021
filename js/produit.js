const idBear = window.location.search.replace("?id=", "");
console.log(idBear);

var productBear = document.querySelector('.product-bear')
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        const imageBear = productBear.querySelector('img'); 
        const colorBear = productBear.querySelector('.card-color') ; 
        const nameBear = productBear.querySelector('.card-title') ; 
        const priceBear = productBear.querySelector('.price-bear') ; 
        const descriptionBear = productBear.querySelector('.description-bear'); 
        // console.log(imageBear); //test to take a good image
        imageBear.src = response.imageUrl;
        colorBear.innerText = "Colors: " + response.colors;
        nameBear.innerText = response.name;
      
        priceBear.innerText = ("Price : " + (response.price / 100) + " €");
      
        descriptionBear.innerText = response.description;    
    }
};
request.open("GET", "http://localhost:3000/api/teddies/" + idBear);
request.send();