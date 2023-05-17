
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.number}</span> <!--Header-->
            <span class="name">${pokemon.name}</span> <!--Header-->
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList') // indo no html, pegando um elemento po id e adicionando ele numa variavel

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map((convertPokemonToLi)).join('')
    pokemonList.innerHTML = newHtml

})