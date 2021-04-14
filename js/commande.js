const parametres = window.location.search.replace("?", "").split("&");
const idCommande = parametres[0].replace("id=", "")
const prixtotal = parametres[1].replace("price=", "")

document.getElementById("numerocommande").textContent = idCommande;
document.getElementById("prixtotal").textContent = prixtotal;