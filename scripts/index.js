console.log("hello!");

const fetchPokemon = () => {
    let id = document.getElementById("pokemonId").value;

    if(!isValidPokemonId(id)){
        alert("Invalid Pokemon ID!");
        return;
    }

    console.log(`Fetching Pokemon ${id}!`);

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url)
        .then(
            (result) => {
                return result.json();
            }
        ).then(
            (data) => {
                console.log(data);
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    image: data.sprites['front_default'],
                    type: data.types.map(
                            (type) => type.type.name
                        ).join(', ')    
                }
                console.log(pokemon);
                displayPokemon(pokemon);
            }
        )
}

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = 
    `
    <div class="card">
        <img class="card-image" src="${pokemon.image}"/>
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
    </div>
    `;

    const pokemonCard = document.getElementById("pokemonCard");
    pokemonCard.innerHTML = pokemonHTMLString;
}

function isValidPokemonId(id) {
    var n = Math.floor(Number(id));
    return n !== Infinity && String(n) === id && n >= 0;
}