var pokemonList = [];

pokemonList[0] = {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison']
};
pokemonList[1] = {
    name: 'Blastoise',
    height: 1.6,
    types: ['water']
};
pokemonList[2] = {
    name: 'Blaziken',
    height: 1.9,
    types: ['fire', 'fighting']
};

pokemonList.forEach(pokemon => {
    if(pokemon.height<1){  
        document.write(`${pokemon.name} (height: ${pokemon.height})<br>`)
    }
    else{
        document.write(`${pokemon.name} (height: ${pokemon.height}) - Wow that's big!<br>`)
    }
});



console.log(pokemonList);