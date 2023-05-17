
const pokeApi = {}

convertPokeApiDetailToPokemon = (pokeDetail) => {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon
}  // conversão da api para nosso modelo.

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 2) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json()) // convertendo pra json
        .then((jsonBody) => jsonBody.results) //json vem com um monte de detalhe - porém oq interessa é o resultado
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail)) //mapeando a lista de pokemons para uma lista de requisições do detalhes dos pokemons, convertendo a response que ele me der para um json e que é um novo fetch do pokemon 
        .then((detailRequest) => Promise.all(detailRequest)) //aqui estamos esperando todas as requisições terminarem
        .then((pokemonsDetails) => pokemonsDetails)
}
