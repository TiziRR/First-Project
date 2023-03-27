
// API guardada en variable
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";

// Llamada a API
const call_API = fetch(API_CHARACTERS);

// Transformación de API a JSON
call_API.then((data) => {
return data.json();
})
.then((data) => {
    
    const $container = document.getElementById("container");
    const characters = data.results;

    for(let i = 0; i < characters.length; i++) {
    $container.innerHTML += ` 
    <div class="item-grid">
     <img src= ${characters[i].image} alt="imagen-personaje">
     <h2>${characters[i].name}</h2>
     <p>Gender: ${characters[i].gender}</p>
     <p>Species: ${characters[i].species}</p>
     <p>Status: ${characters[i].status}</p>
    </div>
    `
    }



})

.catch((err) => {
    console.log(err)
});