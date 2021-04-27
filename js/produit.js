const idBear = window.location.search.replace("?id=", ""); //to take the id but without "?id=" 
let objTeddy;

get("http://localhost:3000/api/teddies/" + idBear).then((teddy) => {
    productChoosen(teddy); 
}) 

//for every choosen teddy from the home page will redirect to a page with more detail
function productChoosen (teddy) {
    objTeddy = teddy;
    const productBear = document.querySelector('.product-bear');
    const imageBear = productBear.querySelector('img'); 
    const colorBear = productBear.querySelector('.card-color select') ; 
    const nameBear = productBear.querySelector('.card-title') ; 
    const priceBear = productBear.querySelector('.price-bear') ; 
    const descriptionBear = productBear.querySelector('.description-bear'); 
       
    imageBear.src = teddy.imageUrl;
    nameBear.innerText = teddy.name;
    priceBear.innerText = ("Price : " + (teddy.price / 100) + " €");
    descriptionBear.innerText = teddy.description;    
    for (let color of teddy.colors) {
        const option = document.createElement('option'); // create the element options
        option.textContent = color;
        colorBear.appendChild(option); // this option put inside its parents that has a class (.card-color)
    }
}


function addToCart() {
    objTeddy.qty = parseInt(document.getElementById('myNumber').value);
    const items = JSON.parse(localStorage.getItem('items') || '[]'); //get the current list, if null : create an empty array
    let found = false
    for (let item of items) {
        if(item._id === objTeddy._id) { // if we find the same id 
            item.qty += objTeddy.qty
            found = true
        }
    }
    if (found === false) { // if not 'push'
        items.push(objTeddy)
    }

    // items.push(objTeddy); //add another product
    localStorage.setItem('items', JSON.stringify(items)); // set or save the new list
    window.location.href = "Panier.html";
}

// function deleteItems() {
    
//     for(let cart in addTocart()) {
//         if(addToCart[items].id === totalQty) {
//             cart[item].count --;
//             if(cart[item].count === 0) {
//                 cart.splice(item, 1);
//             }
//         break;
//         }
//     }
// }

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
  