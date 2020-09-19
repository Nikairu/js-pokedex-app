
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

    function getAll() {
        return pokemonList;
    }

    function add(item) {

        if (typeof (item) === 'object' && item.hasOwnProperty('name') && item.hasOwnProperty('height') && item.hasOwnProperty('types')) {
            pokemonList.push(item);
            console.log(`${item.name} added to the repository`);
        } else {
            console.log(`this is not a pokemon`);
        }

    }

    function filterByName(searchValue){

        return pokemonList.filter(item => item.name===searchValue);
    }

    function filterByMinimumHeight(searchValue){

        return pokemonList.filter(item => item.height>searchValue);
    }


    function addListItem(pokemon) {

        let pokemonBlock = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
    
        listItem.appendChild(button);
        pokemonBlock.appendChild(listItem);

    }



    return {
        addListItem: addListItem,
        add: add,
        getAll: getAll,
        filterByName: filterByName,
        filterByMinimumHeight: filterByMinimumHeight
    }


})();

pokemonRepository.add({
    name: 'Cubone',
    height: 0.4,
    types: ['ground']

});



pokemonRepository.getAll().forEach(pokemon => {

    pokemonRepository.addListItem(pokemon);
    
});


let searchResult = pokemonRepository.filterByName('Blaziken');
searchResult.forEach(pokemon => {

    //document.write(`Found ${pokemon.name} by name and this is his types: ${pokemon.types.join(", ")}<br>`);
});


searchResult = pokemonRepository.filterByMinimumHeight(0.6);
searchResult.forEach(pokemon => {
    //document.write(`Found ${pokemon.name} by minumum height and this is his height: ${pokemon.height}<br>`);
});
