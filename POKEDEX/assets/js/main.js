
function convertPokemonToLi(pokemon) {
    return`
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
    //pokemonList.innerHTML += '<li>Teste</li>' // somando dentro da lista um filho na lista

pokeApi.getPokemons.then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon);           
        }
})