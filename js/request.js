function get(url) { // get = request method HTTP renvoie une Promise et la réponse est déjà parse
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				resolve(JSON.parse(this.responseText));
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
		request.open("POST", url);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(jsonBody));
	}) 
}