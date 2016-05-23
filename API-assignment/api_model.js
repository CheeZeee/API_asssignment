// Create a new request object
var request = new XMLHttpRequest();

// Initialize a request
request.open('get', 'https://api.github.com/users/cheezeee');

function dumpResponse() {
  console.log(this.responseText);
}
var request = new XMLHttpRequest();
request.onload = dumpResponse;
request.open('get', 'https://api.github.com/users/cheezeee', true);
request.send();

function printRepoCount() {
  var responseObj = JSON.parse(this.responseText);
  console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
}

var request = new XMLHttpRequest();
request.onload = printRepoCount;
request.open('get', 'https://api.github.com/users/cheezeee', true);
request.send();