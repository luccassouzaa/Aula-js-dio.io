const pokemonList = document.getElementById('pokemonList') // indo no html, pegando um elemento po id e adicionando ele numa variavel
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 11;
const limit = 5;
let offset = 0;





function loadPokemonsItens (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}" >
                <span class="number">#${pokemon.number}</span> <!--Header-->
                <span class="name">${pokemon.name}</span> <!--Header-->
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonsItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    debugger
    const qtdRecordNextPage = offset + limit;
    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonsItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonsItens(offset, limit)
    }
})