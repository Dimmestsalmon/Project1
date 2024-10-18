const getData = (input) => {
  fetch (`https://swapi.dev/api/people/?search=${input}`)
  .then(response => response.json())
  .then(jsonData => console.log(jsonData))
}

function searchData(){
  var inputValue = document.querySelector("#searchField").value;
  console.log(inputValue);
}