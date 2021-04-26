function get(url) { // get = method of HTTP request that send back a promiss and its answer that already parsed
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				resolve(JSON.parse(this.responseText)); // parse : from XML to JSON
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
			if (this.readyState == XMLHttpRequest.DONE && this.status == 201) { // 201 = indicate that request has sent and new source has been create
				resolve(JSON.parse(this.responseText));
			}
		};
		request.open("POST", url); //create the ressourse and send back the url
		request.setRequestHeader("Content-Type", "application/json"); // setRequestHeader : information for the server what type of data that we sent
		request.send(JSON.stringify(jsonBody)); // JSON to a string
	}) 
}