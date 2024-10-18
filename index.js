

const getData = (inputValue) => {
  fetch (`https://swapi.dev/api/people/?search=${inputValue}`)
  .then(response => response.json())
  .then(jsonData => document.querySelector("body").innerHTML +=
    `<ul>
      <li>Name: ${jsonData.results[0].name}</li>
      <li>Height: ${jsonData.results[0].height}</li>
      <li>Eye: ${jsonData.results[0].eye_color}</li>`,
        fetch (jsonData.results[0].homeworld)
        .then(response => response.json())
        .then(jsonData => document.querySelector("body").innerHTML +=
      `<li>Home World: ${jsonData.results[0].name}</li>
      </ul>`
        )
    )
}

const searchData = () => {
  let inputValue = document.querySelector("#searchField").value;
  return inputValue
}

