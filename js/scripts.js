
var pokemonRepository = (function () {

    var pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            types: ['grass', 'poison']
        },
        {
            name: 'Blastoise',
            height: 1.6,
            types: ['water']
        },
        {
            name: 'Blaziken',
            height: 1.9,
            types: ['fire', 'fighting']
        }

    ];

    function getAll(){
        return pokemonList;
    }
    function add(item){
        console.log(typeof(item));
        pokemonList.push(item);
    }

    return{
        add: add,
        getAll: getAll
    }


})();


pokemonRepository.getAll().forEach(pokemon => {
    if(pokemon.height<1){  
        document.write(`${pokemon.name} (height: ${pokemon.height})<br>`)
    }
    else{
        document.write(`${pokemon.name} (height: ${pokemon.height}) - Wow that's big!<br>`)
    }
});

pokemonRepository.add({
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison']

});

//console.log(pokemonList);