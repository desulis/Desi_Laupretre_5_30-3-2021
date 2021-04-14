function get(url) {
	return new Promise((resolve, reject) => {
		var request = new XMLHttpRequest();
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
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
				resolve(JSON.parse(this.responseText));
			}
		};
		request.open("POST", url);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(jsonBody));
	}) 
}