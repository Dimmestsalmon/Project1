

const getData = (inputValue) => {
  fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
    .then(response => response.json())
    .then(jsonData => {
      const person = jsonData.results[0];
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(homeWorldData => {
          document.querySelector("body").innerHTML +=
          `<ul>
              <li>Name: ${person.name}</li>
              <li>Height: ${person.height}</li>
              <li>Eye Color: ${person.eye_color}</li>
              <li class = "homeworld"> Homeworld: ${homeWorldData.name}</li>
            </ul>`
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
    document.querySelector("body").innerHTML +=
      `<ul>
        <li>Name: ${homeWorld.name}</li>
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




