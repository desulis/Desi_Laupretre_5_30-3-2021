function get(url) { // get = request method HTTP renvoie une Promise et la réponse est déjà parsé
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				resolve(JSON.parse(this.responseText)); // parse : de XML en JSON
			}
		};
		request.open("GET", url);
		request.send();
	}) 
}

function post(url, jsonBody) {
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 201) { // 201 = 201 : indique que tout s'est bien passé et qu'une nouvelle ressource a bien été créée
				resolve(JSON.parse(this.responseText));
			}
		};
		request.open("POST", url); //crée une ressource et envoi à url
		request.setRequestHeader("Content-Type", "application/json"); // setRequestHeader : information pour le serveur pour le dire quel type de donné envoyé
		request.send(JSON.stringify(jsonBody)); // JSON à string
	}) 
}