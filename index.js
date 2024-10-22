

const getData = (inputValue) => {
  document.querySelector("#newList").innerHTML = `<iframe src="https://giphy.com/embed/J6Nj4TzJWtyWk" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-trek-lasers-sausage-J6Nj4TzJWtyWk">via GIPHY</a></p>`
  fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
    .then(response => response.json())
    .then(jsonData => {
      const person = jsonData.results[0];
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(homeWorldData => {
          document.querySelector("#newList").innerHTML =
          `<li>Name: ${person.name}</li>
              <li>Height: ${person.height}</li>
              <li>Eye Color: ${person.eye_color}</li>
              <li class = "homeworld" id = "clickHere"><a> Homeworld: ${homeWorldData.name}</a></li>`
          document.querySelector(".homeworld").addEventListener('click', function(){
            loadPlanet(person.homeworld)
            })
        })
    })
};

const loadPlanet = (input) => {
  fetch(input)
  .then (response => response.json())
  .then (homeWorld => {
    document.querySelector("#newList").innerHTML +=
      `<ul>
        <li>Planet: ${homeWorld.name}</li>
        <li>Terrain: ${homeWorld.terrain}</li>
        <li>Population: ${homeWorld.population}</li>
      </ul>`
  })
  document.querySelector(".homeworld").className = "homeworlds"
}

const searchData = () => {
  let inputValue = document.querySelector("#searchField").value;
  return inputValue
}

