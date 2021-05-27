// Question 4
// Let’s see we an api url www.example.com/api/get/1
// Write a sample code to ca

//answer
const fetch = require("node-fetch");
let ourApi = "https://my-json-server.typicode.com/typicode/demo/posts";
const callApi = (api) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => console.log(data)) //here, we can do anything with the data
    .catch((error) => console.log(error));
};

callApi(ourApi);
