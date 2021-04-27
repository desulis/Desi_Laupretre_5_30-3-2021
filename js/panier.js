//create a row and column based on total of products put into cart
const table = document.getElementById('items-cart');

function addRow(values) {
    const tr = document.createElement("tr");
    for (let value of values) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
//parse the item from JSON and save it into localStorage
const items = JSON.parse(localStorage.getItem('items'));

let total = 0;
let totalQty = 0;
for (let item of items) {
    addRow([item.name, item.qty, item.price/100 + " €"]);
    total += item.price * item.qty;
    totalQty += item.qty;
}
//quantity total and total price
addRow(["Total", totalQty, (total/100)+ " €"]);

function emptyCart () {
    if (items.length === 0) {
        const messageVide = document.querySelector('.message-vide');
        messageVide.textContent = "Votre panier est vide !";
        table.innerText= "" //erase the table with its value when the button clear pressed
        const form = document.querySelector('.formulaire')
        form.innerText= "" //unshow the form when the cart is empty
    } 
}

emptyCart () //call the function when cart is empty

//the clear button to reset the cart
const del = document.querySelector('.clear-cart')
del.addEventListener('click', supprimer)

function supprimer() {
    items.length = 0
    localStorage.setItem('items', JSON.stringify([]))
    return emptyCart()
}

// submit the filled form
function order (event) {
    event.preventDefault(); 
    const tableId = [] //
    for(let idItems of items){
        tableId.push(idItems._id)
    }
        
    // a post parameter to send the JSON to a server
    const jsonBody = { 
        contact: {
            firstName: document.getElementById('firstname').value,
            lastName: document.getElementById('lasttname').value,
            address: document.getElementById('addresse').value,
            city: document.getElementById('city').value,
            email: document.getElementById('email').value,
        },
        products: tableId
    }
    // post : create a new source and send this url with the jsonBody 
    post("http://localhost:3000/api/teddies/order", jsonBody).then((order) => {
        let price = 0
        for (let product of order.products) {
            price += product.price / 100
        }
        console.log(order)
        window.location.replace("Commande.html?orderid=" + order.orderId + "&price=" + price); // url parameter for the page "commande.html" includ its orderId and its price
    })
}

