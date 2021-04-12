const productsBear = document.getElementsByClassName('product-bear');

//console.log(productsBear);

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        for (let i = 0; i < productsBear.length; i++) {
          const imageBear = productsBear[i].getElementsByTagName('img') [0]; 
          console.log(imageBear); //test to take a good image
          imageBear.src = response[i].imageUrl;
        
          const nameBear = productsBear[i].getElementsByClassName('card-title') [0]; 
          nameBear.innerText = response[i].name;
        
          const priceBear = productsBear[i].getElementsByClassName('price-bear') [0]; 
          priceBear.innerText = ("Price : " + (response[i].price / 100) + " €");
        
          const descriptionBear = productsBear[i].getElementsByClassName('description-bear') [0]; 
          descriptionBear.innerText = response[i].description;
        }
    }
};
request.open("GET", "http://localhost:3000/api/teddies");
request.send();