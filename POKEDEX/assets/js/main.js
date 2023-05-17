
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span> <!--Header-->
            <span class="name">${pokemon.name}</span> <!--Header-->
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList') // indo no html, pegando um elemento po id e adicionando ele numa variavel

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map((convertPokemonToLi)).join('')

})